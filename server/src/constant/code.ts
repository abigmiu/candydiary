import type { IOptionRecord } from '@/types/common/common';

/** 验证码相关的常量 */
export const CODE: IOptionRecord = {
    /** 注册 */
    REGISTER: {
        value: 1,
        name: '注册',
    },
};
/** 验证码 refis 前缀 */
export const CODE_REDIS = {
    REGISTER: 'code:register:',
};
