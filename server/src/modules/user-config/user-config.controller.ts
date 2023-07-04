import { Controller, Get, Patch } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserConfigService } from './user-config.service';

@ApiTags('用户配置 user-config')
@Controller('user-config')
export class UserConfigController {
    constructor(private readonly userConfigService: UserConfigService) {}

    /** 获取用户配置 */
    @ApiOperation({ summary: '获取用户配置' })
    @Get()
    getUserConfig() {
        return {};
    }

    @ApiOperation({ summary: '更新用户配置' })
    @Patch()
    updateUserConfig() {
        return {};
    }
}
