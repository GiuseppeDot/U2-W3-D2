const key = "notepad-memory";
const saveButton = document.getElementById("save");
const loadButton = document.getElementById("load");
const resetButton = document.getElementById("reset");
//riverimento campo textarea

const textArea = document.getElementById("notepad");

//assegno un addEventListener al saveButton
saveButton.addEventListener("click", function () {
  //salvo il contenuto della textArea nel localAtorege
  //in un chiave con nome a piacere (notepad-memory)
  localStorage.setItem(key, textArea.value);
  //allert contenuto salvato
  const saveContent = document.getElementsByClassName("alert")[0];
  saveContent.classList.remove("d-none");
  textArea.value = " ";
  setTimeout(() => {
    saveContent.classList.add("d-none");
  }, 1000);
});

loadButton.addEventListener("click", function () {
  const saveContent = localStorage.getItem(key);
  //puo essere una stringa o null
  //!saveContent || saveContent === null
  if (!saveContent) {
    const errorButton = document.getElementsByClassName("alert")[3];
    errorButton.classList.remove("d-none");
    setTimeout(() => {
      errorButton.classList.add("d-none");
    }, 2000);
  } else {
    textArea.value = saveContent;
    const loadContent = document.getElementsByClassName("alert")[1];
    loadContent.classList.remove("d-none");
    setTimeout(() => {
      loadContent.classList.add("d-none");
    }, 2000);
  }
});

// resetButton = addEventListener("click", function () {
//   textArea.value = " ";
//   localStorage.removeItem(key);
//   const resetContent = document.getElementsByClassName("alert")[2];
//   resetContent.classList.remove("d-none");
//   setTimeout(() => {
//     resetContent.classList.add("d-none");
//   }, 2000);
// });
