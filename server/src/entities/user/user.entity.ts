import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn({ name: 'id', comment: '主键' })
    id: number;
    @Column({ name: 'name', comment: '姓名' })
    name: string;
    @Column({ name: 'age', comment: '年龄' })
    age: number;
}
