import { access, constants, unlink } from "node:fs/promises";
const fsFailed = "FS operation failed";
const fileTxt = "src/fs/files/fileToRemove.txt";

const remove = async () => {
  let flagsRemove;
  try {
    try {
      await access(fileTxt, constants.F_OK);
      flagsRemove = true;
    } catch {
      flagsRemove = false;
    }
    if (!flagsRemove) throw new Error(fsFailed);

    await unlink(fileTxt);
  } catch (error) {
    console.log(error);
  }
};

await remove();
