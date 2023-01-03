let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const taskCounter = document.getElementById('tasks-counter');

console.log('working');

function renderList (){
        taskList.innerHTML = '';

        for (let i = 0; i < tasks.length; i++){
                addTaskToDOM(tasks[i]);
        }
}

function toggleTask (taskId){
        const task = tasks.filter(function (task){
                return task.id == taskId
        });

        if (task.length > 0){
                const currentTask = task[0];

                currentTask.done =! currentTask.done; 
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
                tasks.push(task);        }
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


addTaskInput.addEventListener('keyup', handleInputKeypress);