import fs from 'fs'
import getDir from '../lib/getDir.js'

const readFile = async (type:string) => {
  let dir = getDir(type) || '';
  console.log(type);
  return new Promise((resolve, reject) => {
    fs.readFile(dir, { encoding: "utf8", flag: "r" }, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

export default readFile;
