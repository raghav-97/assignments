let todos = []; // in memory space

let idCount = 1;

export async function getAllTodo(req, res, next) {
  res.json(todos);
}

export async function createTodo(req, res, next) {
  const task = {
    id: idCount++,
    title: req.body.title,
    description: req.body.description,
  };

  if (task.title == "" || task.description == "") {
    res.send({
      message: "Please enter a task",
    });
  }

  todos.push(task);
  res.send({
    message: "Task Created",
  });
}

export async function updateTodo(req, res, next) {
  const taskId = req.params.id;
  const newTask = req.body;

  try {
    if (newTask.title == "" || newTask.description == "") {
      res.send({
        message: "Please enter a task",
      });
    } else {
      const taskToEdit = todos.find((task) => task.id == taskId);
      taskToEdit.title = newTask.title;
      taskToEdit.description = newTask.description;
      res.send({
        message: "Task Updated",
      });
    }
  } catch (error) {
    res.send({
      error: "Failed to update",
    });
  }
}

export async function deleteTodo(req, res, next) {}

export async function deleteTodoById(req, res, next) {
  const taskId = req.params.id;
  try {
    const taskIndex = todos.findIndex((task) => task.id == taskId);
    if (taskIndex !== -1) {
      todos.splice(taskIndex, 1);
      res.send({
        message: "Task Deleted",
      });
    } else {
      res.send({
        message: "Not found to delete",
      });
    }
  } catch (error) {
    res.send({
      message: "Task not found",
    });
  }
}

export async function searchTodo(req, res, next) {}
