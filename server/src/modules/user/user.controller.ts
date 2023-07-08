import type { ITokenData } from '@/types/auth/auth.type';

import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import {
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { Request } from 'express';

import { UserService } from './user.service';

import { AuthService } from '../auth/auth.service';

import { RegisterRequestDto } from '@/dto/user/register.dto';
import { LoginDto } from '@/dto/user/login.dto';

@ApiTags('用户 user')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) { }

    @Get('zipcode')
    @ApiOperation({ summary: '生成邮编码' })
    @ApiResponse({
        status: 200,
        schema: {
            example: 'A1B2C3',
            type: 'string',
        },
        description: '生成的邮编码',
    })
    async generateZIPCode() {
        return await this.userService.handleGenerateZIPCode();
    }

    /** 注册 */
    @ApiOperation({ summary: '注册' })
    @Post('register')
    async register(@Body() data: RegisterRequestDto) {
        return this.userService.register(data);
    }

    /** 登录 */
    @ApiOperation({ summary: '登录' })
    @Post('login')
    async login(@Body() data: LoginDto) {
        return this.userService.login(data);
    }

    /** 获取用户信息 */
    @ApiOperation({ summary: '获取用户信息' })
    @Get('info')
    async getUserInfo(@Req() request: Request) {
        const user = (request.user as ITokenData);
        console.log(user);
        return this.userService.getUserInfo(user.id);
    }
}
