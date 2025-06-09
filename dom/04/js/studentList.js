function handleDeleteButtonOnclick(studentId) {
  if (!confirm("삭제하시겠습니까?")) return;
  studentList = studentList.filter((student) => student.id !== studentId);
  loadStudentList();
}

function loadStudentList() {
  const studentLis = studentList
    .map((student) => {
      const text = `${student.id}. ${student.name} (${student.age}) - ${student.address}`;

      return `<li>
          ${text}
          <Button onclick="handleDeleteButtonOnclick(${student.id})">삭제</Button>
        </li>`;
    })
    .join("");

  const studentListUl = document.querySelector(".student-list");
  studentListUl.innerHTML = studentLis;
}
