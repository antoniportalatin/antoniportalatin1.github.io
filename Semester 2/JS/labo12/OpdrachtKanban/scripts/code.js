const setup = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let draggedTaskId = null;

    const saveToLocalStorage = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    const renderTasks = () => {
        document.querySelectorAll(".column").forEach(col => {
            const h3Text = col.querySelector("h3").innerText;

            while (col.firstChild) {
                col.removeChild(col.firstChild);
            }

            const newH3 = document.createElement("h3");
            newH3.textContent = h3Text;
            col.appendChild(newH3);
        });

        tasks.forEach(task => {
            const taskEl = document.createElement("div");
            taskEl.className = "task";
            taskEl.textContent = task.title;
            taskEl.id = task.id;
            taskEl.setAttribute("draggable", "true");

            taskEl.addEventListener("dragstart", handleDragStart);
            taskEl.addEventListener("dragend", handleDragEnd);

            const column = document.querySelector(`[data-status="${task.status}"]`);
            column.appendChild(taskEl);
        });
    };

    const handleDragStart = (e) => {
        draggedTaskId = e.target.id;
        e.target.classList.add("dragging");
    };

    const handleDragEnd = (e) => {
        e.target.classList.remove("dragging");
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Nodig om drop toe te staan
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const newStatus = e.currentTarget.dataset.status;
        const task = tasks.find(t => t.id === draggedTaskId);
        if (task) {
            task.status = newStatus;
            saveToLocalStorage();
            renderTasks();
        }
    };

    document.querySelectorAll(".column").forEach(column => {
        column.addEventListener("dragover", handleDragOver);
        column.addEventListener("drop", handleDrop);
    });

    const addTaskBtn = document.getElementById("addTaskBtn");
    const removeBtn = document.getElementById("removeBtn");
    const taskTitleInput = document.getElementById("taskTitle");
    const taskDescInput = document.getElementById("taskDesc");

    addTaskBtn.addEventListener("click", () => {
        const title = taskTitleInput.value.trim();
        const desc = taskDescInput.value.trim();
        if (!title) return;

        const newTask = {
            id: "task" + Date.now(),
            title: title + (desc ? ` - ${desc}` : ""),
            status: "todo"
        };
        tasks.push(newTask);
        saveToLocalStorage();
        renderTasks();

        taskTitleInput.value = "";
        taskDescInput.value = "";
    });

    removeBtn.addEventListener("click", () => {
        tasks = []; // Array leegmaken
        localStorage.removeItem("tasks"); // LocalStorage leegmaken
        renderTasks();
    });


    renderTasks();
};

window.addEventListener("load", setup);
