import { IUser } from "../models/IUser.js";
import { ITask } from "../models/ITask.js";

export class TaskManager {
  private users: IUser[] = [];
  private tasks: ITask[] = [];

  // Create User
  createUser(name: string, email: string) {
    const user: IUser = {
      id: this.users.length + 1,
      name,
      email
    };
    this.users.push(user);
    return user;
  }

  // Create Task
  createTask(title: string) {
    const task: ITask = {
      id: this.tasks.length + 1,
      title,
      status: "Pending"
    };
    this.tasks.push(task);
    return task;
  }

  // Assign Task
  assignTask(taskId: number, userId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.assignedTo = userId;
    }
    return task;
  }

  // Get Tasks
  getTasks() {
    return this.tasks;
  }

  // Complete Task
  completeTask(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = "Completed";
    }
    return task;
  }
}