import { Router } from "express";
import PhotoController from "@controllers/photoController";

const router = Router();

router.get("/", PhotoController.getAllPhotos);
router.get("/:id", PhotoController.getPhotoById);
router.post("/", PhotoController.createPhoto);
router.put("/:id", PhotoController.updatePhoto);
router.delete("/:id", PhotoController.deletePhoto);

export default router;

