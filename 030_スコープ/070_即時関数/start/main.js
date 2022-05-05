function a() {
  console.log('a is called');
}

a();

let c = (function () {
  let privateVal = 0;
  let publicVal = 10;
  function privateFn() {
    console.log('privateFn is called');
  }
  function publicFn() {
    console.log('publicFn is called' + privateVal++);
  }
  return {
    publicVal,
    publicFn,
  };
})();
c.publicFn();

console.log(c.publicVal);

let b = (function () {
  console.log('b is called');
})();
