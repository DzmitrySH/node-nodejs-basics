import { access, constants, rename as renameFile } from "node:fs/promises";
const fsFailed = "FS operation failed";
const fileTxt = "src/fs/files/wrongFilename.txt";
const fileMd = "src/fs/files/properFilename.md";

const rename = async () => {
  let flagsFileMd;
  try {
    try {
      await access(fileMd, constants.F_OK);
      flagsFileMd = true;
    } catch (error) {
      flagsFileMd = false;
    }
    if (flagsFileMd) throw new Error(fsFailed);

    await renameFile(fileTxt, fileMd);
  } catch (error) {
    console.log(error);
    if (error.code === "ENOENT") {
      throw new Error(fsFailed);
    }
  }
};

await rename();
