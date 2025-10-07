const task = {
    name: "Do homework",
    status: "pending"
  };
  
  if (task.status === "completed") {
    console.log("Task is done! Great job!");
  } else if (task.status === "in-progress") {
    console.log("Task is in progress. Keep going!");
  } else if (task.status === "pending") {
    console.log("Task is pending. Start soon!");
  } else {
    console.log("Unknown task status.");
  }