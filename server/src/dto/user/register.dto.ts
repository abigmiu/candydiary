import { ApiProperty } from '@nestjs/swagger';

/** 邮箱注册 */
export class RegisterByEmailRequestDto {
    /** 邮箱 */
    @ApiProperty({ description: '邮箱', example: 'abc@abc.com' })
    email: string;

    /** 密码 */
    @ApiProperty({ description: '密码', example: '123456' })
    password: string;

    /** 验证码 */
    @ApiProperty({ description: '验证码', example: '123456' })
    code: string;
}
