/* 1. 함수 호출 */

// ! 전역 객체(Global Obejct) : 모든 객체의 유일한 최상위 객체
// browser-side : window
console.log(this === window); // true
// Server-side : global
// ㄴ 터미널에서 node -> this === global

var ga = 'Global Variable'; // ! 전역 변수(전역 객체 소유의 프로퍼티)

console.log(ga); // Global Variable
console.log(window.ga); // Global Variable

// 글로벌 영역에 선언한 함수 - 전역 객체의 프로퍼티로 접근할 수 있는 전역 변수의 메서드
function foo2() {
  console.log("invoked!");
}

window.foo2(); // invoked!

// ! 기본적으로 this는 전역 객체에 바인딩
function foo3() {
  console.log("foo3`s this: " + this); // foo3`s this: [object Window]

  // ! 내부 함수의 경우에도 외부 함수가 아닌, 전역 객체에 바인딩
  // 내부 함수
  function bar() {
    console.log("bar`s this: " + this); // bar`s this: [object Window]
  }
  bar();
}
foo3();

// ! 메서드의 내부 함수일 경우에도 this는 전역 객체에 바인딩
var value = 1;

var obj2 = {
  value: 100,
  foo: function () {
    console.log("foo`s this: ", this); // foo`s this:  {value: 100, foo: ƒ}
    console.log("foo`s this.value: ", this.value); // foo`s this.value:  100

    function bar() {
      console.log("bar`s this: ", this); // bar`s this:  Window
      console.log("bar`s this.value: ", this.value); // bar`s this.value:  1
    }
    bar();
  },
};

obj2.foo();

// ! 콜백 함수도 this는 전역 객체에 바인딩

var value2 = 2;

var obj3 = {
  value: 100,
  foo: function () {
    setTimeout(function () {
      console.log("callback`s this: ", this); // callback`s this : Window
      console.log("callback`s this.value2: ", this.value2); // callback`s this.value2:  2
    }, 100);
  },
};
obj3.foo();

// ! 내부 함수의 this가 전역 객체를 참조하는 것을 회피하는 방법1
console.log("내부 함수의 this가 전역 객체를 참조하는 것을 회피하는 방법1");
var value3 = 3;

var obj4 = {
    value3: 100,
    foo: function() {
        var that = this;

        console.log("foo`s this: ", this); // foo`s this:  {value3: 100, foo: ƒ}
        console.log("foo`s this.value3: ", this.value3); // foo`s this.value3:  100
        function bar() {
            console.log("bar`s that: ", that); // bar`s that:  {value3: 100, foo: ƒ}
            console.log("bar`s that.value3: ", that.value3); // bar`s that.value3:  100
        }
        bar();
    }
};
obj4.foo();

// ! 내부 함수의 this가 전역 객체를 참조하는 것을 회피하는 방법2
console.log("내부 함수의 this가 전역 객체를 참조하는 것을 회피하는 방법2");
var value4 = 4;

var obj5 = {
    value4: 100,
    foo: function() {
        console.log("foo`s this: ", this); // foo`s this:  {value4: 100, foo: ƒ}
        console.log("foo`s this.value4: ", this.value4); // foo`s this.value4:  100
        
        function bar(a, b) {
            console.log("bar`s this: ", this); // bar`s this:  {value4: 100, foo: ƒ}
            console.log("bar`s this.value4: ", this.value4); // bar`s this.value4:  100
            console.log("bar`s arguments: ", arguments); // bar`s arguments: Arguments(2)
        }
        bar.apply(obj5, [1,2]);
        bar.call(obj5, 1, 2);
        bar.bind(obj5)(1, 2);
    }
};
obj5.foo();
