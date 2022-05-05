const s = Symbol('hello');
const s2 = Symbol('hello');
console.log(s);
console.log(s2);
console.log(s === s2); //false

const str = new String('Tom');
console.log(str);

String.prototype[s] = function () {
  return 'Hello ' + this;
};
String.prototype[s2] = function () {};

//SymbolはES5のユーザーがES6にバージョンを切り替えた際にES6で追加されるprototypeメソッドとそれ以前にES5で記述していたメソッド名が重複した際に意図した処理になってしまわないようにするために誕生した歴史がある。

//ビルトインOBJのprototypeを拡張するのはprototype汚染とも言われ非推奨とされている。
const tom = 'Tom';

console.log(tom[s]());
