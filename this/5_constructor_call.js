/* 3.  생성자 함수 호출 */
// ! 생성자 함수
function Person(name) {
  // 1) 생성자 함수 코드 실행 전
  this.name = name; // 2)
  // 3) 생성된 함수 반환
}

var me = new Person('Lee');
console.log(me); // Person {name: 'Lee'}

// new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수로 동작X
var you = Person('Kim');
console.log(you); // undefined
console.log(window.name); // Kim

console.log("=================================");

// ! 객체 리터럴 방식과 생성자 함수 방식의 차이
// 객체 리터럴 방식
var foo = {
  name: 'foo',
  gender: 'male'
}

console.dir(foo); // Object

