import { Request, Response } from "express";

import {
  createInvoice,
  getInvoices,
  markInvoicePaid,
} from "../services/invoice.service";

export async function create(
  req: Request,
  res: Response
) {
  try {
    const invoice = await createInvoice(req.body);

    res.status(201).json(invoice);
  } catch (err: any) {
    res.status(400).json({
      message: err.message,
    });
  }
}

export async function getAll(
  _req: Request,
  res: Response
) {
  try {
    const invoices = await getInvoices();

    res.json(invoices);
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
    });
  }
}

export async function pay(
  req: Request,
  res: Response
) {
  try {
    const invoice = await markInvoicePaid(
      req.params.id
    );

    res.json(invoice);
  } catch (err: any) {
    res.status(400).json({
      message: err.message,
    });
  }
}