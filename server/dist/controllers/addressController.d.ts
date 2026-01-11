import { Request, Response } from "express";
declare class AddressController {
    static getAllAddresses(req: Request, res: Response): Promise<Response>;
    static getAddressById(req: Request, res: Response): Promise<Response>;
    static createAddress(req: Request, res: Response): Promise<Response>;
    static updateAddress(req: Request, res: Response): Promise<Response>;
    static deleteAddress(req: Request, res: Response): Promise<Response>;
}
export default AddressController;
//# sourceMappingURL=addressController.d.ts.map