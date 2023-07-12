import { ApiProperty, PartialType } from "@nestjs/swagger";

class UpdateUser {
    @ApiProperty({ description: '头像' })
    avatar: string;
}

export class UpdateUserDto extends PartialType(UpdateUser) { }
