/* 4. apply, call, bind */

// ! apply()
var Person = function (name) {
  this.name = name;
}

var foo = {};

// apply() : 생성자 함수 Person을 호출. 이 때 this에 객체 foo를 바인딩
Person.apply(foo, ['name']); // Person 함수의 this는 foo 객체가 됨

console.log(foo); // {name: 'name'}

// ! apply()의 대표적인 용도
// arguments 같은 유사 배열 객체에 배열 메서드를 사용하는 경우
function convertArgsToArray() {
  console.log(arguments);

  // arguments 객체를 배열로 변환하기
  // slice() : 배열의 특정 부분에 대해 복사본 생성

  var arr = Array.prototype.slice.apply(arguments, [0,2]); 
    // -> arguments.slice(0, 2)와 같이 사용하라
  // var arr = [].slice.apply(arguments); // 위와 같음

  console.log(arr);
  return arr;
}

convertArgsToArray(1,2,3); // (3) [1, 2, 3]

// ! 콜백함수의 this를 위해 사용하는 경우
function Person2(name) {
  this.name = name;
}

Person2.prototype.doSomething = function(callback) {
  if (typeof callback == 'function') {
    // callback(); // 1)
    callback.call(this); // 2)
  }
};

function foo2() {
  // 1) callback()일 경우 -> 원래는 전역 객체(window)를 가리킨다.
  // 2) callback.call(this) -> Person2를 가리킴
  console.log(this.name);
}

var p = new Person2('Hong');
p.doSomething(foo2); // 2) Hong

// ! bind를 통한 콜백 함수의 this
function Person3(name) {
  this.name = name;
}

Person3.prototype.doSometing = function(callback) {
  if (typeof callback == 'function') {
    callback.bind(this)(); // 명시적으로 함수 호출
  }
};

function foo3() {
  console.log(this.name);
}

var p2 = new Person3('Kang');
p2.doSometing(foo3); // Kang
