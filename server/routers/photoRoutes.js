const express = require("express");
const PhotoController = require("../controllers/photoController");

const router = express.Router();

router.get("/", PhotoController.getAllPhotos);
router.get("/:id", PhotoController.getPhotoById);
router.post("/", PhotoController.createPhoto);
router.put("/:id", PhotoController.updatePhoto);