import { Request, Response } from "express";
declare class ItemsController {
    static getAllItems(req: Request, res: Response): Promise<Response>;
    static getItemById(req: Request, res: Response): Promise<Response>;
    static createItem(req: Request, res: Response): Promise<Response>;
    static updateItem(req: Request, res: Response): Promise<Response>;
    static deleteItem(req: Request, res: Response): Promise<Response>;
}
export default ItemsController;
//# sourceMappingURL=itemsController.d.ts.map