import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserController } from './user.controller';

import { CodeService } from '../code/code.service';
import { AuthService } from '../auth/auth.service';

import { UserEntity } from '@/entities/user/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService, CodeService, AuthService],
})
export class UserModule {}
