import express from "express";
import cors from "cors";
import { connectDB } from "./config/database.js";
import foodRouter from "./routes/foodRoutes.js";

//app config
const app = express();
const port = 5000;

//middleware
//frontend to backend request will be parsed using json
app.use(express.json());
//can access backend from any frontend
app.use(cors());

//database connection
connectDB();

//routes -- api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

//req data from server
app.get("/", (req, res) => {
  res.send("hello from yumzy");
});

app.listen(port, () => {
  console.log(`server started on ${port}`);
});