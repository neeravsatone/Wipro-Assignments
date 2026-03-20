import { handleCommand } from "./cli/commands.js";

const args = process.argv.slice(2);
handleCommand(args);