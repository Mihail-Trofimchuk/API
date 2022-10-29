import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './Logger/logger.service';
import { UserController } from './Users/user.controller';
export class App {
  app: Express;
  server: Server;
  port: number;
  logger: LoggerService;
  userController: UserController;

  constructor(logger: LoggerService, userController: UserController) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.userController = userController;
  }

  ueseRoutes() {
    this.app.use('/users', this.userController.router);
  }

  public async init() {
    this.ueseRoutes();

    this.server = this.app.listen(this.port);
    this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
  }
}
