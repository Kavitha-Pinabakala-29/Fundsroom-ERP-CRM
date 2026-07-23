export interface RevenueAnalytics {
  totalRevenue: number;
}

export interface ProductAnalytics {
  id: string;
  name: string;
  sku: string;
  stock: number;
  price: number;
}

export interface CustomerAnalytics {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface OrderAnalytics {
  id: string;
  total: number;
  status: string;
  customer: {
    name: string;
  };
}