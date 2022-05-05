function Person1(name, age) {
  this._name = name;
  this._age = age;
}

Person1.hello = function () {
  console.log('Person1: hello');
};

Person1.hello();

Object.defineProperty(Person1.prototype, 'name', {
  get: function () {
    console.log('値を表示します');
    return this._name;
  },
  set: function (val) {
    console.log('値が更新された');

    this._name = val;
  },
});

const p1 = new Person1('Bob', 23);

p1.name = 'Tom'; //値の更新 setterの起動
p1.name = 'Tom';
p1.name = 'Tom';
p1.name = 'Tom';
console.log(p1.name); //値の取得getterの起動
console.log(p1.name);
console.log(p1.name);
console.log(p1.name);

//ES6
class Person2 {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    console.log('値を表示します');
    return this._name;
  }
  set name(val) {
    console.log('値が更新された');
    this._name = val;
  }
  //staticはインスタンスを作成しなくてもクラスから直接呼び出せるメソッド
  //thisは使えない
  static hello() {
    console.log('Person2: hello');
  }
}

const p2 = new Person2('Bob', 23);

Person2.hello();
