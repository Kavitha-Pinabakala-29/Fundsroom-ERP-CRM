export interface DashboardData {
  totalCustomers: number;
  totalLeads: number;
  newLeads: number;
  contactedLeads: number;
  qualifiedLeads: number;
  negotiationLeads: number;
  wonLeads: number;
  lostLeads: number;
}

export interface DashboardStats {
  customers: number;
  products: number;
  orders: number;
  invoices: number;
  payments: number;
  revenue: number;
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
}

export interface OrderStatus {
  status: string;
  count: number;
}