import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { db } from "./database/db.js";
import { userRouter, authRouter } from "./routes/index.js"; 

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// CORS Configuration
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

// Connect to database before starting the server
db()
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });