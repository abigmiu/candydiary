import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import appConfig from '@/config/index';
import { LoggerModule } from '@/logger/logger.module';
import { TransformInterceptor } from '@/interceptors/transform.interceptor';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [appConfig],
        }),
        LoggerModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: 'APP_INTERCEPTOR',
            useClass: TransformInterceptor,
        },
    ],
})
export class AppModule {}
