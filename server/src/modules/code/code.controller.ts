import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CodeService } from './code.service';

import { CodeRequestDto } from '@/dto/code/code.dto';

@ApiTags('验证码 code')
@Controller('code')
export class CodeController {
    constructor(private readonly codeService: CodeService) {}

    /** 发送验证码 */
    @Post()
    @ApiOperation({ summary: '发送验证码' })
    onSendCode(@Body() data: CodeRequestDto) {
        return this.codeService.onSaveCode(data);
    }
}
