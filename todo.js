const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const taskCounter = document.getElementById('tasks-counter');

console.log('working');

function renderList (){}

function markTaskAsComplete (taskId){}

function deleteTask (taskId){}

function addTask (task){}

function showNotification (text){
        alert(text);
}

function handleInputKeypress (e){
        if (e.key == 'Enter') {
                const text = e.target.value;

                if(!text) {
                        showNotification('The task can not be empty');
                        return;
                }
        }
}


addTaskInput.addEventListener('keyup', handleInputKeypress);