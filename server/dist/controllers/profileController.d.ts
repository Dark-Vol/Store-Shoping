import { Request, Response } from "express";
declare class ProfileController {
    static createProfile(req: Request, res: Response): Promise<Response>;
    static getProfile(req: Request, res: Response): Promise<Response>;
    static updateProfile(req: Request, res: Response): Promise<Response>;
}
export default ProfileController;
//# sourceMappingURL=profileController.d.ts.map