
/* ----- 함수 호출 방식 -----*/

// 1. 함수 호출
var foo = function () {
  console.dir(this);
};
foo();

console.log("========================");
// 2. 메서드 호출
var obj = { foo: foo };
obj.foo();

console.log("========================");
// 3. 생성자 함수 호출
var instance = new foo();

console.log("========================");
// 4. apply / call / bind 호출
var bar = { name: "bar" };
foo.call(bar);
foo.apply(bar);
foo.bind(bar)();