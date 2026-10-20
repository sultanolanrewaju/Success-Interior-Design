import express from "express"
import { getOneProducts, getProducts,postProducts, updateProducts,deleteProducts } from "../controllers/ProductsController.js";
import upload from "../middlewares/ImageMiddleware.js";

const router = express.Router();

var uploadMiddleware = upload.single("image"); // Image field name


router.get("/",getProducts)
router.get("/:id",getOneProducts)
router.post("/",uploadMiddleware,postProducts)
router.patch("/:id",updateProducts)
router.delete("/",deleteProducts)
export default router;