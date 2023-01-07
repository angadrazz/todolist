let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const taskCounter = document.getElementById('task-counter');

function fetchTodos (){
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function (response){
        console.log(response);
        return response.json();
  }).then(function (data){
        tasks = data.slice(1, 102);
        renderList();
        console.log(data);
  })
  .catch(function (error){
        console.log('error', error);
  })
}

function addTaskToDOM(task){
        const li = document.createElement('li');

     li.innerHTML = `
     <li>
                <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} data-id="${task.id}" class="custom-checkbox">
                <label for="${task.id}">${task.title}</label>
                <img src="./image/delete.png" class="delete" data-id="${task.id}">
                </li>
     `;

     taskList.append(li);
}

function renderList (){
        taskList.innerHTML = '';

        for (let i = 0; i < tasks.length; i++){
                addTaskToDOM(tasks[i]);
        }
   taskCounter.innerHTML = tasks.length;
}

function toggleTask (taskId){
        const task = tasks.filter(function (task){
                return task.id == taskId
        });

        if (task.length > 0){
                const currentTask = task[0];

                currentTask.completed =! currentTask.completed; 
                renderList();
                showNotification('Task toggle successfully');
                return;
        }
        showNotification('Could not task the toggle');
}

function deleteTask (taskId){
        const newTasks = tasks.filter(function(task){
                return task.id != taskId
        })

        tasks = newTasks;
        renderList();
        showNotification('Task Deleted Successfully');
}

function addTask (task){
        if (task) {
                tasks.push(task);
        }
                renderList();
                showNotification('Task added successfully');
                return;
}

function showNotification (text){
        alert(text);
}

function handleInputKeypress (e){
        if (e.key == 'Enter') {
                const text = e.target.value;
                console.log('text', text);

                if(!text) {
                        showNotification('The task can not be empty');
                        return;
                }
                 const task = {
                        text,
                        id: Date.now().toString(),
                        done: false
                 }
                 e.target.value = '';
                 addTask(task);
        }
}

function handleClickLister(e){
   let target = e.target;
   console.log(target);

   if (target.className == 'delete'){
        let taskId = target.dataset.id;
        deleteTask(taskId);
        return;
    } else if(target.className == 'custom-checkbox'){
        let taskId = target.dataset.id;
        toggleTask(taskId);
        return;

        
   }
}

function initializeApp (){
        fetchTodos();
        addTaskInput.addEventListener('keyup', handleInputKeypress);
        document.addEventListener('click', handleClickLister);
}


initializeApp();
