/**
 * 路由历史
 */
class RouterHistory {
    private stack: string[] = [];

    constructor() {
        this.stack = [];
    }

    push(path: string) {
        this.stack.push(path);
    }

    pop() {
        this.stack.pop();
    }

    getLength() {
        return this.stack.length;
    }
}

export default RouterHistory;
