import { Request, Response } from "express";
declare class PhotoController {
    static getAllPhotos(req: Request, res: Response): Promise<Response>;
    static getPhotoById(req: Request, res: Response): Promise<Response>;
    static createPhoto(req: Request, res: Response): Promise<Response>;
    static updatePhoto(req: Request, res: Response): Promise<Response>;
    static deletePhoto(req: Request, res: Response): Promise<Response>;
}
export default PhotoController;
//# sourceMappingURL=photoController.d.ts.map