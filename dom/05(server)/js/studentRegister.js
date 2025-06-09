let studentInputValues = {
  name: "",
  age: "",
  address: "",
};

function handleRegisterOnkeyup(event) {
  // console.log(event);
  studentInputValues = {
    ...studentInputValues,
    [event.target.name]: event.target.value,
  };
}

async function registerStudentRequest() {
  try {
    const requestURL = "http://localhost:8080/api/js/students";
    const requestBody = JSON.stringify(studentInputValues);
    const response = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: requestBody,
    });
    const responseJson = await response.json();
    console.log(responseJson);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

const handleRegisterOnclick = (event) => {
  registerStudentRequest();
  loadStudentList();
};

function studentRegister() {
  return `
    <div>
      이름 :
      ${studentRegisterInput({
        type: "text",
        name: "name",
        onkeyup: "handleRegisterOnkeyup",
      })}
      나이 :
      ${studentRegisterInput({
        type: "text",
        name: "age",
        onkeyup: "handleRegisterOnkeyup",
      })}
      주소 :
      ${studentRegisterInput({
        type: "text",
        name: "address",
        onkeyup: "handleRegisterOnkeyup",
      })}

      <div> 
        <button onclick="handleRegisterOnclick(event)">등록</button>
      </div>
    </div>
  `;
}
