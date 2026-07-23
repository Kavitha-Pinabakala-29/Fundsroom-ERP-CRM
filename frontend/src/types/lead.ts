export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "QUALIFIED"
  | "NEGOTIATION"
  | "WON"
  | "LOST";


export interface Lead {

  id: string;

  title: string;

  description?: string | null;

  status: LeadStatus;

  customerId: string;

  assignedTo?: string | null;


  customer: {
    id: string;
    name: string;
    email: string;
    company: string;
  };


  salesUser?: {
    id: string;
    name: string;
    email: string;
    role: string;
  } | null;


  createdAt: string;

  updatedAt: string;
}