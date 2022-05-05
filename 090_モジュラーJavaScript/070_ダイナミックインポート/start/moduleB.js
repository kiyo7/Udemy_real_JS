// import { publicVal, publicFn } from './moduleA.js';

// publicFn();

//動的インポート
// import('./moduleA.js').then(function (modules) {
//   console.log(modules);
//   modules.publicFn();
// });

//import関数はPromiseを返却
async function fn() {
  const modules = await import('./moduleA.js');
  // console.log(import('./moduleA.js')); //->Promise
  modules.publicFn();
}

fn();
