'use strict';

// ! Promise의 포인트
/* 
  * 1. State(상태)
    - 우리가 지정한 operation이 수행중 -> pending
    - operation을 성공적으로 완료 -> fullfilled
    - 실패 -> rejected
  * 2. Producer와 Comsumer
*/

// ! 1. Producer
const promise = new Promise((resolve, reject) => {
  // doing some heavy work
  console.log('doing something...');
  setTimeout(() => {
    // resolve('ellie');
    reject(new Error('no network'));
  }, 2000);
});

// ! 2. Consumer : then, catch, finally
// then : promise가 정상적으로 수행이 된다면
promise
  .then(value => {
    // value : resolve 콜백함수에서 전달된 값
    console.log(value); // ellie
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// ! 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num)); // 5

// ! 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
  });

const getEgg = hen =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 계란`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 계란`)), 1000);
  });

const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
  });

// getHen()
//   .then(hen => getEgg(hen))
//   .then(egg => cook(egg))
//   .then(meal => console.log(meal));

getHen()
  .then(getEgg)
  .catch(error => {
    return '빵';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);