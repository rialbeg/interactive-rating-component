let id = -1;
let isValueSelected = false;
document.getElementById("submit-button").addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(event.target.value);
  localStorage.setItem("id", id);
  if (isValueSelected) window.location.assign("./pages/thank-you.html");
});

const grades = document.getElementById("grades-container").children;
localStorage.clear();

for (let i = 0; i < grades.length; i++) {
  grades[i].addEventListener("click", (event) => {
    const id_grade = event.target.dataset.id;
    id = id_grade;
    // localStorage.setItem("id", id_grade);

    if (grades[i].classList.contains("active")) {
      grades[i].classList.remove("active");
      isValueSelected = false;
    } else {
      grades[i].classList.add("active");
      isValueSelected = true;
    }
    // console.log(id_grade);
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].classList.contains("active") && i + 1 != id_grade) {
        grades[i].classList.remove("active");
      }
    }
  });
}
