document.querySelector("#addTask").addEventListener("click", () => {
    // input validation
    if (document.querySelector("#todoInput").value == "") {
        alert(`cannot add an empty task`);
        return;
    }
    
    const task = document.querySelector("#todoInput").value;
    const description = document.querySelector("#taskDescription").value;

    document.querySelector("#taskList").innerHTML += `
    <li class="list-group-item">
        <div class="row">
            <div class="col-1 d-flex justify-content-center align-items-center">
                <span class="material-symbols-outlined" style="color: lightgray;">task_alt</span>
            </div>
            <div class="col">
                <div class="row">
                    <h3>${task}</h3>
                </div>
                <div class="row">
                    <small>${description}</small>
                </div>
            </div>
            <div class="col-1 d-flex justify-content-center align-items-center">
                <button class="btn btn-light closeTask">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
        </div>
    </li>`;

    document.querySelector("#todoInput").value = "";
    document.querySelector("#taskDescription").value = "";

    const myModal = document.querySelector("#closeModal");
    myModal.click();

    const tasks = document.querySelectorAll(".closeTask");
    console.log(tasks);
    tasks.forEach((task) => {
        console.log(task);
        task.addEventListener("click", (e) => {
            console.log(`button clicked!`);
            e.target.closest("li").remove();
        })
    })

    // function closeTask (array) {
    //     console.log(`we are at closeTask fuction`);
    //     for (let i = 0; i < array.length; i++) {
    //         console.log(`task ${i + 1}: ${array[i]}`);
    //     }
    // }
})


    // document.getElementById("closeTask").addEventListener("click", function () {
    //     this.closest("li").remove(); // Removes the entire <li> element
    // });

// document.querySelectorAll(".closeTask").forEach(taskToClose) => {
//     taskToClose.addEventListener("click", (e) => {
//         e.target.parentElement.remove();
//     })
// }

const tasks = document.querySelectorAll(".closeTask");
console.log(tasks);
// tasks.forEach(task) => {
//     task.addEventListener("click", (e) => {
//         console.log(`yay`)
//     })
// }