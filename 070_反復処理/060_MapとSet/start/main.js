const map = new Map();
const key1 = {};

map.set(key1, 'value1');
console.log(map.get(key1));

const key2 = function () {};

map.set(key2, 'value2');

console.log(map.get(key2));

let key3 = 0;

map.set(key3, 'value3');
console.log(map.get(key3));

map.delete(key3);

console.log(map.get(0));

// for (const [k, v] of map) {
//   console.log(k, v);
// }

const s = new Set(); //Setは重複したものを取り除いて列挙する

s.add(key1);
s.add(key1);
s.add(key2);
s.add(key3);
s.delete(key3);

console.log(s.has(key2)); //hasは含まれているかを真偽値で返す

// const arry = Array.from(s);
const arry = [...s]; //36行目と同義

console.log(arry);

for (let k of s) {
  console.log(k);
}
