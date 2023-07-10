export interface IUserConfig {
    /** 指纹应用锁 */
    fingerprintAppLock: boolean;

    /** 首页事件入口 */
    homeEventEntry: boolean;

    /** 日记编辑页事件入口 */
    diaryEditEventEntry: boolean;


    /** 时间轴时间样式 */
    timelineTimeStyle: number;

    /** 日记卡片显示完整文字 */
    diaryCardFullText: boolean;

    /** 那年今日 */
    todayInHistory: boolean;

    /** 八度空间 */
    baduSpace: boolean;

    /** 时空邮局 */
    timeSpacePostOffice: boolean;

    /** 默认显示日历 */
    defaultShowCalendar: boolean;

    /** 日历背景气泡 */
    calendarBackgroundBubble: boolean;
}