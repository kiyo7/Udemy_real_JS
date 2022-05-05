const arry = [1, 2, 3, 4, 5];

for (let i = 0; i < arry.length; i++) {
  console.log(arry[i]);
}

let v,
  j = 0;

//配列内にtruthyな値がある限りループされる記述
while ((v = arry[j++])) {
  console.log(v);
}
