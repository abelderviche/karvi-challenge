"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const citiesService_1 = __importDefault(require("@services/citiesService"));
class CitiesController {
    getCities(req, res, next) {
        try {
            res.json(citiesService_1.default.getCities());
        }
        catch (err) {
            next(err);
        }
    }
}
exports.citiesController = new CitiesController();
