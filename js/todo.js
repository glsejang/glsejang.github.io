const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list")

let todos = [];



function savetodos(){
    localStorage.setItem("todos", JSON.stringify(todos) )
}


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id != parseInt(li.id));
    savetodos();

}



function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "X"
    btn.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(btn)
    todoList.appendChild(li);

}





function todoSubmit (event){
    event.preventDefault()
    const newTodo = todoInput.value;
    todoInput.value = "";
    const todoObj = {
        text: newTodo,
        id: Date.now()
    };
    todos.push(todoObj)
    paintTodo(todoObj)
    savetodos()

}

todoForm.addEventListener("submit", todoSubmit)


const savedtodos = localStorage.getItem("todos")

if(savedtodos !== null){
    const parsedtodos= JSON.parse(savedtodos);
    todos = parsedtodos;
    parsedtodos.forEach(paintTodo)

    
}