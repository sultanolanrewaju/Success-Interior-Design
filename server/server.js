import express from "express"
import cors from "cors"
import dotenv from "dotenv/config"
import { ConnectDB } from "./config/db.js"
import ProductRoutes from "./routes/ProductsRoutes.js"
import BookingRoutes from "./routes/BookingRoutes.js"


const app = express()
const PORT = process.env.PORT

app.use(express.json())
const allowedOrigins = [
  "http://localhost:5173",
   "http://localhost:5174",
  "https://khttps://successinteriordesign.netlify.app/",
  "https://successinteriordesign.com.ng/",
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



app.get("/",(req,res)=>{
    res.send("Hello There!")
})


const server = async()=>{
    try {
        await ConnectDB();
app.listen(PORT,()=>{
    console.log("Server is up and running");
})
} catch (error) {
        console.error("Failed to connect to database:", error);
    }
}

server();

