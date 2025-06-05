const submitBtn = document.querySelector(".submit");
submitBtn.onclick = () => {
  const colorInputs = document.querySelectorAll(".color-input");
  const colorInputLeftValue = colorInputs[0].value || "#ffffff";
  const colorInputRightValue = colorInputs[1].value || "#ffffff";
  // alert(`left: ${colorInputLeftValue}, right: ${colorInputRightValue}`);
  const head = document.querySelector("head");
  head.innerHTML += `<style> 
    .box1 {
      background-color :${colorInputLeftValue}
      }

    .box2 {
      background-color : ${colorInputRightValue}
    }
    </style>`;
};

const resetBtn = document.querySelector(".reset");
resetBtn.onclick = () => {
  const colorLeftInput = document.querySelector(".color-input:first-child");
  const colorRightInput = document.querySelector(".color-input:last-child");
  const headStyle = document.querySelector("head > style");
  const style = document.querySelector("style");

  headStyle.remove("style");
  colorLeftInput.value = "";
  colorRightInput.value = "";
  // headStyle.remove(".box1");
  // headStyle.remove(".box2");
};
