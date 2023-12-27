/* Use strict */
// added in ES5
// use this for Vanila JavaScript.

"use strict";

/* Variable -  변경될 수 있는 값 */
// let (added in ES6)

// * global scope
let globalName = 'global name'; // 어느 곳에서나 접근 가능
// global한 변수들은 어플리케이션 실행 ~ 끝까지 항상 메모리에 탑재 되어 있음 -> 최소한으로 사용
// 되도록 class나 함수, if, for 등 필요한 곳에서만 사용하는 게 좋다.

// * block scope
{
  let name = "ellie";
  console.log(name); // ellie

  name = "hello";
  console.log(name); // hello
}

console.log(name); // 아무 것도 나오지 않음
console.log(globalName); // global name

// * var
// var의 문제점

// 2. 값을 할당하기 전에 출력도 가능
console.log(age); // undefined - 변수는 정의되어 있지만 값이 아직 안들어가 있는 상태
// 1. 변수를 선언하기 전에 값을 할당할 수 있음
age = 4;
console.log(age); // 4
var age;
// - hoisting : 변수를 어디에 선언했냐와 상관 없이, 항상 제일 위로 선언을 끌어올려주는 것

// 3. block scope가 적용되지 않음
{
    addr = 'Seoul';
    var addr;
}
console.log(addr); // Seoul

// 4. 변수 중복 선언 가능
var url = 'https://naver.com';
console.log(url);

var url = 'https://google.com';
console.log(url);

/* 변수 Hoisting */
console.log("---------------------");
n = 1;
var n;

function variable() {
    console.log(n); // undefined
    var n = 2;
    console.log(n); // 2
}
console.log(n); // 1

variable();

/*  함수 호이스팅  */
var a = function() {
    b();
};

var b = function() {
    console.log('hello');
}

a(); // hello

// 함수 선언문
function printName(firstName) {
    var result = inner();
    console.log(typeof inner); // function
    console.log("name is " + result); // name is inner value

    function inner() {
        return 'inner value';
    }
}

printName();

// *함수 표현식 - 선언이 호출보다 위에 있는 경우
function printName(firstName) {
    var inner = function() {
        return 'inner value';
    }

    var result = inner();
    console.log("name is " + result);
}

printName(); // 정상

// 내부 동작
function printName(firstName) {
    var inner;

    var result;
    inner = function() {
        return 'inner value';
    }
    result = inner();
    console.log("name is " + result);
}
printName();

// *함수 표현식 - 선언이 호출보다 아래 있는 경우 (오류 발생)
/* function printName(firstName) {
    console.log(inner);
    var result = inner();
    console.log("name is " + result);

    var inner = function() {
        return 'inner value';
    }
} */

// printName(); // 에러

/* Variable types */

// * primitive type(single item) : 더이상 작은 단위로 나눌 수 없는 한가지의 아이템
// number, string, boolean, null, undefined, symbol

// number - special numeric values : infinity, -infinity, NaN

// Symbol
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3 === symbol4); // true

// Symbol 출력
console.log(`value: ${symbol3.description}, type: ${typeof symbol3}`); // value: id, type: symbol

// * object type(box container)
// single item들을 여러개를 묶어서 하나의 박스로 관리할 수 있게 해주는 것

// * function
// first-class function: 함수도 다른 데이터 타입처럼 변수에 할당이 가능하고, 함수의 파라미터로도 전달 되고, return도 함수로 가능하다

/* Dynamic Typing */
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number

// string + number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string

// string / string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number