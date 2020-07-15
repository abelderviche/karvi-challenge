"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const citiesController_1 = require("@controllers/citiesController");
class citiesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', citiesController_1.citiesController.getCities);
    }
}
const routes = new citiesRoutes();
exports.default = routes.router;
