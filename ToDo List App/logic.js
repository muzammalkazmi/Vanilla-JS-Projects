fullform=document.querySelector('.form-control')
text1=document.getElementById('todo-input')
listGroup=document.querySelector('.list-group')
function renderTodo(todos){
    todos.forEach(function(todo){
    var li=document.createElement('li')
    li.innerHTML=todo.value
    li.setAttribute('class','list-group-item')
    listGroup.appendChild(li)
    })
}
var todos=[]
var storedTodos=localStorage.getItem(todos)
if(storedTodos){
    var parsestoredTodos=JSON.parse(storedTodos)
    todos=parsestoredTodos;
    renderTodo(todos);
}
fullform.addEventListener('submit', function(event){
    event.preventDefault();
    var data=fullform.todoName.value
    
     todos.push({
    
        value:data,
        isDone:false
    })
    //store data to local storage
localStorage.setItem('todos', JSON.stringify(todos))
    fullform.todoName.value=''
    
       })
       
   
    
    


    



