import express from "express";
import multer from "multer";
import { createBooking, getBookings } from "../controllers/bookingController.js";

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

router.post("/submit", upload.fields([{ name: "photo" }, { name: "adhaar" }]), createBooking);
router.get("/get", getBookings);

export default router;
