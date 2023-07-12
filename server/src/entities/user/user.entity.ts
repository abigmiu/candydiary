import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    JoinColumn,
} from 'typeorm';

import { UserConfigEntity } from './userConfig.entity';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn({ name: 'id', comment: '主键' })
    id: number;

    @CreateDateColumn({ name: 'createAt', comment: '创建时间' })
    createAt: Date;

    @UpdateDateColumn({ name: 'updateAt', comment: '更新时间' })
    updateAt: Date;

    /** 头像 */
    @Column({ name: 'avatar', comment: '头像', type: 'text', })
    avatar: string;

    /** 昵称 */
    @Column({ name: 'nickname', comment: '昵称' })
    nickname: string;

    /** 性别 0:未知 1:男 2:女 */
    @Column({ name: 'sex', comment: '性别 0:未知 1:男 2:女', default: 0 })
    sex: number;

    /** 生日 */
    @Column({ name: 'birthday', comment: '生日', default: () => 'now()' })
    birthday: Date;

    /** 邮箱 */
    @Column({ name: 'email', comment: '邮箱' })
    email: string;

    @Column({ name: 'password', comment: '密码' })
    password: string;

    /** QQ */
    @Column({ name: 'qq', comment: 'QQ', nullable: true })
    qq: string;

    /** 微博 */
    @Column({ name: 'weibo', comment: '微博', nullable: true })
    weibo: string;

    /** 邮编码 */
    @PrimaryColumn({ name: 'zipcode', comment: '邮编码' })
    zipcode: string;

    @OneToOne(() => UserConfigEntity, (userConfig) => userConfig.user)
    @JoinColumn()
    config: UserConfigEntity;
}
