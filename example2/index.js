const path = require("path");
const fs = require("fs");
const child_process = require("child_process");

const exec = child_process.exec;

const hooksPath = path.resolve(__dirname, ".zzz");

// const createHookFile = (filepath) => {
//   filepath = filepath || path.resolve(hooksPath, "pre-commit");
//   const template = `
//   #!/usr/bin/env sh
//   npm test
//   `;
//   fs.writeFile(filepath, template, (err) => {
//     if (err) throw err;
//     console.log("文件创建成功");
//     exec(`chmod u+x ${filepath}`);
//   });
// };

if (!fs.existsSync(hooksPath)) {
  fs.mkdir(hooksPath, { recursive: true }, (err) => {
    if (err) throw err;
    // createHookFile();
    exec(`git config core.hooksPath ${hooksPath}`);
  });
} else {
  // createHookFile();
  exec(`git config core.hooksPath ${hooksPath}`);
}
