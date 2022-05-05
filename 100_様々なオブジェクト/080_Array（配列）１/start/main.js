const array = [1, 2, 3, 4, 5];

array.push(6);
array.unshift(0); //unshiftは前pushは後に要素を追加する

array.pop();
array.shift(); // shiftは前popは後を取り除く

var l = array.splice(0, 3, 3, 3); //第1引数に基準点、第2に第1から取り除く範囲、第3以降は置き換える値

const array2 = [7, 8, 9];
let a = array.concat(array2); //配列の結合
a = [...array, array2]; //上と同義
console.log(l);

console.log(array);
