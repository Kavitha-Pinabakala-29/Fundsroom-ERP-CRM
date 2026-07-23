export default function TopProducts({
  products,
}: any) {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Top Products
      </h2>

      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product: any) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}