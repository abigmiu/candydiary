import type { Configuration } from 'log4js';
import type { RedisClientOptions } from '@liaoliaots/nestjs-redis';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface IAppConfig {
    /** 端口号 */
    port: number;
    /** host */
    host: string;
    /** Api前缀 */
    apiPrefix: string;
    /** log4js 配置 */
    log4js: Configuration;
    /** redis 配置 */
    redis: RedisClientOptions;
    /** swagger 后置 */
    swaggerSuffix: string;
    /** 数据库配置 */
    db: TypeOrmModuleOptions;
}
