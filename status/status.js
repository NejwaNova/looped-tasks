function showMessage(status) {
  if (status === "pending") {
    console.log("Task is waiting to be started");
  } else if (status === "in-progress") {
    console.log("Task is currently in progress");
  } else if (status === "completed") {
    console.log("Task completed successfully");
  } else if (status === "failed") {
    console.log("Task failed");
  } else {
    console.log("Unknown task status");
  }
}

showMessage("in-progress");
