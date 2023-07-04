import type { RegisterRequestDto } from '@/dto/user/register.dto';

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CodeService } from '../code/code.service';
import { AuthService } from '../auth/auth.service';

import { UserEntity } from '@/entities/user/user.entity';
import { REGISTER_CODE_EXPIRED, REGISTER_EXIST_EMAIL } from '@/constant/response';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly codeService: CodeService,
        private readonly authService: AuthService,
    ) {}

    // 邮编码处理 ==========
    /** 检查数据库里面是否有相同的邮编 */
    async checkSameZIPCode(ZIPCode: string) {
        const res = await this.userRepository.findOne({ where: { zipcode: ZIPCode } });
        return Boolean(res);
    }
    /** 生成邮编码
     * @description 大写英文和数字组合的共6位字符串
     */
    async generateZIPCode() {
        const random = Math.random().toString(36).slice(-6).toUpperCase();
        return random;
    }
    /**
     * 处理邮编码的生成
     * @description 生成邮编码，如果数据库里面有相同的邮编码，就重新生成
     */
    async handleGenerateZIPCode() {
        let ZIPCode = await this.generateZIPCode();
        while (await this.checkSameZIPCode(ZIPCode)) {
            ZIPCode = await this.generateZIPCode();
        }
        return ZIPCode;
    }

    // 注册 =======
    /** 注册 */
    async register(data: RegisterRequestDto) {
        const res = await this.userRepository.findOne({
            where: {
                email: data.email,
            },
        });

        if (res) {
            throw new BadRequestException(REGISTER_EXIST_EMAIL);
        }

        const isValidateCode = await this.codeService.validateRegisterCode(data.email);
        if (!isValidateCode) {
            throw new BadRequestException(REGISTER_CODE_EXPIRED);
        }

        const ZIPCode = await this.handleGenerateZIPCode();
        const user = new UserEntity();
        user.email = data.email;
        user.nickname = '用户' + Math.random().toString(36).slice(-6).toUpperCase();
        user.zipcode = ZIPCode;

        await this.userRepository.save(user);
    }

    // 用户信息 ====

    /** 获取用户信息 */
    async getUserInfo(userId: number) {
        const res = await this.userRepository.findOne({
            where: {
                id: userId,
            },
        });
        return res;
    }

    // 登录 =====

    /** 登录 */
    async login() {
        return this.authService.createToken({ id: 1 });
    }
}
