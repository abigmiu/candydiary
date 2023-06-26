import type { IOptionRecord } from '@/types/common/common';

export function getOptionValueRecord(option: IOptionRecord) {
    const record: Record<string, any> = {};
    for (const key in option) {
        record[key] = option[key].value;
    }
    return record;
}

export function getOptionNameRecord(option: IOptionRecord) {
    const record: Record<string, string> = {};
    for (const key in option) {
        record[key] = option[key].name;
    }
    return record;
}

export function getOptionRecord(option: IOptionRecord) {
    const record: Record<any, string> = {};
    for (const key in option) {
        record[option[key].value] = option[key].name;
    }
    return record;
}

export function getOptionRecordText(option: IOptionRecord) {
    const records = getOptionRecord(option);
    const strAry = Object.keys(records).map((key) => {
        return `${key} - ${records[key]}`;
    });
    return strAry.join(' ');
}
