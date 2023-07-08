import type { ITokenData } from '@/types/auth/auth.type';

import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import Redis from 'ioredis';

import { REDIS_TOKEN_EXPIRE, REDIS_TOKEN_KEY } from '@/constant/redis';

@Injectable()
export class AuthService {
    constructor(
        @InjectRedis()
        private readonly redis: Redis,
        private readonly jwtService: JwtService,
    ) { }

    createToken(data: ITokenData) {
        const token = this.jwtService.sign(data);
        console.log(`${REDIS_TOKEN_KEY}${token}`);

        this.redis.set(`${REDIS_TOKEN_KEY}${token}`, 1, 'EX', REDIS_TOKEN_EXPIRE);
        return token;
    }

    async validate(token?: string) {
        if (!token) throw new UnauthorizedException();
        const exit = await this.redis.exists(`${REDIS_TOKEN_KEY}${token}`, token);
        if (!exit) throw new UnauthorizedException();
    }
}
