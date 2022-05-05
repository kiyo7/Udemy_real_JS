function incrementFactory() {
  let num = 0;

  function increment() {
    num = num + 1;
    console.log(num);
  }
  return increment; //関数をreturnする
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();
increment();
