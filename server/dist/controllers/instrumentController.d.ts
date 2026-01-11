import { Request, Response } from "express";
declare class InstrumentController {
    static getAllInstruments(req: Request, res: Response): Promise<Response>;
    static getInstrumentById(req: Request, res: Response): Promise<Response>;
    static getInstrumentByCategoryId(req: Request, res: Response): Promise<Response>;
    static createInstrument(req: Request, res: Response): Promise<Response>;
    static updateInstrument(req: Request, res: Response): Promise<Response>;
    static deleteInstrument(req: Request, res: Response): Promise<Response>;
    static searchInstruments(req: Request, res: Response): Promise<Response>;
    static filterInstruments(req: Request, res: Response): Promise<Response>;
    static sortInstruments(req: Request, res: Response): Promise<Response>;
    static paginateInstruments(req: Request, res: Response): Promise<Response>;
    static countInstruments(req: Request, res: Response): Promise<Response>;
    static getInstrumentCategories(req: Request, res: Response): Promise<Response>;
    static getInstrumentManufacturers(req: Request, res: Response): Promise<Response>;
    static getInstrumentPhotos(req: Request, res: Response): Promise<Response>;
    static addInstrumentPhoto(req: Request, res: Response): Promise<Response>;
    static deleteInstrumentPhoto(req: Request, res: Response): Promise<Response>;
    static getInstrumentsWithCategoriesAndManufacturers(req: Request, res: Response): Promise<Response>;
    static getInstrumentsByManufacturer(req: Request, res: Response): Promise<Response>;
    static getInstrumentsByCategory(req: Request, res: Response): Promise<Response>;
    static getInstrumentsByPriceRange(req: Request, res: Response): Promise<Response>;
    static getInstrumentsByRating(req: Request, res: Response): Promise<Response>;
    static getInstrumentsByAvailability(req: Request, res: Response): Promise<Response>;
    static getInstrumentsByManufacturerAndCategory(req: Request, res: Response): Promise<Response>;
    static getInstrumentsByManufacturerAndPriceRange(req: Request, res: Response): Promise<Response>;
    static getInstrumentsByCategoryAndPriceRange(req: Request, res: Response): Promise<Response>;
    static getInstrumentsByManufacturerAndRating(req: Request, res: Response): Promise<Response>;
}
export default InstrumentController;
//# sourceMappingURL=instrumentController.d.ts.map