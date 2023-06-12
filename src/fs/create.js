import { writeFile } from 'node:fs/promises';

const pathDir =  "src/fs/files/fresh.txt";
const fileContent = "I am fresh and young";
const fsFailed = "FS operation failed";

const create = async () => {
  try {
    await writeFile(pathDir, fileContent, { flag: "wx" });
  } catch (error) {
    console.error(error);
    if (error.code === "EEXIST") {
        throw new Error(fsFailed);
      }
  }
};

await create();