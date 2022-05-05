let a = {
  prop: 'Hello',
};

let b = a;
console.log(a, b);

b.value = 'Bye';
console.log(a, b);
console.log(a === b);

//プリミティブ型は値を参照している。 イメージ
// let a = "あ"
// aは "あ"を直接参照する
