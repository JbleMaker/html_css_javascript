const userList = [
  { id: 1, username: "aaa" },
  { id: 2, username: "bbb" },
  { id: 3, username: "ccc" },
  { id: 4, username: "ddd" },
  { id: 5, username: "eee" },
];

const findUserById = async (id) => {
  return userList.find((user) => user.id === id);
};

const getUserById = (id) => {
  return new Promise((rs, rj) => {
    const foundUser = findUserById(id);
    if (!!foundUser) {
      rs(foundUser);
    } else {
      rj(new Error("해당 id의 사용자를 찾을 수 없습니다."));
    }
  });
};

let user1 = await getUserById(1);
console.log("!!!!", user1);

let user2 = getUserById(1);
console.log("!!!!", user2);

getUserById(1)
  .then((result) => (user1 = result))
  .catch((error) => console.error(error));

getUserById(6)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

const getUserById2 = async (id) => {
  const foundUser = await findUserById(id);
  if (!foundUser) {
    throw new Error("해당 id의 사용자를 찾을 수 없습니다.");
  }
  return foundUser;
};

// async function getUserById2(id) {
//   const foundUser = findUserById(id);
//   if (!foundUser) {
//     throw new Error("해당 id의 사용자를 찾을 수 없습니다.");
//   }
//   return foundUser;
// }

getUserById2(2)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

getUserById2(6)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
