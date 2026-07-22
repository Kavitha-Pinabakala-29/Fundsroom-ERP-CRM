import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";

import authRoutes from "./routes/auth.routes";

import customerRoutes from "./routes/customer.routes";

import leadRoutes from "./routes/lead.routes";

import dashboardRoutes from "./routes/dashboard.routes";

import productRoutes from "./routes/product.routes";

import stockRoutes from "./routes/stock.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/products", productRoutes);
app.use("/api/stock", stockRoutes);

export default app; 