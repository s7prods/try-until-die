/*
死了都要 try，
不catch到异常不痛快。
bug有多深，只有这样，才不用重来。
死了都要 try，
不catch到异常不痛快，
程序毁灭throw还在。

把每天，都当作程序来更改。
一改一天，都累到泪水掉下来。
不理会，老板是看好或看坏。
只要有工资，来还贷。

改，不是需求做得太坏，
那是客户想要什么，自己都不明白。
忍受现在，自己一生都还不完的贷。
很多模块，还没完成，我还得改。

死了都要 try，
不catch到异常不痛快。
bug有多深，只有这样，才不用重来。
死了都要 try，
不catch到异常不痛快，
程序毁灭throw还在。

死了都要 try，
不catch到异常不痛快。
bug有多深，只有这样，才不用重来。
死了都要 try，
不catch到异常不痛快，
程序毁灭throw还在。
*/
import './browser.js'

// 主歌
Object.defineProperty(globalThis, '死了都要', {
    get() {
        console.log('死了都要 try，');
    }
})
Object.defineProperty(globalThis, '不痛快', {
    get() {
        console.log('不catch到异常不痛快。');
    }
})
Object.defineProperty(globalThis, 'bug有多深', {
    get() {
        process.stdout.write('bug有多深，只有这样，'); // 不换行
    }
})
globalThis.只有这样 = null // 不会被执行到
globalThis.重来 = '重来'
globalThis.才不用 = s => console.log(`才不用${s}。`)
globalThis.程序 = {
    毁灭() { process.stdout.write('程序毁灭'); return true },
    toString() { return '程序' }, // 用于下面的“都当作程序来更改”
}
Object.defineProperty(globalThis, 'throw还在', {
    get() {
        console.log('throw还在。\n'); // 保持原歌词格式
    }
})

// 把(每天).都当作(程序).来更改()
globalThis.把 = s => { // 还好“把”在全歌词中只出现了一次😂
    process.stdout.write(`把${s}，`);
    return { 都当作(v) {
        process.stdout.write(`都当作${v}`);
        return { 来更改() { console.log("来更改。") } }
    } }
}
globalThis.每天 = '每天'

// 一改 = 一天; 都累到 = 泪水.掉下来()
Object.defineProperty(globalThis, '一改', {
    set(val) {
        process.stdout.write(`一改${val}，`);  // 不换行
    }
});
globalThis.一天 = '一天';
Object.defineProperty(globalThis, '都累到', {
    set(val) {
        console.log(`都累到${val}。`);
    }
});
globalThis.泪水 = { 掉下来: () => '泪水掉下来' };

// 不理会(老板 ? 是看好 : 或看坏)
globalThis.不理会 = s => console.log(`不理会，${s}。`)
globalThis.老板 = false // 当然是看坏！
globalThis.是看好 = null // 占位符防报错
globalThis.或看坏 = "老板是看好或看坏"

// 只要(有工资).来还贷()
globalThis.只要 = v => {
    process.stdout.write(`只要${v}，`)
    return ({ 来还贷() {
        console.log((v.amount > 0) ? '来还贷。\n' : '没有工资，无法还贷！\n');
    } })
}
globalThis.自己 = {
    toString() { return '自己' },
    get 一生都还不完的贷() { return ({
        toString() { return `${自己}一生都还不完的贷`},
        get total() { return 自己.mortgage.total },
        get remaining() { return 自己.mortgage.remaining },
    }) },
    work: {
        salary: {
            amount: 6000,
            willGetPromotion: false,
        },
        monthsWorked: 24,
    },
    mortgage: {
        total: 900000,
        monthlyPayment: 5000,
        get paid() {
            return 自己.work.monthsWorked * this.monthlyPayment
        },
        get remaining() {
            return this.total - this.paid
        },
    },
    还得改() {
        console.log("我还得改。\n")
    },
}
globalThis.有工资 = {
    get amount() { return 自己.work.salary.amount },
    toString() { return ((this.amount > 0) ? '有工资' : '没工资') }
};

// 改().不是(需求做得太坏).那是(客户想要什么自己都不明白)
class 不是or那是 {
    不是(s) {
        console.log(`不是${s}，`)
        return this
    }
    那是(s) {
        console.log(`那是${s}。`)
        return this
    }
}
globalThis.改 = () => {
    process.stdout.write("改，") // 不换行
    return new 不是or那是
}
globalThis.需求做得太坏 = '需求做得太坏'
globalThis.客户想要什么自己都不明白 = '客户想要什么，自己都不明白'

// 忍受(现在, 自己.一生都还不完的贷)
const timeNumToDescription = (timestamp) => {
    const now = Date.now();
    const diffInSeconds = Math.floor((now - timestamp) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    
    if (diffInSeconds < 60) {
        return "现在";
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes}分钟前`;
    } else if (diffInHours < 24) {
        return `${diffInHours}小时前`;
    } else {
        return `${diffInDays}天前`;
    }
};
globalThis.忍受 = (time, what) => {
    console.log(`忍受${timeNumToDescription(time)}，${what}。`)
}
Object.defineProperty(globalThis, '现在', {
    get() {
        return (new Date()).getTime()
    }
})

// 很多模块.还没完成 && 我.还得改()
globalThis.很多模块 = {
    toString() { return '很多模块' },
    done: false,
    get 还没完成() {
        process.stdout.write(`${this}，${this.done ? '已经' : '还没'}完成，`)
        return !this.done;
    }
}
globalThis.我 = 自己
