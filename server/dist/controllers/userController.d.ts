import { Request, Response } from "express";
declare class UserController {
    static createUser(req: Request, res: Response): Promise<Response>;
    static loginUser(req: Request, res: Response): Promise<Response>;
    static reloginUser(req: Request, res: Response): Promise<Response>;
}
export default UserController;
//# sourceMappingURL=userController.d.ts.map