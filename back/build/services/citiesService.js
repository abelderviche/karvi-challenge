"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = __importDefault(require("@store/data.json"));
class CitiesService {
    static getCities() {
        let cities = [];
        data_json_1.default.forEach(car => {
            if (cities.find(city => city.id === car.city.id) === undefined) {
                cities.push(car.city);
            }
        });
        return cities;
    }
}
exports.default = CitiesService;
