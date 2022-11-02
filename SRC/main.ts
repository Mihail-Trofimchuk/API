import { App } from './app';
import { ExeptionFilter } from './errors/exeption.filter';
import { LoggerService } from './Logger/logger.service';
import { UserController } from './Users/user.controller';

async function bootstrap() {
  const logger = new LoggerService();
  const app = new App(
    logger,
    new UserController(logger),
    new ExeptionFilter(logger)
  );
  await app.init();
}

bootstrap();
