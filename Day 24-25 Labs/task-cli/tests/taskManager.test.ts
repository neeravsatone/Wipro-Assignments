import { TaskManager } from "../src/services/TaskManager";

test("should create a task", () => {
  const manager = new TaskManager();
  manager.createTask("Build API");

  expect(manager.getTasks().length).toBe(1);
});

test("should complete a task", () => {
  const manager = new TaskManager();
  manager.createTask("Build API");
  manager.completeTask(1);

  expect(manager.getTasks()[0].status).toBe("Completed");
});

test("should assign task", () => {
  const manager = new TaskManager();
  const user = manager.createUser("Rahul", "email");
  const task = manager.createTask("Build API");

  manager.assignTask(task.id, user.id);

  expect(manager.getTasks()[0].assignedTo).toBe(user.id);
});