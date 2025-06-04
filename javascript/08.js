const student = {
  name: "aaa",
  age: 11,
  address: "geumjung",
  phone: "010-2534-0000",
};

// 비구조 할당
const { name, address } = student;
console.log(name, address);

// REST 문법
const { age, ...REST } = student;
console.log(age, REST);

console.log("====================================");

const numbers = [1, 2, 3, 4];
const [n1, n2, ...n] = numbers;
console.log(n1, n2, n);

console.log("====================================");

// spread
const newStudent = {
  ...student,
  gender: "남",
};

console.log(newStudent);

// 배열 spread
const newNumbers = [...numbers, 2, 3, 4, 5];
console.log(newNumbers);

let names = [];
const addName = (name) => {
  names = [...names, name];
};

let obj = {
  data1: "data1",
  data2: "data2",
};

const addProps = (props) => {
  obj = {
    ...obj,
    ...props,
  };
};

addProps({ data3: "data3", data4: "data4", data5: "data5", data6: "data6" });
console.log(obj);
