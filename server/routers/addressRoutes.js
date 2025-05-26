const express = require("express");
const AddressController = require("../controllers/addressController");

const router = express.Router();

router.get("/", AddressController.getAllAddresses);
router.get("/:id", AddressController.getAddressById);
router.post("/", AddressController.createAddress);
router.put("/:id", AddressController.updateAddress);
router.delete("/:id", AddressController.deleteAddress);