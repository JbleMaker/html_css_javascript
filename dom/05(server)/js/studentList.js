async function handleDeleteButtonOnclick(studentId) {
  if (!confirm("삭제하시겠습니까?")) return;
  try {
    const response = fetch(
      `http://localhost:8080/api/js/students/${studentId}`,
      {
        method: "DELETE",
      }
    );
    const responseJson = await response.json();
    console.log(responseJson);
    alert(JSON.stringify(responseJson) + "정보 삭제 완료");
  } catch (error) {
    console.error;
  }
  loadStudentList();
}

async function getStudentAllRequest() {
  try {
    const response = await fetch("http://localhost:8080/api/js/students", {
      method: "GET",
    });
    const responseJson = await response.json();
    console.log(responseJson);
    studentList = responseJson;
  } catch (error) {
    console.error;
  }
}

async function loadStudentList() {
  console.log("test");
  await getStudentAllRequest();

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
