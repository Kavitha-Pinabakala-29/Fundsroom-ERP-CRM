export interface DashboardStats {
  customers: number;
  products: number;
  orders: number;
  invoices: number;
  payments: number;
  revenue: number;
}

export interface RevenueData {
  month: string;
  revenue: number;
}

export interface OrderStatus {
  name: string;
  value: number;
}

export interface RecentOrder {
  id: string;
  total: number;

  customer: {
    name: string;
  };
}

export interface RecentCustomer {
  id: string;
  name: string;
  email: string;
}