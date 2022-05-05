// window.name = 'John';

// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log('Hello ' + this.name);
//     }
// }
// person.hello();

// function fn(ref) {
//     ref();
// }

// fn(person.hello);

const person = {
  name: 'KIYO',
  fn: function () {
    console.log('Hello ' + this.name);
  },
};

// person.fn();

const fn = person.fn.bind(person);

window.name = 'しんたろう';
fn();

const func = function () {
  console.log(this.name);
};

func;
