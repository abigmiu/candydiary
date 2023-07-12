import type { CanActivate, ExecutionContext } from '@nestjs/common';
import type { Observable } from 'rxjs';

import { ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AppAuthGuard extends AuthGuard('jwt') {
    constructor() {
        super();
    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = ExtractJwt.fromAuthHeaderAsBearerToken()(request);
        console.log('auth.guard.ts token: ', token)
        return super.canActivate(context);
        return true;
    }
}
