import type { CodeRequestDto } from '@/dto/code/code.dto';

import { Redis } from 'ioredis';
import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@liaoliaots/nestjs-redis';

import { CODE } from '@/constant/code';

@Injectable()
export class CodeService {
    private codeStrategy = {
        [CODE.REGISTER.value]: {
            redisPrefix: 'code:register',
            expire: 10 * 60,
            createCode: () => this.createRegisterCode(),
        },
    };

    constructor(
        @InjectRedis()
        private readonly redis: Redis,
    ) {}

    async handleCodeRequest(data: CodeRequestDto) {
        if (data.type === CODE.REGISTER.value) {
            this.handleRegisterCode(data.email);
        }
    }

    // 注册验证码 ===========

    /** 发送邮箱验证码 */
    async sendEmailCode(email: string, code: string) {
        console.log(email, code);
    }
    /** 生成注册码 */
    createRegisterCode() {
        const randomCode = Math.floor(100000 + Math.random() * 900000);
        return randomCode.toString();
    }
    /** 处理注册验证码 */
    async handleRegisterCode(email: string) {
        const code = this.createRegisterCode();
        await this.sendEmailCode('test', code);
        this.redis.set(
            `${this.codeStrategy[CODE.REGISTER.value].redisPrefix}:${email}`,
            code,
            'EX',
            this.codeStrategy[CODE.REGISTER.value].expire,
        );
    }
}
