import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {
    ApiExcludeEndpoint,
    ApiHideProperty,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { UserService } from './user.service';

@ApiTags('用户')
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
    // @ApiExcludeEndpoint()
    async generateZIPCode() {
        return await this.userService.handleGenerateZIPCode();
    }
}
