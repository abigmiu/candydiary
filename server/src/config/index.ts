import type { IAppConfig } from 'src/types/appConfig/appConfig';

import { resolve, join } from 'path';

import { REDIS_PREFIX } from '@/constant/redis';

const logPath = resolve(__dirname, '../../logs');

const config: IAppConfig = {
    port: 3000,
    host: '0.0.0.0',
    apiPrefix: '/api',
    log4js: {
        appenders: {
            app: {
                type: 'dateFile',
                filename: `${logPath}/app.log`,
                pattern: 'yyyy-MM-dd',
            },
        },
        categories: {
            default: {
                appenders: ['app'],
                level: 'ALL',
            },
        },
    },
    redis: {
        // @ts-ignore
        host: 'localhost',
        port: 6379,
        keyPrefix: REDIS_PREFIX,
        // namespace: REDIS_PREFIX,
    },
    swaggerSuffix: 'docs',
    db: {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '123456',
        charset: 'utf8mb4',
        database: 'candy_diary',
        entities: [join(__dirname, '../entities/**/*.entity{.js,.ts}')],
        synchronize: true,
        logging: false,
    },
    jwtSecret: '123456',
};

const loadConfig = () => config;

export default loadConfig;
