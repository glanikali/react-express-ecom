import fs from "fs";
import getDir from "../lib/getDir";

const writeFile = async (content: string, type: string) => {
  let dir = getDir(type);
  return new Promise((resolve, reject) => {
    fs.writeFile(dir, content, (err) => {
      if (err) reject(err);
      resolve("written");
    });
  });
};

export default writeFile;
