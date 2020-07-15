"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carsService_1 = __importDefault(require("@services/carsService"));
class CarsController {
    getCars(req, res, next) {
        try {
            res.json(carsService_1.default.getCars(req.query));
        }
        catch (err) {
            next(err);
        }
    }
}
exports.carsController = new CarsController();
