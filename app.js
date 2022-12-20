//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')
//event listeners

todoButton.addEventListener('click', addToDo)
todoList.addEventListener('click',deleteCheck)
filterOption.addEventListener('click',filterTodo)
//functions
function addToDo(event){
    //prevent form from submitting
    event.preventDefault()
   

    //todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //create li
    const newTodo =document.createElement('li')
    newTodo.innerText=todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    //check mark button
    const completedButton = document.createElement('button')
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)


        //check trash button
    const trashButton = document.createElement('button')
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    //append to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value=""
}


//detete function
function deleteCheck(e){
    const item= e.target
    //delte todo
    if (item.classList[0]==='trash-btn'){
        const todo=item.parentElement;

        //animation
        todo.classList.add('fall')
        todo.addEventListener('transitioned',function(){
            todo.remove()
        })
        
    }
    //checkmark
    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement
        todo.classList.toggle('completed')

    }
}

//filter funciton

function filterTodo(e){
    const todos  = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display='flex'
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display='flex'
                }else{
                    todo.style.display='none'
                }
        }
    })

}




