/** KB 转 MB，GB */
export function KbTransform(data: number) {
    const sizeUnit = 1024;
    if (data < sizeUnit * 10) {
        return `${data}KB`
    } else if (data < sizeUnit * sizeUnit) {
        return `${Math.floor(data / 1024)}MB`
    } else {
        return `${Math.floor(data / 1024 / 1024)}GB`
    }
}