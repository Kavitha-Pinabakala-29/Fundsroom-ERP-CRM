export interface DashboardStats {
  customers: number;
  products: number;
  orders: number;
  invoices: number;
  payments: number;
  revenue: number;
}

export interface SalesReport {
  id: string;
  amount: number;
  method: string;
  transactionId: string;
  createdAt: string;
  invoice: {
    invoiceNo: string;
  };
}

export interface ProductReport {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
}

export interface CustomerReport {
  id: string;
  name: string;
  email: string;
  orders: number;
  totalSpent: number;
}