function addNums(){
    const numb1 = parseFloat(document.getElementById("num1").value)
    const numb2 = parseFloat(document.getElementById("num2").value)
    const body = document.querySelector("body")

    const res = numb1 + numb2
    console.log(numb1)
    console.log(numb2)
    console.log(res)

    // const result = document.querySelector("#result")
    // queryselectorall is used for multiple same name class
    document.getElementById("result").innerText =  `Result: ${res}`

    const h2 = document.createElement("h2")
    h2.innerHTML='<h2>Addition performed</h2>'
    body.appendChild(h2)


}



// todo app


document.addEventListener('DOMContentLoaded', function() {

    let inputData = document.getElementById("todo-input")
    let addBtn = document.getElementById("add-todo")
    let todoList = document.getElementById("todo-list")


    let todoArray = JSON.parse(localStorage.getItem("todoArray")) || []

    todoArray.forEach((item) => {
        renderTasks(item)
    })
    addBtn.addEventListener("click", function(){
        const taskText = inputData.value.trim()
        if(taskText === ""){
            alert("Please enter a task")}
        else{

            let todo = {
                id: Date.now(),
                text: taskText,
                isCompleted: false
            }
            todoArray.push(todo)
            saveItems()
            renderTasks(todo)
            inputData.value = ""
        }
    })

    function renderTasks(item){
        let li = document.createElement("li")
        li.innerHTML=`<span>${item.text}</span> <button>Delete</button>`
        todoList.appendChild(li)

        if (item.isCompleted) {
            li.classList.add("completed");
        }

        let deleteButton = li.querySelector("button");
        li.addEventListener("click",(e)=>{
            if (e.target !== deleteButton) {
                item.isCompleted = !item.isCompleted; // Toggle isCompleted
                li.classList.toggle("completed");
                saveItems();
            }
        })

        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent triggering the click event on li
            todoArray = todoArray.filter((todo) => todo.id !== item.id);
            deleteButton.parentElement.remove();
            saveItems();
        });
    }


    saveItems = () => {
        localStorage.setItem("todoArray", JSON.stringify(todoArray))
    }
});

// calculator

 const display = document.getElementById('display');
 const buttons = document.querySelectorAll('.btn');

 let currentInput = '';

 buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        const value = button.innerText
        if(value === 'C'){
            currentInput = ''
        }else if(value ==='='){
             try {
          currentInput = eval(currentInput); 
        } catch (error) {
          currentInput = 'Error';
        }
        } else{
            currentInput += value;
        }
        display.value = currentInput;
    })
 })