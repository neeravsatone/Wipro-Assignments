export class TaskManager {
    users = [];
    tasks = [];
    // Create User
    createUser(name, email) {
        const user = {
            id: this.users.length + 1,
            name,
            email
        };
        this.users.push(user);
        return user;
    }
    // Create Task
    createTask(title) {
        const task = {
            id: this.tasks.length + 1,
            title,
            status: "Pending"
        };
        this.tasks.push(task);
        return task;
    }
    // Assign Task
    assignTask(taskId, userId) {
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
    completeTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.status = "Completed";
        }
        return task;
    }
}
//# sourceMappingURL=TaskManager.js.map