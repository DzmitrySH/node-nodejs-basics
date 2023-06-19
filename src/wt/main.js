import { Worker } from "node:worker_threads";
import os from "node:os";

const pathWorker = "./src/wt/worker.js";

const performCalculations = async () => {
    const workerArray = [];
    const cpuCount = os.cpus().length;

    for (let cpu = 0;  cpu < cpuCount; cpu++) {
        const worker = new Worker(pathWorker, { workerData: { num: 10 + cpu }
        });

        const promise = new Promise((resolve) => {
            worker.once('message', (msg) => {
                resolve({ status: 'resolved', data: msg })
            });
            worker.once('error', () => {
                resolve({ status: 'error', data: null })
            });
        });
        workerArray.push(promise);
    }
    console.log("cores: "+ cpuCount);
    const result = await Promise.all(workerArray)
    console.log(result);
};

await performCalculations();