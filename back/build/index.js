"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
require("module-alias/register");
// import expressHealthCheck from 'express-healthcheck';
const swagger_json_1 = __importDefault(require("./swagger.json"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cache_dns_1 = __importDefault(require("@shared/cache-dns"));
const indexRoutes_1 = __importDefault(require("@routes/indexRoutes"));
const server = express_1.default();
server.use(body_parser_1.default.json());
server.use(body_parser_1.default.urlencoded({ extended: true }));
cache_dns_1.default();
server.use(compression_1.default());
server.use(cors_1.default());
// this.server.use('/api/healthcheck', expressHealthCheck());
server.set('port', process.env.port || 3001);
server.use('/api', indexRoutes_1.default);
server.use('/api/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
server.listen(server.get('port'), () => {
    console.log('Server running on port', server.get('port'));
});
