/**
 * 단축 평가 논리 연산
 */

const name = "김종보";
console.log(name && "김종보");
// && 연산 -> 앞의 값이 true일 때 뒤의 값을 리턴, false일 때 false리턴
console.log(true && name);
console.log(true && 10);

// ||연산 -> 앞의 값이 true일 때 뒤의 값을 리턴, false일 때 true리턴
console.log(true || 10);
console.log(false || 10);

console.log("====================================")

// nullish 병합 연산
// ?? 연산 -> 앞의 값이 null 또는 undefined가  아니면 앞의 값, 그 외에는 뒤의 값을 리턴.
console.log(null ?? 100);
console.log(20 ?? 100);
console.log(undefined ?? 100);