/**
 * 배열(Array)
 */

const arr1 = [];
const arr2 = new Array();

arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);
arr1.push(50);

arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);
arr2.push(50);

console.log(arr1 === arr2);

const obj1 = { key1: "value1", key2: "value2" };
const obj2 = { key1: "value1", key2: "value2" };
console.log(obj1 === obj2);

/**
 * JSON
 * JS객체 또는 배열을 JSON문자열로 변환   - JSON.stringify();
 * JSON 문자열을 JS객체 또는 배열로 변환  - JSON.parse();
 */
const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);
console.log(json1);
console.log(json2);
console.log(json1 === json2);

const json3 = JSON.stringify(obj1);
const json4 = JSON.stringify(obj2);
console.log(json3);
console.log(json4);
console.log(json3 === json4);

const js1 = JSON.parse(json3);
const js2 = JSON.parse(json4);
console.log(js1);
console.log(js2);

/**
 * 배열의 기본 내장함수
 */
const names = ["kim", "jong", "bo", "sun", "im"];
// 값 추가
names.push("jongbo");

// 값 제거
console.log("========================================");
console.log(names.pop());

// 값 수정
names.splice(1, 2, "a", "ss", "fff", "ddd", "asdf");
console.log(names);

// 값 찾기
const findFx = (n) => n === "ss";
const foundName = names.find(findFx);
console.log(foundName);

const students = [
  { name: "kimjongbo1", age: 23 },
  { name: "kimjongbo2", age: 33 },
  { name: "kimjongbo3", age: 34 },
  { name: "kimjongbo4", age: 32 },
  { name: "kimjongbo5", age: 22 },
];

console.log(students.find((s) => s.name === "kimjongbo3"));

// 값 존재 유무
console.log(students.includes());

// 필터링
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.filter((n) => n % 2 === 0));

console.log(students);
console.log(students.filter((student) => student.age === 32));

// 값 변환
console.log(numbers.map((n) => n * 10));
console.log(
  students.map((student) => {
    if (student.age === 32) {
      return {
        name: student.name,
      };
    }
    return student;
  })
);

function map(array, fx) {
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray.push(fx(array[i]));
  }
  return newArray;
}

console.log("========================================");

console.log(map(students, student => {
    if (student.age === 32) {
      return {
        name: student.name,
      };
    }
    return student;
  })
);

console.log("========================================");

const filter = (array, fx) => {
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    if(fx(array[i])){
      newArray.push(array[i])
    }
  }
  return newArray;
}

console.log(filter(students, student => student.age === 33));

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = array.map(n => n*n);
console.log(squared);