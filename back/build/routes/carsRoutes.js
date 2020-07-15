"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carsController_1 = require("@controllers/carsController");
class carsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', carsController_1.carsController.getCars);
    }
}
const routes = new carsRoutes();
exports.default = routes.router;
