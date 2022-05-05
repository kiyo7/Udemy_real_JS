import { publicFn as fn, publicVal as val } from './moduleA.js';
fn();
fn();
fn();

//moduleでimportしたプリミティブ型の値を変更すると元の関数内のデータとの不整合が発生するため値の変更はESModuleでは許可されていない
console.log(val.prop++); //しかし、OBJ型にすると変更は可能になる

//基本的にはデータはオブジェクトで管理することが多い
console.log(val.prop++);
console.log(val++); //エラー

fn();
