import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import Redis from 'ioredis';

import { REDIS_TOKEN_KEY } from '@/constant/redis';

@Injectable()
export class AuthService {
    constructor(
        @InjectRedis()
        private readonly redis: Redis,
        private readonly jwtService: JwtService,
    ) { }

    createToken(data: any) {
        const token = this.jwtService.sign(data);
        this.redis.hset(REDIS_TOKEN_KEY, token, 1);
        return token;
    }

    async validate(token?: string) {
        if (!token) throw new UnauthorizedException();
        const exit = await this.redis.hexists(REDIS_TOKEN_KEY, token);
        if (!exit) throw new UnauthorizedException();
    }
}
