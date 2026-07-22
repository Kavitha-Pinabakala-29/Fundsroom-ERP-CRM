import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";

import authRoutes from "./routes/auth.routes";

import customerRoutes from "./routes/customer.routes";

import leadRoutes from "./routes/lead.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/leads", leadRoutes);

export default app; 