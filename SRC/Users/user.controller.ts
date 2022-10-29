import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../Common/base.controller';
import { LoggerService } from '../Logger/logger.service';

export class UserController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);
    this.bindRoutes([
      { path: '/register', method: 'post', func: this.register },
      { path: '/loggin', method: 'post', func: this.loggin },
    ]);
  }

  loggin(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'loggin');
  }

  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'register');
  }
}
