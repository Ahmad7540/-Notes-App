let btn = document.querySelector("button");
let notesContainer = document.querySelector(".notesContainer");

function updateData() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
function getData() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
getData();
function createNote() {
  let noteBody = document.createElement("div");
  let noteBox = document.createElement("p");
  let delImg = document.createElement("img");
  noteBody.className = "note";
  noteBox.className = "inputBox";
  noteBox.setAttribute("contenteditable", "true");
  delImg.src = "images/delete.png";
  noteBody.appendChild(noteBox);
  noteBody.appendChild(delImg);
  notesContainer.appendChild(noteBody);
  notesContainer = document.querySelector(".notesContainer");
}

btn.addEventListener("click", createNote);

function removeNote(e) {
  e.target.parentElement.remove();
  updateData();
}
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    removeNote(e);
  } else if (e.target.tagName === "P") {
    console.log("run");
    e.target.addEventListener("keyup", () => {
      updateData();
    });
  }
});


