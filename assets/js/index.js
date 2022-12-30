const inputValue = document.getElementById("noteInput");
const form = document.getElementById("form");
const container = document.getElementById("container");
const handleSubmit = (e) => {
  e.preventDefault();
  location.reload;
  savetoLocal();
};

const savetoLocal = () => {
  let notes = [];
  if (localStorage.getItem("note")) {
    notes = JSON.parse(localStorage.getItem("note"));
  }
  notes.push(inputValue.value);
  localStorage.setItem("note", JSON.stringify(notes));
};

const displayValue = () => {
  let notesaved = [];
  let uniqueClass = "";
  notesaved = JSON.parse(localStorage.getItem("note"));
  if (notesaved !== null) {
    const arr = notesaved.map((item, index) => {
      uniqueClass = "class" + index;

      
      let div = document.createElement("div");
      div.setAttribute("class", uniqueClass);

  

      let p = document.createElement("p");
      p.innerHTML = item;

      let img = document.createElement('img')
      img.src=`/assets/images/${uniqueClass}.png`
      img.setAttribute('class', 'icon')

      let button = document.createElement("button");
      button.innerHTML = "Delete Note";
      button.setAttribute('class','deletebtn')

      div.appendChild(p);
      
      div.appendChild(img)
      div.appendChild(button);
      container.appendChild(div);

      const deletenote = (e) => {
        let result = notesaved.filter((item) => item !== p.innerHTML);
        localStorage.setItem("note", JSON.stringify(result));
        location.reload();
      };

      button.addEventListener("click", deletenote);
    });
  } else {
    let p = document.createElement("p");
    p.innerHTML = "No notes yet";
    container.appendChild(p);
  }
};

displayValue();
form.addEventListener("submit", handleSubmit);
