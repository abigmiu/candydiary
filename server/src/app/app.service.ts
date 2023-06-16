import type { Redis } from 'ioredis';

import { RedisService } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    private readonly redis: Redis;
    constructor(private readonly redisService: RedisService) {
        this.redis = redisService.getClient();
    }
    getHello(): string {
        this.redis.set('test', 'test');
        return 'Hello World!';
    }
}
