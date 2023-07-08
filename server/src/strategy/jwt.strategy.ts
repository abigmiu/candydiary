import type { ITokenData } from '@/types/auth/auth.type';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('jwtSecret'),
        });
    }

    validate(data: ITokenData) {
        console.log('jwt.strategy.ts validate data: ', data)
        return data;
    }
}
