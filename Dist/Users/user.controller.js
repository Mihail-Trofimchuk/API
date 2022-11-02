"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const base_controller_1 = require("../Common/base.controller");
const http_error_class_1 = require("../errors/http-error.class");
class UserController extends base_controller_1.BaseController {
    constructor(logger) {
        super(logger);
        this.bindRoutes([
            { path: '/register', method: 'post', func: this.register },
            { path: '/loggin', method: 'post', func: this.loggin },
        ]);
    }
    loggin(req, res, next) {
        next(new http_error_class_1.HTTPError(401, 'Ошибка авторизации'));
    }
    register(req, res, next) { }
}
exports.UserController = UserController;
