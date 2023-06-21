import type { NestExpressApplication } from '@nestjs/platform-express';

import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
// import { LoggerModule } from './logger/logger.module';

import { GlobalExceptionFilter } from '@/filters/globalException.filter';
import { HttpExceptionFilter } from '@/filters/httpException.filter';
import { NotFoundExceptionFilter } from '@/filters/notFoundException.filter';
import { ValidationPipe } from '@/pipes/validate.pipe';
// import { TransformInterceptor } from '@/interceptors/transform.interceptor';
import { RequestInterceptor } from '@/interceptors/request.interceptor';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.enableCors({
        credentials: true,
    });
    // app.useLogger(app.get(LoggerModule));

    // 全局注册
    app.useGlobalPipes(new ValidationPipe());
    // app.useGlobalInterceptors(new TransformInterceptor());
    app.useGlobalFilters(
        new GlobalExceptionFilter(),
        new HttpExceptionFilter(),
        new NotFoundExceptionFilter(),
    );
    app.useGlobalInterceptors(new RequestInterceptor());

    // 配置项
    const configService = app.get(ConfigService);

    // 启动URl
    const apiPrefix = configService.get<string>('apiPrefix');
    const port = configService.get<number>('port');
    const host = configService.get<string>('host');
    app.setGlobalPrefix(apiPrefix);

    // swagger
    const swaggerSuffix = configService.get<string>('swaggerSuffix');
    const swaggerOptions = new DocumentBuilder()
        .setTitle('NestJS API')
        .setDescription('NestJS API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup(`${apiPrefix}-${swaggerSuffix}`, app, document);

    await app.listen(port, host, async () => {
        const url = await app.getUrl();
        console.log(`Listening at ${url}${apiPrefix}`);
        console.log(`swagger running at ${url}${apiPrefix}-${swaggerSuffix}`);
    });
}
bootstrap();
