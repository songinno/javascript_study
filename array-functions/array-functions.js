// at()
const cafe = ['아메리카노', '라떼', '스무디', '프라푸치노']; 
cafe.at(0); //아메리카노
cafe.at(1); //라떼
cafe.at(2); //스무디
cafe.at(3); //프라푸치노 

cafe.at(-1); //프라푸치노
cafe.at(-2); //스무디
cafe.at(-3); //라떼
cafe.at(-4); //아메리카노

// concat()
const arr1 = ['사탕', '초콜릿'];
const arr2 = ['젤리', '껌', '푸딩'];

console.log(arr1.concat("과자")); // [ '사탕', '초콜릿', '과자' ]
console.log(arr1.concat(arr2)); // [ '사탕', '초콜릿', '젤리', '껌', '푸딩' ]
console.log(arr1.concat('과자', arr2)); // [ '사탕', '초콜릿', '과자', '젤리', '껌', '푸딩' ]

// every()
const isTrue = value => value > 0;
const arr3 = [1,2,3,4,5];
const arr4 = [-1, 1, 30, 20];
const arr5 = [];

console.log(arr3.every(isTrue)); // true
console.log(arr4.every(isTrue)); // false
console.log(arr5.every(isTrue)); // true

console.log(arr3.every((elem, index, arr) => arr.length > 3)); // true

// some()
const arr6 = [9, 10, 4, 3, 1];
const arr7 = [-1, -3, -8, 1, -4];

console.log(arr6.some(x => x < 0)); // false
console.log(arr7.some(x => x > 0)); // true

// fill()
const arr8 = ['a', 'b', 'c', 'd'];
arr8.fill('z', 0, 3);
console.log(arr8); // [ 'z', 'z', 'z', 'd' ]

// includes()
const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, NaN];

arr9.includes(2); // true
arr9.includes(2, 2); // false
arr9.includes(NaN); // true

// indexOf()
const arr10 = [5, 1, 8, 7, 8];
console.log(arr10.indexOf(1)); // 1
console.log(arr10.indexOf(8)); // 2
console.log(arr10.indexOf(99)); // -1

// join()
const a = ['바람', '비', '불'];
console.log(a.join()); //바람,비,불
console.log(a.join(', '));  //바람, 비, 불
console.log(a.join(' + ')); //바람 + 비 + 불
console.log(a.join(''));    //바람비불 

const b = ['바람', null, '비', undefined, '불'];
console.log(b.join()); //바람,,비,,불

// find()
const arr11 = [1,2,3,4,5];
console.log(arr11.find(n => n > 2)); // 3
console.log(arr11.find(n => n > 5)); // undefined

// findIndex()
const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];
  
  const index = todos.findIndex(todo => todo.id === 3);
  console.log(index); // 2

// sort()
const arr13 = [6,8,4,2,7,1,5,3,9];
arr13.sort((a, b) => a - b); // 오름차순 정렬
console.log(arr13);
arr13.sort((a, b) => b - a); // 내림차순 정렬
console.log(arr13);

// reduce()
// 1 ~ 10까지 더하기
const numbers = [1,2,3,4,5,6,7,8,9,10];
const sum = numbers.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
});
console.log(sum); // 55