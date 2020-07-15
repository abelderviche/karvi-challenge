"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = __importDefault(require("@store/data.json"));
class CarsService {
    static getCars(filters) {
        let filtered = data_json_1.default;
        if (filters.city)
            filtered = filtered.filter(car => car.city.cityCode.toLowerCase().includes(filters.city.toLowerCase()));
        return {
            "availableFilters": this.getAvailableFilters(filtered),
            "items": filtered,
            "totalCount": filtered.length,
            "pageSize": 20,
            "totalPages": 1
        };
    }
    //obtengo todos los filtros disponibles, seteados en alguna config
    static getAvailableFilters(carsArray) {
        const priceLimits = {
            "min": carsArray.reduce((min, b) => Math.min(min, b.minPrice), carsArray[0].minPrice),
            "max": carsArray.reduce((min, b) => Math.max(min, b.minPrice), carsArray[0].minPrice)
        };
        const brands = [...new Set(carsArray.map(m => m.brand.id))];
        const segments = [...new Set(carsArray.map(m => m.segment.id))];
        const fuelTypes = [...new Set(carsArray.map(m => m.fuelTypeId))];
        const transmissionTypes = [...new Set(carsArray.map(m => m.transmisionTypeId))];
        return {
            "priceLimits": priceLimits,
            "brands": brands,
            "segments": segments,
            "fuelTypes": fuelTypes,
            "transmissionTypes": transmissionTypes
        };
    }
}
exports.default = CarsService;
