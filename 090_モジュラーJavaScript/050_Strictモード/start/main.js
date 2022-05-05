'use strict';

function fn() {
  // a = 0;
  // const implements, interface, package  予約後は使えない
  return this;
}

console.log(fn.call('fd'));
// console.log(a);
