import { ApiProperty } from '@nestjs/swagger';
import { IsIn } from 'class-validator';

import { CODE } from '@/constant/code';
import { getOptionRecordText, getOptionValueRecord } from '@/utils/record';

const allowedCodeValues = Object.values(getOptionValueRecord(CODE));

/** 验证码请求 Dto */
export class CodeRequestDto {
    /** 邮箱 */
    @ApiProperty({ description: '邮箱', example: 'abc@abc.com' })
    email: string;

    /** 验证码类型 */
    @ApiProperty({ description: `类型 ${getOptionRecordText(CODE)}`, example: 1 })
    @IsIn(allowedCodeValues, {
        message: '验证码类型不存在',
    })
    type: number;
}
