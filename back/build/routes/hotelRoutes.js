"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hotelsController_1 = require("@controllers/hotelsController");
class hotelsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', hotelsController_1.hotelsController.getHotels);
        this.router.post('/', hotelsController_1.hotelsController.createHotel);
        this.router.delete('/:id', hotelsController_1.hotelsController.deleteHotel);
        this.router.put('/:id', hotelsController_1.hotelsController.updateHotel);
    }
}
const routes = new hotelsRoutes();
exports.default = routes.router;
