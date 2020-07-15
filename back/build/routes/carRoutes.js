"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carController_1 = require("@controllers/carController");
class carRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', carController_1.carController.getHotels);
        this.router.post('/', carController_1.carController.createHotel);
        this.router.delete('/:id', carController_1.carController.deleteHotel);
        this.router.put('/:id', carController_1.carController.updateHotel);
    }
}
const routes = new carRoutes();
exports.default = routes.router;
