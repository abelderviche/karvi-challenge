"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carsRoutes_1 = __importDefault(require("@routes/carsRoutes"));
const citiesRoutes_1 = __importDefault(require("@routes/citiesRoutes"));
class indexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api-status', (req, res) => res.json({ status: 'ok', msg: 'Api funcionando correctamente...' }));
        this.router.use('/cars', carsRoutes_1.default);
        this.router.use('/cities', citiesRoutes_1.default);
    }
}
const routes = new indexRoutes();
exports.default = routes.router;
