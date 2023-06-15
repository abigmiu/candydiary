import type { Configuration } from 'log4js';

export interface IAppConfig {
    /** 端口号 */
    port: number;
    /** host */
    host: string;
    /** Api前缀 */
    apiPrefix: string;
    /** log4js 配置 */
    log4js: Configuration;
}
