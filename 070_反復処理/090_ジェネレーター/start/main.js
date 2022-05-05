// function* gen() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// //yieldはdone:false value:値
// //returnはdone:true value:値で返す

// const it = gen();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// const it = genIterator(10);

// let a = it.next();

// while (!a.done) {
//   console.log(a.value);
//   a = it.next();
// }

const obj = {
  *[Symbol.iterator](max = 10) {
    let i = 0;
    while (i < max) {
      yield i++;
    }
    return; //省略可
  },
};

for (const i of obj) {
  console.log(i);
}
