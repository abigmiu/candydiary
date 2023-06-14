import type { IAppConfig } from 'src/types/appConfig/appConfig';

const config: IAppConfig = {
    port: 3000,
    host: '0.0.0.0',
    apiPrefix: '/api',
};

const loadConfig = () => config;

export default loadConfig;
