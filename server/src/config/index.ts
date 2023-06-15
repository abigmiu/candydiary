import type { IAppConfig } from 'src/types/appConfig/appConfig';

import { resolve } from 'path';

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
};

const loadConfig = () => config;

export default loadConfig;
