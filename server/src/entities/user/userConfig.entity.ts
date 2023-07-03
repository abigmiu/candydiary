import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { UserEntity } from './user.entity';

@Entity('user_config', {})
export class UserConfigEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity, (user) => user.config)
    user: UserEntity;

    /** 指纹应用锁 */
    @Column({
        comment: '指纹应用锁',
    })
    fingerprintAppLock: boolean;

    /** 首页事件入口 */
    @Column({
        comment: '首页事件入口',
    })
    homeEventEntry: boolean;

    /** 日记编辑页事件入口 */
    @Column({
        comment: '日记编辑页事件入口',
    })
    diaryEditEventEntry: boolean;

    /** TODO: 标签页排序 */

    /** 时间轴时间样式 */
    @Column({
        comment: '时间轴时间样式',
    })
    timelineTimeStyle: number;

    /** 日记卡片显示完整文字 */
    @Column({
        comment: '日记卡片显示完整文字',
    })
    diaryCardFullText: boolean;

    /** 那年今日 */
    @Column({
        comment: '那年今日',
    })
    todayInHistory: boolean;

    /** 八度空间 */
    @Column({
        comment: '八度空间',
    })
    baduSpace: boolean;

    /** 时空邮局 */
    @Column({
        comment: '时空邮局',
    })
    timeSpacePostOffice: boolean;

    /** 默认显示日历 */
    @Column({
        comment: '默认显示日历',
    })
    defaultShowCalendar: boolean;

    /** 日历背景气泡 */
    @Column({
        comment: '日历背景气泡',
    })
    calendarBackgroundBubble: boolean;
}
