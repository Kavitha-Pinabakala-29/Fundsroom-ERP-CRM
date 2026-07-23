import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import type { Product } from "../../types/product";

import {
  getProducts,
} from "../../services/productService";

import ProductTable from "../../components/products/ProductTable";
import AddProductModal from "../../components/products/AddProductModal";
import EditProductModal from "../../components/products/EditProductModal";
import DeleteProductDialog from "../../components/products/DeleteProductDialog";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  const [open, setOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  async function loadProducts() {
    try {
      const data = await getProducts();

      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <MainLayout>
      <h1 className="mb-6 text-3xl font-bold">
        Products
      </h1>

      <button
        onClick={() => setOpen(true)}
        className="mb-5 rounded bg-blue-600 px-4 py-2 text-white"
      >
        + Add Product
      </button>

      <AddProductModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={loadProducts}
      />

      <EditProductModal
        open={editOpen}
        product={selectedProduct}
        onClose={() => setEditOpen(false)}
        onSuccess={loadProducts}
      />

      <DeleteProductDialog
        open={deleteOpen}
        product={selectedProduct}
        onClose={() => setDeleteOpen(false)}
        onSuccess={loadProducts}
      />

      <ProductTable
        products={products}
        onEdit={(product: Product) => {
          setSelectedProduct(product);
          setEditOpen(true);
        }}
        onDelete={(product: Product) => {
          setSelectedProduct(product);
          setDeleteOpen(true);
        }}
      />
    </MainLayout>
  );
}