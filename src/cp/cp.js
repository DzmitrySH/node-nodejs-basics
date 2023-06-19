import { fork } from "node:child_process";

const scriptPath = "src/cp/files/script.js";

const spawnChildProcess = async (args) => {
    const children = fork(scriptPath, args, { silent: true });
    
  process.stdin.pipe(children.stdin);
  children.stdout.pipe(process.stdout)

  children.stdout.on('data', chunk => {
     process.stdout.write(`Received from child process: ${chunk}`)
  });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
