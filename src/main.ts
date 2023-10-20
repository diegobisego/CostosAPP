import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // coloco el prefico de todas las rutas
  app.setGlobalPrefix('api/v1');

  // Tuberias: Se usa para validar info que venga unicamente de los DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // permitirán propiedades que estén decoradas con el decorador @Prop() en tus DTO
      forbidNonWhitelisted: true, //  generará un error si se encuentran propiedades no permitidas en la solicitud
      transform: true, // intentará convertir automáticamente las propiedades de la solicitud al tipo especificado en el DTO.
    }),
  );

  // Builder de swagger
  const config = new DocumentBuilder()
    .setTitle('Costos')
    .setDescription('API de costos')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(5000);
}

bootstrap();
