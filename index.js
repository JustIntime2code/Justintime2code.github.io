function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('txt').innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
  }
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}



  const grades = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"];

  function createSelections() {
    const inputCount = parseInt(document.getElementById("inputCount").value);
    if (inputCount > 9){
      inputCount = 9;
    }

    if (!isNaN(inputCount) && inputCount > 0) {
      const selectionContainer = document.getElementById("selectionContainer");
      selectionContainer.innerHTML = "";

      for (let i = 1; i <= inputCount; i++) {
        const label = document.createElement("label");
        label.textContent = `Course ${i}: `;

        const select = document.createElement("select");
        select.className = "GS";
        for (const grade of grades) {
          const option = document.createElement("option");
          option.value = grade;
          option.text = grade;
          select.appendChild(option);
        }

        selectionContainer.appendChild(label);
        selectionContainer.appendChild(select);
        selectionContainer.appendChild(document.createElement("br"));
      }
    }
  }

  var gradeValue = {
      "A": 4.0,
      "A-": 3.7,
      "B+": 3.3,
      "B": 3.0,
      "B-": 2.7,
      "C+": 2.3,
      "C": 2.0,
      "C-": 1.7,
      "D": 1.0,
      "F": 0
  };

  const calculateButton = document.getElementById("calculateButton");
  const gpaResultElement = document.getElementById("gpaResult");

  calculateButton.addEventListener("click", function () {
    const gradeSelects = document.getElementsByClassName("GS");
    const totalCredits = gradeSelects.length;
    let totalGradePoints = 0;

    for (let i = 0; i < totalCredits; i++) {
      const selectedGrade = gradeSelects[i].value;
      totalGradePoints += gradeValue[selectedGrade];
    }

    const gpa = totalGradePoints / totalCredits;
    gpaResultElement.textContent = `GPA: ${gpa.toFixed(2)}`;
  });

  const generateSelectionsButton = document.getElementById("generateSelections");
  generateSelectionsButton.addEventListener("click", createSelections);
  createSelections();


  var toggled = true;

  function toggleMenu() {
    var element = document.getElementById("Navbar-mobile-buttons");
    var element2 = document.getElementById("typing-animation");
    
    // Toggle visibility
    toggled = !toggled;
    element.style.display = toggled ? "block" : "none";
    element2.style.display = toggled ? "none" : "block";
  }

