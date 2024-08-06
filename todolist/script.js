var edit_task;
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    if(document.querySelector('#push').innerText === 'edit'){
        var tasks = document.querySelectorAll(".task");
        console.log(tasks, edit_task, tasks[edit_task]);
        tasks[edit_task].children[0].innerText = document.querySelector('#newtask input').value;
        document.querySelector('#push').innerText = 'add';
        document.querySelector('#newtask input').value = '';

    }else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt">Del</i>
                </button>
                <button class="edit">
                    <i class="far fa-trash-alt">Edit</i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var edit_tasks = document.querySelectorAll(".edit");
        console.log(edit_tasks);
        for(let j=0; j<edit_tasks.length; j++){
            edit_tasks[j].onclick = function(){
                document.querySelector('#push').innerText = 'edit';
                document.querySelector('#newtask input').value =  this.parentNode.children[0].innerText;
                edit_task  = j;
            }
        }
    }
}