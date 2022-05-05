new Promise(function (resolve, reject) {
  console.log('promise');
  setTimeout(function () {
    reject('hello');
  }, 1000);
})
  .then(function (data) {
    console.log('then:' + data);
    // throw new Error();
    return data;
  })
  .then(function (data) {
    console.log('then:' + data);
    return data;
  })
  .catch(function (data) {
    console.log('catch:' + data);
  })
  .finally(function () {
    console.log('finally');
  });

//finallyは引数を取らない 渡してもundefinedを返す

console.log('global end');
