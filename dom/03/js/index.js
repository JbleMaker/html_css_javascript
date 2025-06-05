const bookList = [
  { id: 1, title: "자바스크립트 완벽 가이드", price: 38000 },
  { id: 2, title: "모던 자바스크립트 입문", price: 29000 },
  { id: 3, title: "리액트 실전 활용", price: 33000 },
  { id: 4, title: "스프링 부트 입문", price: 35000 },
  { id: 5, title: "알고리즘 문제 해결 전략", price: 42000 },
  { id: 6, title: "프로그래머를 위한 자료구조와 알고리즘", price: 31000 },
  { id: 7, title: "도메인 주도 설계", price: 47000 },
  { id: 8, title: "클린 코드", price: 39000 },
  { id: 9, title: "소프트웨어 장인", price: 36000 },
  { id: 10, title: "마이크로서비스 아키텍처", price: 40000 },
];

let rightBookList = [];

const bookListUpload = bookList.map((s) => {
  return `
    <li>${s.id}. ${s.title} (${s.price}원)</li>
  `;
});

const leftbox = document.querySelector(".left-box");
const rightbox = document.querySelector(".right-box");
leftbox.innerHTML = bookListUpload.join("");

function reload() {
  const reloadBookList = rightBookList.map((s) => {
    return `
      <li>${s.id}. ${s.title} (${s.price}원)</li>
      `;
  });
  rightbox.innerHTML = reloadBookList.join("");
}

const moveBtn = document.querySelector(".move");
const deleteBtn = document.querySelector(".delete");
const numInput = parseInt(document.querySelector(".mid-box > input").value);

moveBtn.onclick = () => {
  const foundBook = bookList.find((s) => s.id === numInput);

  if (!foundBook) {
    alert("해당 번호의 도서는 없습니다.");
    return;
  }

  if (rightBookList.find((s) => s.id === numInput)) {
    alert("이미 있는 목록입니다.");
  } else {
    bookList.map((list) => {
      if (numInput === list.id) {
        rightBookList.push({ ...list });
      }
    });
  }
  reload();
};

deleteBtn.onclick = () => {
  const foundBook = rightBookList.find((book) => book.id === numInput);

  if (!foundBook) {
    alert("해당 번호의 도서는 없습니다.");
    return;
  }

  if (foundBook) {
    const filterBookList = rightBookList.filter((book) => book.id !== numInput);
    rightBookList = [...filterBookList];
  }
  reload();
};
