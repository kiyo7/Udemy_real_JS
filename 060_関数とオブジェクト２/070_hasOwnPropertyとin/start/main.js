function Person(name, age) {
  this.name = name;
  this.age = age;
}

Object.prototype.hello = function () {
  console.log('Object: hello ' + this.name);
};

Object.prototype.bye = () => {
  console.log('Object: bye ' + this.name);
};

const bob = new Person('Bob', 18);

const result = bob.hasOwnProperty('name');
console.log(result);

console.log('bye' in bob);

// hasOwnPropertyは自身の持つプロパティの中のみを捜索する;

// inはObjも含め全ての階層のプロパティを探しに行く;
