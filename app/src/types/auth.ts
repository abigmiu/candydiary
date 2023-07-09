
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

export interface ILogin {
    email: string;
    password: string;
}