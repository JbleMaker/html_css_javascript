window.onload = async () => {
  const root = document.querySelector("#root");
  render(root);
  await loadStudentList();
};

function render(targetElement) {
  targetElement.innerHTML = app();
}
