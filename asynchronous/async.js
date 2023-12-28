// !!! async & await
// 깔끔하게 promise를 사용할 수 있는 방법
// 기존에 존재하는 promise를 위해 조금 더 간편한 API를 제공한 것
// * ㄴ> syntactic sugar(문법 설탕) : 기존에 존재하는 것을 감싸서 쉽게 코드를 읽을 수 있게 만드는 것
// ! promise를 대체해서 사용하는 것은 X (상황에 따라 다르다)

// * 1. async

// 기존의 promise 이용
function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request in 10 secs...
        resolve('ellie');
    });
}

// async 이용
async function fetchUser() {
    // do network request in 10 secs...
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// * 2. await
/* 
    - async가 붙은 함수 안에서만 사용 가능
    - await가 붙은 함수가 끝날 때까지 기다려줌
    - 동기적인 코드를 사용하는 것처럼 작성해서 가독성을 좋게 할 수 있다.
*/

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '사과';
}

// await를 사용하지 않은 경우
/* function getBanana() {
    return delay(1000)
        .then(() => '바나나');
} */

async function getBanana() {
    await delay(1000);
    return '바나나';
}

// 콜백 지옥
/* function pickFruits() {
    return getApple()
        .then(apple => {
            return getBanana()
                .then(banana => `${apple} + ${banana}`);
        });
} */

// *** async + await 이용
async function pickFruits() {
    // 사과와 바나나를 다 받아와서
    try {
        const apple = await getApple();
        const banana = await getBanana();
    } catch (e) {
        console.log(e);
    }
    // Promise가 모두 처리 되면 결과를 반환
    return `${apple} + ${banana}`;
}

// *** await 병렬처리
// * 각각의 promise를 만들어서 바로 실행시켜주기
/* async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();

    const apple = await applePromise;
    const banana = await bananaPromise;
    
    return `${apple} + ${banana}`;
} */

// * Promise API 이용(Promise.all())
function pickFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}

const result = pickFruits();
result.then(console.log); // 사과 + 바나나

// * Promise API - Promise.race()
// 어떤 과일이든 상관 없고, 먼저 따지는(처리되는, return 되는) 과일 하나만 가져오기
// getApple() 내부 delay()의 인자를 2000으로 조정 (바나나가 먼저 따지도록)
function pickOnlyOneFruit() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOneFruit()
    .then(console.log); // 바나나
