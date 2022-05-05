class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj1 = new C(1, 2);
console.log(obj1);

const obj2 = Reflect.construct(C, [1, 2]);
console.log(obj2);

console.log('c' in obj1);
console.log(Reflect.has(obj1, 'b'));

console.log(Reflect);

Reflect.defineProperty;
//     19,21行目は同義　処理の失敗時の返却値が違う 19はboolean 21はError
Object.defineProperty;

const bob = {
  name: 'Bob',
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
};

const tom = {
  name: 'Tom',
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    return this._hello();
  },
};
