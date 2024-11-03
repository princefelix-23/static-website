const taskInput = document.getElementById('input');
const taskList = document.getElementById('list');

taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const taskValue = taskInput.value.trim();

        if (taskValue) {
            const listItem = document.createElement('li');
            listItem.textContent = taskValue;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                taskList.removeChild(listItem);
            });
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    }
});
