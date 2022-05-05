const arry = [1, 2, 3, 4, 5];

arry.forEach((v, i, array) => {
  console.log(v);
});

const newArray = arry.map((v, i, array) => {
  console.log(v);
  return v * 2;
});

console.log(newArray);

const filterArray = arry.filter((v, i, array) => {
  return i === 1;
});
//filterはreturnでtrueになったもののみを新しい配列として返却する

console.log(filterArray);
