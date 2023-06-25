import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@/entities/user/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

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
}
