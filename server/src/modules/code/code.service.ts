import type { CodeRequestDto } from '@/dto/code/code.dto';

import { Redis } from 'ioredis';
import { Injectable } from '@nestjs/common';
import { InjectRedis, RedisService } from '@liaoliaots/nestjs-redis';

import { REDIS_PREFIX } from '@/constant/redis';

@Injectable()
export class CodeService {
    constructor(
        @InjectRedis()
        private readonly redis: Redis,
    ) {}

    async onSaveCode(data: CodeRequestDto) {
        this.redis.set(`code:${data.type}:${data.email}`, 'test');
    }

    /** 发送邮箱验证码 */
    async sendEmailCode(email: string, code: string) {
        console.log(email, code);
    }

    /** 生成 Code */
    async createCode(type: number) {
        return 1;
    }
}
