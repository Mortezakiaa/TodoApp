let input = document.getElementById("input-todo");
let btn = document.getElementById("add");
let select = document.getElementById("select");
let todo = document.querySelector(".todo-list");

document.addEventListener('DOMContentLoaded' , gettodos);

btn.addEventListener("click" , create);
input.addEventListener("keypress" , (e)=>{
    if(e.key === "Enter"){
        btn.click();
    }
})

function create(e){
    let div = document.createElement("div");
    let para = document.createElement("li");
    let trashbtn = document.createElement("button");
    let completebtn = document.createElement("button");
    let text1 = document.createTextNode("DELETE");
    let text2 = document.createTextNode("completed");
    let inputvalue = input.value;

    savelocal(input.value);

    trashbtn.classList.add("trash");
    trashbtn.appendChild(text1);

    para.classList.add("li");
    para.innerText = inputvalue;


    completebtn.classList.add("complete");
    completebtn.appendChild(text2);

    div.classList.add("bg-div");
    div.appendChild(para);
    div.appendChild(trashbtn);
    div.appendChild(completebtn);

    todo.appendChild(div);
  
    input.value = "";
}

todo.addEventListener('click' , (e)=>{
    let item = e.target;
    if(item.innerText === "completed"){
        item.parentElement.classList.toggle("bg-success");
    }
    if(item.innerText === "DELETE"){ 
        item.parentElement.remove();
        removelocal(item.parentElement);
    }
})

function savelocal(lists){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(lists);
    localStorage.setItem("todos" , JSON.stringify(todos));
}

function removelocal(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }   
    let todoindex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoindex) , 1);
    localStorage.setItem("todos" , JSON.stringify(todos));
}


select.addEventListener('change' , (e)=>{
    let todos = todo.childNodes;
    todos.forEach((item,index) =>{
        if(e.target.value === "all"){
            if(index > 0 && item.classList.contains('d-none')){
                item.classList.remove('d-none');
             }
         }
         if(e.target.value === 'completed'){
             if(index > 0 && !item.classList.contains('bg-success')){
                item.classList.add('d-none');
             }else if(index > 0 && item.classList.contains('bg-success')){
                item.classList.remove('d-none')
             }
         }
         if(e.target.value === 'uncompleted'){
            if(index > 0 && item.classList.contains('bg-success')){
                item.classList.add('d-none')
            }else if(index > 0 && !item.classList.contains('bg-success')){
                item.classList.remove('d-none')
             }
         }
    })
 })


function gettodos(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    } 
    todos.forEach(todo1 =>{
        let div = document.createElement("div");
        let para = document.createElement("li");
        let trashbtn = document.createElement("button");
        let completebtn = document.createElement("button");
        let text1 = document.createTextNode("DELETE");
        let text2 = document.createTextNode("completed");
        let inputvalue = todo1; 

        trashbtn.classList.add("trash");
        trashbtn.appendChild(text1);
  
        para.classList.add("li");
        para.innerText = inputvalue;

        completebtn.classList.add("complete");
        completebtn.appendChild(text2);
    
        div.classList.add("bg-div");
        div.appendChild(para);
        div.appendChild(trashbtn);
        div.appendChild(completebtn); 
        todo.appendChild(div);
    })
}