import { Redis } from 'ioredis';
import { InjectRedis, RedisService } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';

import { REDIS_PREFIX } from '@/constant/redis';

@Injectable()
export class AppService {
    constructor(
        @InjectRedis()
        private readonly redis: Redis,
    ) {}
    getHello(): string {
        this.redis.set('test', 'test');
        return 'Hello World!';
    }
}
