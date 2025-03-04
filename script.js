document.querySelector("#addTask").addEventListener("click", () => {
    // input validation
    if (document.querySelector("#todoInput").value == "") {
        alert(`cannot add an empty task`);
        return;
    }
    
    const task = document.querySelector("#todoInput").value;
    const description = document.querySelector("#taskDescription").value;

    document.querySelector("#taskList").innerHTML += `
    <li class="list-group-item d-flex align-items-center gap-3">
        <span class="material-symbols-outlined me-4" style="color: lightgray">task_alt</span>

        <h3 id="task">${task}</h3>
        <small>${description}</small>
        <button class="btn btn-light closeTask ms-auto">
            <span class="material-symbols-outlined">close</span>
        </button>
    </li>`;

    document.querySelector("#todoInput").value = "";
    document.querySelector("#taskDescription").value = "";

    const myModal = document.querySelector("#closeModal");
    myModal.click();

    const tasks = document.querySelectorAll(".closeTask");
    tasks.forEach((task) => {
        task.addEventListener("click", (e) => {
            let grandparent  = e.target.closest("li");

            let currentTask = grandparent.children[1].innerHTML;
            let currentTaskDescription = grandparent.children[2].innerHTML;

            e.target.closest("li").remove();

            completed (currentTask, currentTaskDescription);
        })
    })

})

function completed (task, description) {
    document.querySelector("#CompletedTaskList").innerHTML += `
    <li class="list-group-item d-flex align-items-center gap-3">
        <span class="material-symbols-outlined me-4" style="color: green">task_alt</span>

        <h3 id="task" style="text-decoration: line-through;">${task}</h3>
        <small style="text-decoration: line-through;">${description}</small>
        <button class="btn btn-light closeTask ms-auto">
            <span class="material-symbols-outlined">close</span>
        </button>
    </li>`;
}

