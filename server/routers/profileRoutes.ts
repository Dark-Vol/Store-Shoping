import { Router } from "express";
import ProfileController from "@controllers/profileController";

const router = Router();

router.get("/", ProfileController.getProfile);
router.post("/", ProfileController.createProfile);
router.put("/:id", ProfileController.updateProfile);

export default router;

