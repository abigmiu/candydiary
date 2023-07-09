import { CODE_TYPE_KEYS } from '@/constant/code';

/** 注册 */
export interface IRegister {
    email: string;
    password: string;
    code: string;
}

/** 注册发送验证码 */
export interface IRegisterCode {
    email: string;
    type: number;
}