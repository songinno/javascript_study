/* 2. 메서드 호출 */
// ! 메서드(객체의 프로퍼티로서의 함수) 내부의 this -> 해당 메서드 소유 객체에 바인딩
var obj6 = {
    name: 'Lee',
    // 메서드
    sayName: function() {
        console.log(this.name);
    }
};

var obj7 = {
    name: 'Kim'
};

obj7.sayName = obj6.sayName;

obj6.sayName(); // Lee
obj7.sayName(); // Kim

// ! 프로토타입 객체의 메서드 내부의 this -> 해당 메서드를 호출한 객체에 바인딩
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

var me = new Person('Lee');
console.log(me.getName()); // Lee

Person.prototype.name = 'Kim'; 
console.log(Person.prototype.getName()); // Kim


