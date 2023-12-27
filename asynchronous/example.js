function work(callback) {
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {}
        const end = Date.now();
        console.log(end - start + 'ms');
        callback();
    }, 0);
}

console.log('작업 시작!');
// 콜백 함수 정의
function callbackFn() {
    console.log('작업이 끝났습니다.');
}
work(callbackFn);
console.log('다음 작업');