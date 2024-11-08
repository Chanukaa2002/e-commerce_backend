import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoute);
app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
