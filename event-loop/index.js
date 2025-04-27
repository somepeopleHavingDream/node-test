// 阶段 1：Timers（定时器阶段） • 处理任务：setTimeout 和 setInterval 的回调
setTimeout(() => console.log('Timeout 1'), 0);
setImmediate(() => console.log('Immediate 1'));

// 输出顺序可能交替（取决于事件循环启动耗时）