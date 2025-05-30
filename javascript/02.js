/*
  자바스크립트 함수
*/

// 일반함수 정의
// function 함수명(매개변수1, 매개변수2) {
//   let 리턴데이터 = null;
//   console.log(매개변수1);
//   console.log(매개변수2);
//   console.log("함수호출");
//   return 리턴데이터; // 리턴이 필요할때 명시.
// }

// const 리턴값 = 함수명();
// console.log(리턴값);

// const 함수명2 = 함수명;
// const 리턴값2 = 함수명2(10, 20);
// console.log(리턴값2);
// const 리턴값3 = 함수명2(10);
// console.log(리턴값3);

// let 함수명5 = function (매개변수1, 매개변수2) {
//   let 리턴데이터 = null;
//   console.log(매개변수1);
//   console.log(매개변수2);
//   console.log("함수호출");
//   return 리턴데이터; // 리턴이 필요할때 명시.
// };

// //익명함수, ArrowFunction
// let 함수명3 = (매개변수1, 매개변수2) => {
//   let 리턴데이터 = null;
//   console.log(매개변수1);
//   console.log(매개변수2);
//   console.log("함수호출");
//   return 리턴데이터; // 리턴이 필요할때 명시.
// };

const fx1 = () => console.log("한줄");
const fx2 = (n) => console.log(n);
const fx3 = (n) => n + 1;
const fx4 = (n) => {
  console.log(n);
  return n + 1;
};
const fx5 = (a, b) => a * b;

////////////////////////////////////////////
const aa = () => {
  console.log("aa 함수 호출");
  return "aa함수 호출";
};

const bb = (fxx) => {
  console.log("bb함수 호출");
  return fxx;
};

const aaa = (fxx, fxx2) => {
  console.log("aaa함수 호출");
  console.log(fxx());
  console.log(fxx2());
  return "aaa함수 리턴값";
};

const student = {
  name: "jongbo",
  age: 32,
};

// console.log(student);
// console.log(student.age);
// console.log(student.name);
// console.log(student["name"]);
// console.log(student["age"]);

// const a = "name";
// const b = "age";

// console.log(student[a]);
// console.log(student[b]);

// student[a] = 'kimjong';
// console.log(student[a]);
// student.name = 'kimbo'
// console.log(student);

// student.printName = () => console.log('NAME:', student.name);
// student.printName();

const loginButton = {
  text: "login",
  value: "test",
  onclick: () => {
    console.log(loginButton.text);
  },
};

const loginButtonKeys = Object.keys(loginButton);

// for (let i = 0; i < loginButtonKeys.length; i++) {
//   console.log(loginButton[loginButtonKeys[i]]);
// }

const loginButtonValues = Object.values(loginButton);
console.log(loginButtonValues);
console.log("===================");
for (let i = 0; i < loginButtonValues.length; i++) {
  console.log(loginButtonValues[i]);
}
console.log("==========================");

const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);
console.log("============================");
for (let i = 0; i < loginButtonEntries.length; i++) {
  const entry = loginButtonEntries[i];
  const key = entry[0];
  const value = entry[1];
  console.log(entry, key, value);
}

console.log("=============================");

for (let entry of loginButtonEntries) {
  const key = entry[0];
  const value = entry[1];
  console.log(entry, key, value);
}
