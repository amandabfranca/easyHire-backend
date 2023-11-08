import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Limite de payload de 50MB
  app.use(express.json({ limit: '50mb' }));


  app.enableCors({
    origin: 'http://localhost:3000', // Aplicativo frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(8080);
}
bootstrap();