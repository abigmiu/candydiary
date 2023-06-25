import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import appConfig from '@/config/index';
import { LoggerModule } from '@/logger/logger.module';
import { TransformInterceptor } from '@/interceptors/transform.interceptor';
import modules from '@/modules';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [appConfig],
        }),
        RedisModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                const redisConfig = configService.get('redis');
                return {
                    config: redisConfig,
                };
            },
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) =>
                configService.get<TypeOrmModuleOptions>('db'),
        }),
        LoggerModule,
        ...modules,
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
