// 자바스크립트는 동기적임
//호이스팅이 된 이후부터 동기적으로 실행
//비동기 : 언제 코드가 실시될지 예측 x

// synchronous callback
function printImmediately(print) {
    print();
}
function printWhiteDelay(print, timeout) {
    setTimeout(print, timeout);
}

console.log(1);
setTimeout(function () { //1초뒤에 콜백함수 실행
    console.log(2);
}, 1000);
console.log(3);
printImmediately(() => console.log("hello"));
// asynchronous callback
printWhiteDelay(() => console.log("asynchronous callbakc"), 2000);