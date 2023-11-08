import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configura o limite de payload para 50MB
  app.use(express.json({ limit: '50mb' }));


  // Configurar as opções de CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Substitua pela origem do seu aplicativo React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Isso permite o uso de cookies e autenticação no aplicativo React
  });

  await app.listen(8080); // Use a porta desejada, por exemplo, 8080
}
bootstrap();