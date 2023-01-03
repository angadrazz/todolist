const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const taskCounter = document.getElementById('tasks-counter');

console.log('working');

function renderList (){}

function markTaskAsComplete (taskId){}

function deleteTask (taskId){}

function addTask (task){
        if (task) {
                tasks.push(task);        }
                renderList();
                showNotification('Task addedsuccessfully');
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