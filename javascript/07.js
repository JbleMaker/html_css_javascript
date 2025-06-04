/**
 * 비구조할당(구조분해)
 */

const student = {
  name: "kimjong",
  age: 32,
  address: "금정구",
};

const studentName = student.name;
const studentAge = student.age;

const { name: studentName2, age: studentAge2 } = student;

console.log(studentName);
console.log(studentAge);
console.log(studentName2);
console.log(studentAge2);

console.log("====================================");

const printStudentInfo = ({ name, age, address: addr }) => {
  console.log(name);
  console.log(age);
  console.log(addr);
};
printStudentInfo(student);

console.log("====================================");

/**
 * 객체 구조분해할 때 주의할 점
 * 객체의 속성명이 같으면 이름을 바꿔줘야 한다.
 */

const s1 = {
  name: "김종보",
  age: 30,
};

const s2 = {
  name: "김종",
  age: 32,
};

const { name: s1Name, age: s1Age } = s1;
const { name, age } = s2;

console.log("====================================");
// 배열 비구조할당
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [num1, num2, num3] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);

console.log("====================================");

const useState = (data) => {
  const dataState = {
    data: data,
    setData: (d) => {
      console.log(d, "데이터set");
    },
  };
  return [dataState.data, dataState.setData];
};

const [userData, setUserData] = useState({
  username: "test",
  password: "1234",
});

console.log(userData);
setUserData({ username: "test1", password: "12345" });
