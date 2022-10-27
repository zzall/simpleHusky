const path = require("path");
const fs = require("fs");
const child_process = require("child_process");
const { exec } = child_process;

const [, , cmd, ...args] = process.argv;
const ln = args.length;
const [hookPath, hookContent] = args;
console.log("cmd", cmd);
console.log("hookPath, hookContent", hookPath, hookContent);

const hooksPath = path.resolve(__dirname, "../.zzz");

const createHookFile = (filepath) => {
  filepath = filepath || path.resolve(hooksPath, hookPath);
  const template = `
  #!/usr/bin/env sh
  ${hookContent}
  `;
  fs.writeFile(filepath, template, (err) => {
    if (err) throw err;
    console.log("文件创建成功");
    exec(`chmod u+x ${filepath}`);
  });
};
if (cmd === "add") {
  createHookFile();
}
