import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const docConfig = new DocumentBuilder()
    .setTitle('NestJS Upstart Swagger')
    .setDescription('The NestJS Upstart Swagger API description')
    .setVersion('0.1.0')
    .addTag('documentation')
    .build();
  const document = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
