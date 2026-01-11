import { Request, Response } from "express";
declare class AdminController {
    static loginAdmin(req: Request, res: Response): Promise<Response>;
    static reloginAdmin(req: Request, res: Response): Promise<Response>;
    static showSupportTicket(req: Request, res: Response): Promise<Response>;
}
export default AdminController;
//# sourceMappingURL=adminController.d.ts.map