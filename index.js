localStorage.clear();
// get data
var str = "new";
localStorage.setItem("name", str); 
// console.log(localStorage.getItem("name")); 
// print data
// var input = document.querySelector("input")
// document.getElementById("newitem").innerHTML = localStorage.getItem("textName");

function getData() {
 var str = document.getElementById("newitem").value;
 localStorage.setItem("name",str);
  // console.log(localStorage.getItem("name"))
}

var input = document.querySelector("input")
const inputBox = document.querySelector(".newitem")
const todoList = document.querySelector(".todoList");
const addBtn = document.querySelector(".buttonAdd");
const deleteAllBtn = document.querySelector(".buttonDel");

input.onkeyup = () => {
  let userData = input.value;
  if (userData.trim() != 0) {
      addBtn.classList.add("active"); 
    } else {
      addBtn.classList.remove("active");
    }
}

function getData(){
  let userData = input.value;
  let getLocalStorageData = localStorage.getItem("NewData");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
 listArray.push(userData);
  localStorage.setItem("NewData", JSON.stringify(listArray));
  input.value = '';
  printData();
}

function printData(){
   let newLiTag = "";
      listArray.forEach((element,index) => {
      newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`; 
    });
    todoList.innerHTML = newLiTag;
}

// delete task 
  function deleteTask(index) {
    let getLocalStorageData = localStorage.getItem("NewData");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); 
    localStorage.setItem("NewData", JSON.stringify(listArray));
    printData();
  }

//delete all
deleteAllBtn.onclick = () => {
  listArray = []; 
  todoList.innerHTML = '';
  localStorage.clear();
  }
