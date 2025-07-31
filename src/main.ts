import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import  *  as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200', // Permite solicitudes desde tu frontend Angular
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    credentials: true, // Permite el envío de cookies o encabezados de autorización
  });
  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
