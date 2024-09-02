// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
if (inputBox.value === '') {
    alert("You must write something!");
} else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
inputBox.value = "";
saveData();
}

listContainer.addEventListener("click", function(e) {
if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
} else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
}  
}, false);

function saveData() {
localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
listContainer.innerHTML = localStorage.getItem("data") || '';
}

showTask();

// function addTask(){
//     if(inputBox.Value === ''){
//           alert("You must write something!");
//     }
//     else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.Value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.Value = "";
//     saveData();

  
// }
//  listContainer.addEventListener("click",function(e){
//     if(e.target.tagName === "li"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if (e.target.tagName === "span"){
//         e.target.parentElement.remove();
//         saveData();
//     }  
//  },false);

//  function saveData(){
//     localStorage.setItem("data",list-container.innerHTML);
//  }
// function showTask(){
//     list-container.innerHTML = localStorage.getItem("data");
// }
// showTask();