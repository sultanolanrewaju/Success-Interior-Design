import express from "express"
import cors from "cors"
import dotenv from "dotenv/config"
import { ConnectDB } from "./config/db.js"
import ProductRoutes from "./routes/ProductsRoutes.js"
import BookingRoutes from "./routes/BookingRoutes.js"
import ContactRoutes from "./routes/ContactRoutes.js"

const app = express()
const PORT = process.env.PORT

app.use(express.json())
const allowedOrigins = [
  "http://localhost:5173",
  "https://successinteriordesign.netlify.app/",
  "https://www.successinteriordesign.com.ng/"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/api/products",ProductRoutes)
app.use("/api/bookings",BookingRoutes)
app.use("/api/contact",ContactRoutes)


app.get("/",(req,res)=>{
    res.send("Hello There!")
})


ConnectDB();
app.listen(PORT,()=>{
    console.log("Server is up and running");
})


