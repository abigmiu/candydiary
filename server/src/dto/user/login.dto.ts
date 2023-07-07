import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

/** 邮箱登录 DTO */
export class LoginDto {
    @ApiProperty({ description: '邮箱', example: 'abc@abc.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: '密码', example: '123456' })
    password: string;
}
