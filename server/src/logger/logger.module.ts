import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CustomLoggerService } from './logger.service';

@Module({
    imports: [],
    controllers: [],
    providers: [ConfigService, CustomLoggerService],
    exports: [CustomLoggerService],
})
export class LoggerModule {}
