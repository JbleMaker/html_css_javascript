// const getData1 = () => {
//   return new Promise();
// };

// const getData2 = async () => {};

// getData1.then();
// getData2.then();

//then 실행함수 매개변수로 값 넘기는 방법.
function getData3() {
  return new Promise((rs, rj) => {
    rs("데이터");
  });
}

async function getData4() {
  return "데이터";
}

getData3().then((r) => console.log(r));
getData4().then((r) => console.log(r));

// catch 실행함수의 매개변수로 값 넘기는 방법.
const getData5 = (isError) => {
  return new Promise((rs, rj) => {
    if (isError) {
      rj(new Error("Error"));
      return;
    }
    rs("데이터");
  });
};

const getData6 = async (isError) => {
  if (isError) {
    throw new Error("Error!");
  }
  return "데이터";
};

getData5(true)
  .then((r) => console.log(r))
  .catch((e) => console.log(e));
getData6(true)
  .then((r) => console.log(r))
  .catch((e) => console.log(e));

// await으로 then 또는 catch 처리 방법.

console.log(await getData3()); //resolve의 매개변수값;
console.log(await getData4()); //return값 바로 받아옴.

try {
  console.log(await getData5());
} catch (error) {
  console.error(error);
}

try {
  console.log(await getData6());
} catch (error) {
  console.error(error);
}

async function fx() {
  try {
    console.log(await getData5());
  } catch {
    console.error(error);
  }
}
