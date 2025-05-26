const express = require("express");
const ProfileController = require("../controllers/profileController");

const router = express.Router();

router.get("/", ProfileController.getProfile);
router.post("/", ProfileController.createProfile);
router.put("/:id", ProfileController.updateProfile);
// router.delete("/:id", ProfileController.deleteProfile);
// router.get("/:id", ProfileController.getProfileById);

module.exports = router;