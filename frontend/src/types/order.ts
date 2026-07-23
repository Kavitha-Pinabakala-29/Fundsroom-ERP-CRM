export interface OrderItem {

  id: string;

  orderId: string;

  productId: string;

  quantity: number;

  price: number;

  product: {

    id: string;

    name: string;

    sku: string;

    price: number;

    stock: number;

  };

}

export interface Order {

  id: string;

  customerId: string;

  status: string;

  total: number;

  createdAt: string;

  updatedAt: string;

  customer: {

    id: string;

    name: string;

    email: string;

    phone: string;

    company: string;

    address: string;

    status: string;

  };

  items: OrderItem[];

}