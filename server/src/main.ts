import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // http://localhost:3002/api/
  app.setGlobalPrefix('api');
  app.enableCors();
  app.useGlobalPipes() // global pipe
  await app.listen(3002);
}
bootstrap();
