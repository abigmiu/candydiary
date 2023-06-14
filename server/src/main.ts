import type { NestExpressApplication } from '@nestjs/platform-express';

import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app/app.module';

import { GlobalExceptionFilter } from '@/filters/globalException.filter';
import { HttpExceptionFilter } from '@/filters/httpException.filter';
import { NotFoundExceptionFilter } from '@/filters/notFoundException.filter';
import { ValidationPipe } from '@/pipes/validate.pipe';
import { TransformInterceptor } from '@/interceptors/transform.interceptor';
import { RequestInterceptor } from '@/interceptors/request.interceptor';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const configService = app.get(ConfigService);

    app.enableCors({
        credentials: true,
    });

    // 全局注册
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(new TransformInterceptor());
    app.useGlobalFilters(
        new GlobalExceptionFilter(),
        new HttpExceptionFilter(),
        new NotFoundExceptionFilter(),
    );
    app.useGlobalInterceptors(new RequestInterceptor());

    // 启动URl
    const apiPrefix = configService.get<string>('apiPrefix');
    const port = configService.get<number>('port');
    const host = configService.get<string>('host');
    await app.listen(port, host, async () => {
        const url = await app.getUrl();
        console.log(`Listening at ${url}${apiPrefix}`);
    });
}
bootstrap();
