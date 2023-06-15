import type { Logger as Log4Logger } from 'log4js';
import type { IAppConfig } from '@/types/appConfig/appConfig';
import type { LoggerService } from '@nestjs/common';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as log4js from 'log4js';

@Injectable()
export class CustomLoggerService implements LoggerService {
    private logger: Log4Logger;

    constructor(private readonly configService: ConfigService<IAppConfig>) {
        this.initLogger();
    }

    initLogger() {
        const config = this.configService.get<IAppConfig['log4js']>('log4js');
        this.logger = log4js.configure(config).getLogger('app');
    }

    log(...args: any[]) {
        this.logger.info(args);
    }
    error(...args: any[]) {
        this.logger.error(args);
    }
    warn(...args: any[]) {
        this.logger.warn(args);
    }
}
