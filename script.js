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
                <span class="material-symbols-outlined">close</span>
            </div>
        </div>
    </li>`

    document.querySelector("#todoInput").value = "";
    document.querySelector("#taskDescription").value = "";

    const myModal = document.querySelector("#closeModal");
    myModal.click();

})

