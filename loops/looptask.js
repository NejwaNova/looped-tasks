
    const tasks = [
      { name: "Do homework", status: "pending" },
      { name: "Wash dishes", status: "in-progress" },
      { name: "Read a book", status: "completed" },
      { name: "Exercise", status: "failed" }
    ];

    const messages = {
      "pending": " Waiting to be started",
      "in-progress": " In progress",
      "completed": " Completed successfully",
      "failed": " Failed"
    };

    const taskList = document.getElementById("taskList");

    for (let i = 0; i < tasks.length; i++) {
      let task = tasks[i];

      let li = document.createElement("li");
      li.textContent = task.name + " - " + (messages[task.status] || " Uknown");

      taskList.appendChild(li);
    }