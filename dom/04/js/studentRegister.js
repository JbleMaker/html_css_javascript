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
123;

const handleRegisterOnclick = (event) => {
  studentList = [...studentList, studentInputValues];
  studentInputValues = {
    name: "",
    age: "",
    address: "",
  };
  console.log(studentList);
};

function studentRegister() {
  return `
    <div>
      ${studentRegisterInput({
        type: "text",
        name: "name",
        onkeyup: "handleRegisterOnkeyup",
      })}
      ${studentRegisterInput({
        type: "text",
        name: "age",
        onkeyup: "handleRegisterOnkeyup",
      })}
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
