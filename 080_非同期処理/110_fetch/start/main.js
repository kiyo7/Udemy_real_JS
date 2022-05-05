// fetch('./users.json')
//   .then(function (res) {
//     console.log(res);
//     return res.json();
//   })
//   .then(function (json) {
//     console.log(json);
//     for (const user of json) {
//       console.log(`I am ${user.name}, ${user.age} years old`);
//     }
//   });

async function fetchUsers() {
  const data = await fetch('./users.json');
  data.json().then((res) => {
    for (const user of res) {
      console.log(`I'm ${user.name}, ${user.age}years old`);
    }
  });
}

fetchUsers();
