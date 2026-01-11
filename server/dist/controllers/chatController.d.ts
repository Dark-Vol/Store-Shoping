import { Request, Response } from "express";
declare class ChatController {
    static createSupportTicket(req: Request, res: Response): Promise<Response>;
    static closeSupportTicket(req: Request, res: Response): Promise<Response>;
    static getStateTicket(req: Request, res: Response): Promise<Response>;
    static saveMessage(req: Request, res: Response): Promise<Response>;
    static getMessages(req: Request, res: Response): Promise<Response>;
}
export default ChatController;
//# sourceMappingURL=chatController.d.ts.map