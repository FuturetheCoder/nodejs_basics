//console.log(global);

setTimeout(()=>{
    console.log('Session Timeout');
    clearInterval(intgr);
}, 7000);

const intgr = setInterval(()=>{
    console.log('Interval Timing')
}, 1000);

console.log(__filename);
console.log(__dirname);