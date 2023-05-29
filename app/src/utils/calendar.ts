// 日历算法

/** 获取当月的第一天 */
export const getFirstDayOfMonth = function (date: Date) {
    const temp = new Date(date);
    temp.setDate(1);
    return temp.getDay();
};

/** 获取本月最后一天是星期几 */
export const getLastDay = (date: Date) => {
    console.log(date);
};

/** 获取当月的天数， monthIndex 从0开始 */
export const getDayCountOfMonth = function (year: number, monthIndex: number) {
    const date = new Date(year, monthIndex + 1, 0, 0, 0, 0, 0);
    return date.getDate();
};

export const prevDate = function (date: Date, amount = 1) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
};

export const getStartDateOfMonth = function (year: number, month: number) {
    const result = new Date(year, month, 1);
    const day = result.getDay();

    if (day === 0) {
        return prevDate(result, 7);
    }
    return prevDate(result, day);
};

/**
 * 计算两个日期相差多少天
 * @param date1 第一个日期
 * @param date2 第二个日期
 * @returns { number } 负数表示前 x 天
 */
export function diffDate(date1: Date, date2: Date) {
    const oneDayTimestamp = 24 * 60 * 60 * 1000;
    const diffTime = date1.getTime() - date2.getTime();
    const diffDay = Math.ceil(diffTime / oneDayTimestamp);
    return diffDay;
}

/** 纯净日期 */
export const clearTime = function (date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

// 日历类
export class Calendar {
    currentMonthIndex: number; // 当月下标，从0开始

    currentYear: number; // 当年

    private currentFirstWeekDay: number; // 当月第一天是星期几

    private theDayCount: number; // 本月多少天

    private sundayAsStart: boolean; // 是否将周日作为一周的开始。 默认周一

    constructor(date = new Date(), sundayAsStart = false) {
        this.currentMonthIndex = 0;
        this.currentYear = 1996;
        this.currentFirstWeekDay = 1;
        this.theDayCount = 31;
        this.init(date); // 首次执行时，传入当前日期
        this.sundayAsStart = sundayAsStart;
    }

    init(date: Date) {
        this.currentYear = date.getFullYear();
        this.currentMonthIndex = date.getMonth();
        this.currentFirstWeekDay = new Date(this.currentYear, this.currentMonthIndex, 1).getDay();
        this.theDayCount = getDayCountOfMonth(this.currentYear, this.currentMonthIndex);
    }

    /** 是否当天 */
    checkNowDay(year: number, month: number, day: number) {
        const date = new Date();
        const nowYear = date.getFullYear();
        const nowMonth = date.getMonth();
        const nowDay = date.getDate();
        return nowYear === year && nowMonth === month && nowDay === day;
    }

    /** 获取日历中上月需显示的天数 */
    getPrevMonthDay() {
        const date = new Date(this.currentYear, this.currentMonthIndex, 0); // 获取上月；
        let day = date.getDate(); // 因为Date函数中天设置的0，因此这里是上月最后一天的值
        let days = this.currentFirstWeekDay - 1; // 上月要显示几天
        const weeks = [];
        while (days > 0) {
            weeks.unshift({
                year: date.getFullYear(),
                month: date.getMonth(),
                day: day--,
                type: 'prev',
                active: false
            });
            days--;
        }
        return weeks;
    }

    /** 获取日历中本月需显示的天数 */
    getNowMonthDay() {
        let days = this.theDayCount;
        const weeks = [];
        let day = 1;
        while (days > 0) {
            const isToday = this.checkNowDay(this.currentYear, this.currentMonthIndex, day);
            weeks.push({
                year: this.currentYear,
                month: this.currentMonthIndex,
                day: day++,
                type: isToday ? 'current' : 'normal',
                active: !!isToday
            });
            days--;
        }
        return weeks;
    }

    /** 获取日历中下月需显示的天数 */
    getNextMonthDay() {
        const currentMonthIndexLastDay = new Date(
            this.currentYear,
            this.currentMonthIndex,
            this.theDayCount
        ).getDay(); // 这个月的最后一天是星期几
        let days = 7 - currentMonthIndexLastDay;
        const date = new Date(this.currentYear, this.currentMonthIndex + 1, 1); // 获取下月
        const weeks = [];
        let day = 1;
        while (days > 0) {
            weeks.push({
                year: date.getFullYear(),
                month: date.getMonth(),
                day: day++,
                type: 'next',
                active: false
            });
            days--;
        }
        return weeks;
    }

    /** 上一月 */
    prevMonth() {
        if (this.currentMonthIndex === 0) {
            this.currentMonthIndex = 11;
            this.currentYear--;
        } else {
            this.currentMonthIndex--;
        }
        this.init(new Date(this.currentYear, this.currentMonthIndex));
        return this.render();
    }

    /* 下一月 */
    nextMonth() {
        if (this.currentMonthIndex === 11) {
            this.currentMonthIndex = 0;
            this.currentYear++;
        } else {
            this.currentMonthIndex++;
        }
        this.init(new Date(this.currentYear, this.currentMonthIndex));
        return this.render();
    }

    /** 上一年 */
    prevYear() {
        this.currentYear--;
        this.init(new Date(this.currentYear, this.currentMonthIndex));
        return this.render();
    }

    /** 下一年 */
    nextYear() {
        this.currentYear++;
        this.init(new Date(this.currentYear, this.currentMonthIndex));
        return this.render();
    }

    render() {
        const weeks = [
            ...this.getPrevMonthDay(),
            ...this.getNowMonthDay(),
            ...this.getNextMonthDay()
        ];
        const data = [];
        let count = [];
        for (let i = 0; i < weeks.length; i++) {
            if (count.length === 6) {
                count.push(weeks[i]);
                data.push(count);
                count = [];
            } else {
                count.push(weeks[i]);
            }
        }
        return data;
    }
}
