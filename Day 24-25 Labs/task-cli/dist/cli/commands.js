import { TaskManager } from "../services/TaskManager.js";
const manager = new TaskManager();
export function handleCommand(args) {
    const command = args[0];
    switch (command) {
        case "create-user":
            const user = manager.createUser(args[1], args[2]);
            console.log(`User created: ${user.name}`);
            break;
        case "create-task":
            const task = manager.createTask(args[1]);
            console.log(`Task created: ${task.title}`);
            break;
        case "assign-task":
            manager.assignTask(Number(args[1]), Number(args[2]));
            console.log("Task assigned");
            break;
        case "list-tasks":
            console.log(manager.getTasks());
            break;
        case "complete-task":
            manager.completeTask(Number(args[1]));
            console.log("Task marked as completed");
            break;
        default:
            console.log("Invalid command");
    }
}
//# sourceMappingURL=commands.js.map