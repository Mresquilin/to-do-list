let todo = document.querySelector('.todo')
let done = document.querySelector('.done')
let toDone = document.querySelector('.toDone')
let del = document.querySelector('.delete')

let moveTodo = function moveTodo(e){
    done.appendChild(e.target.parentNode)
    e.target.parentNode.removeChild(e.target)
}

todo.addEventListener('click', function(e)){
    let dialouge = window.prompt('What do you need to do?')
    let newTodo = document.createElement('li')
    newTodo.innerHTML = `${dialogue} <button class="toDone"> > </button>`
    newTodo.querySelector('.toDone').addEventListener('click', (e)=>{moveTodo
    (e)})
    todo_list.appendChild(newTodo)
}