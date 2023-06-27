import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

/** 邮箱注册 */
export class RegisterRequestDto {
    /** 邮箱 */
    @ApiProperty({ description: '邮箱', example: 'abc@abc.com' })
    @IsEmail()
    email: string;

    /** 密码 */
    @ApiProperty({ description: '密码', example: '123456' })
    password: string;

    /** 验证码 */
    @ApiProperty({ description: '验证码', example: '123456' })
    code: string;
}
