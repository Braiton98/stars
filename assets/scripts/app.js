const addStudentButton = document.getElementById("addStudent");
const main = document.getElementById("main");

// Event listener for adding a new student
addStudentButton.addEventListener('click', addStudent);

function addStudent() {
    const validate = confirm(`¿Quiere añadir un alumno?`);

  if (validate) {
    const nombre = prompt("Ingrese el nombre del alumno/a");
    const apellido = prompt("Ingrese el apellido del alumno/a");
    const alumno = `${nombre} ${apellido}`;

    // Create the container div for the student
    const studentContainer = document.createElement("div");
    studentContainer.classList.add("studentContainer");

    // Create the name and stars elements
    const nameP = document.createElement("p");
    nameP.classList.add("nameP");
    nameP.textContent = alumno;

    const starP = document.createElement("p");
    starP.classList.add("starAdded");
    starP.classList.add("bold");
    starP.textContent = `0 ⭐`;

    const addStarButton = document.createElement("button");
    addStarButton.innerHTML = '<span class="material-symbols-outlined addStar">add</span>';
    addStarButton.addEventListener('click', () => addStar(starP));
    
    const removeStarButton = document.createElement("button");
    removeStarButton.innerHTML = '<span class="material-symbols-outlined removeStar">remove</span>';
    removeStarButton.addEventListener('click', () => removeStar(starP));
    
    // Create the restart and delete elements
    const restartStarButton = document.createElement("button");
    restartStarButton.classList.add("pointer");
    restartStarButton.innerHTML = '<span class="material-symbols-outlined removeStar">restart_alt</span><p class="rd">Reiniciar conteo</p>';
    restartStarButton.addEventListener('click', () => restartStars(starP));

    const deleteUserButton = document.createElement("button");
    deleteUserButton.classList.add("pointer");
    deleteUserButton.innerHTML = '<span class="material-symbols-outlined">delete</span><p class="rd">Borrar</p>';
    deleteUserButton.addEventListener('click', () => deleteUser(nameP));

    // Append the elements to the container
    studentContainer.appendChild(nameP);
    studentContainer.appendChild(removeStarButton);
    studentContainer.appendChild(starP);
    studentContainer.appendChild(addStarButton);
    studentContainer.appendChild(restartStarButton);
    studentContainer.appendChild(deleteUserButton);

    // Append the container to the main element
    main.appendChild(studentContainer);
  } else {
    alert("De acuerdo.");
  }
}

// functions

function addStar(starP) {
  const currentStarCount = starP.textContent ? parseInt(starP.textContent) : 0;
  const newStarCount = currentStarCount + 1;
  starP.textContent = `${newStarCount} ⭐`;
}

function removeStar(starP) {
  const currentStarCount = starP.textContent ? parseInt(starP.textContent) : 0;
  
  if (currentStarCount > 0) {
    const newStarCount = currentStarCount - 1;
    starP.textContent = `${newStarCount} ⭐`;
  }
}

function deleteUser(nameP){
  nameP.parentElement.remove();
}

function restartStars(starP){
    starP.textContent = `0 ⭐`
}