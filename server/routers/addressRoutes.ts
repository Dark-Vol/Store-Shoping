import { Router } from "express";
import AddressController from "@controllers/addressController";

const router = Router();

router.get("/", AddressController.getAllAddresses);
router.get("/:id", AddressController.getAddressById);
router.post("/", AddressController.createAddress);
router.put("/:id", AddressController.updateAddress);
router.delete("/:id", AddressController.deleteAddress);

export default router;

