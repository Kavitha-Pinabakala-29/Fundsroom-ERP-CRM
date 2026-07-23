export async function getNotifications() {
  return [
    {
      id: 1,
      title: "New Order",
      message: "A new order has been created.",
    },
    {
      id: 2,
      title: "Invoice Paid",
      message: "Invoice INV-1001 has been paid.",
    },
    {
      id: 3,
      title: "Low Stock",
      message: "Dell Laptop stock is getting low.",
    },
  ];
}