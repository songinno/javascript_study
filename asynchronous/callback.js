"use strict";

/* 콜백 함수 */

// * 콜백 함수 예시 - filter()
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// 콜백 함수 생성
function callback(element) {
  if (element.length > 6) {
    return true;
  } else {
    return false;
  }
}

// 1. 미리 정의한 콜백 함수를 filter()의 인자로 넣어서 구현
const newWords1 = words.filter(callback);
console.log(newWords1); // [ 'exuberant', 'destruction', 'present' ]

// 2. 익명 함수로 구현
const newWords2 = words.filter(function (element) {
  if (element.length > 6) {
    return true;
  } else {
    return false;
  }
});
console.log(newWords2); // [ 'exuberant', 'destruction', 'present' ]

// 3. arrow function으로 구현
const newWords3 = words.filter((element) => element.length > 6);
console.log(newWords3); // [ 'exuberant', 'destruction', 'present' ]

//* 콜백 함수를 소비하는 나만의 함수 만들기
function myFilter(origin, callback) {
  let result = [];
  // origin 데이터 조회
  for (let i = 0; i < origin.length; i++) {
    let current = origin[i];
    // current의 현재 값을 callback 함수의 입력값으로 전달
    if (callback(current)) {
      result.push(current);
    }
  }
  return result;
}

const newWords4 = myFilter(words, (element) => element.length > 6);
console.log(newWords4); // [ 'exuberant', 'destruction', 'present' ]

console.log("===================================");

/* synchrounous, asynchrounous */

console.log(1);
setTimeout(() => console.log(2), 1000); // 1초 후에 콘솔에 2 찍기
console.log(3);
// 결과 1 - 3 - 2

// * Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// * Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);

/* callback hell */
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your ID");
const password = prompt("enter your PW");
userStorage.loginUser(
  id,
  password,
  // 로그인 성공 시, role 요청
  user => {
    userStorage.getRoles(
      user,
      userInfo => {
        alert(`Hello ${userInfo.name}, you have a ${userInfo.role} role`);
      },
      error => console.log(error)
    );
  },
  // 로그인 실패 시, 오류 메시지 출력
  error => console.log(error)
);
