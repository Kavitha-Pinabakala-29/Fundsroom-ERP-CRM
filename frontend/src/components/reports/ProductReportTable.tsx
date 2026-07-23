import type { ProductReport } from "../../types/report";

type Props = {
  products: ProductReport[];
};

export default function ProductReportTable({
  products,
}: Props) {

  return (

    <table className="w-full border">

      <thead>

        <tr className="border bg-gray-100">

          <th className="p-3">Name</th>

          <th className="p-3">SKU</th>

          <th className="p-3">Price</th>

          <th className="p-3">Stock</th>

        </tr>

      </thead>

      <tbody>

        {products.map((product) => (

          <tr
            key={product.id}
            className="border"
          >

            <td className="p-3">
              {product.name}
            </td>

            <td className="p-3">
              {product.sku}
            </td>

            <td className="p-3">
              ₹ {product.price}
            </td>

            <td className="p-3">
              {product.stock}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}