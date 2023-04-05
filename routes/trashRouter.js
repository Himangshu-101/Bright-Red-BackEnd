import express from "express";
import {
  getAllTrash,
  createTrash,
  deleteTrash,
  updateTrash,
  getOneTrash,
} from "../controllers/trash.controller.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();
router.route("/").get(getAllTrash);
router.route("/").post(protect, createTrash);
router.route("/:id").get(getOneTrash);
router.route("/:id").delete(protect, deleteTrash);
router.route("/:id").patch(protect, updateTrash);
export default router;