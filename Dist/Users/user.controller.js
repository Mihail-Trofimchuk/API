"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const base_controller_1 = require("../Common/base.controller");
class UserController extends base_controller_1.BaseController {
    constructor(logger) {
        super(logger);
        this.bindRoutes([
            { path: '/register', method: 'post', func: this.register },
            { path: '/loggin', method: 'post', func: this.loggin },
        ]);
    }
    loggin(req, res, next) {
        this.ok(res, 'loggin');
    }
    register(req, res, next) {
        this.ok(res, 'register');
    }
}
exports.UserController = UserController;
