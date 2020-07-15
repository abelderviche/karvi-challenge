"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = __importDefault(require("@store/data.json"));
class HotelService {
    static getHotels(filters) {
        const stars = filters.stars ? filters.stars.map(star => parseInt(star)) : null;
        let filtered = data_json_1.default;
        if (filters.name)
            filtered = filtered.filter(hotel => hotel.name.toLowerCase().includes(filters.name.toLowerCase()));
        if (stars)
            filtered = filtered.filter((hotel) => stars.includes(hotel.stars));
        return filtered;
    }
    static create(request) {
        return {
            id: Math.random(),
            date: new Date()
        };
    }
    static delete(id) {
        return {
            msg: `Hotel ${id} deleted success`
        };
    }
    static update(id) {
        return {
            msg: `Hotel ${id}  updated success`
        };
    }
}
exports.default = HotelService;
