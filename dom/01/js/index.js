const title1 = document.getElementById("title");
console.log({ title1 });

const titles = document.getElementsByClassName("title");
console.log(titles);

const h3s = document.getElementsByTagName("h3");
console.log(h3s);

console.log({ document });

const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");

const title1q = document.querySelector("#title");
const titles2 = document.querySelectorAll(".title");
console.log(titles2);
const h3s2 = document.querySelectorAll("h3");
const d12 = document.querySelector("#d1");
const d22 = d12.querySelector("#d2");

const d23 = document.querySelectorAll("#d1 > #d2");

const students = [
  {
    name: "kim",
    age: 23,
    address: "busan",
  },
  {
    name: "jong",
    age: 25,
    address: "busan",
  },
  {
    name: "bo",
    age: 35,
    address: "busan",
  },
];

const studentTablebody = document.querySelector(".student-table > tbody");
console.log(studentTablebody);

const studentTrs = students.map((s, index) => {
  return `
    <tr>
      <td>${index + 1}</td>
      <td>${s.name}</td>
      <td>${s.age}</td>
      <td>${s.address}</td>
    </tr>`;
});

console.log(studentTrs.join(""));
studentTablebody.innerHTML = studentTrs.join("");

const tdList = studentTablebody.querySelectorAll("td");
// tdList.forEach((td) => td.setAttribute("style", "border: 1px solid #000;"));
// tdList.forEach((td) => (td.style = "border: 1px solid #000;"));

const studentTable = document.querySelector(".student-table");
studentTable.classList.add(".table-border");
