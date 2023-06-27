import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {
    ApiExcludeEndpoint,
    ApiHideProperty,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { UserService } from './user.service';

import { RegisterRequestDto } from '@/dto/user/register.dto';

@ApiTags('用户 user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

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

    @Post('register')
    async register(@Body() data: RegisterRequestDto) {
        return this.userService.register(data);
    }
}
