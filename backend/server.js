import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
