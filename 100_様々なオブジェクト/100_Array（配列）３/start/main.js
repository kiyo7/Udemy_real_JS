const arry = [1, 2, 3, 4, 5];

const result = arry.reduce((accu, curr) => {
  console.log(accu, curr);
  return accu + curr;
}, 0);
//accuには前のループでreturnされた値が入る.　第2引数にはaccuの初期値が入る
console.log(result);
