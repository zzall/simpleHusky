console.log(__dirname)

const fs = require('fs')
const fsPromise = require('fs/promises')
const path = require('path')
const packageJSON = require('./package.json')
const child_process = require('child_process')

const content = fs.readFileSync(path.resolve(__dirname, 'package.json'), {
  encoding: 'utf8'
})

const preCommitContent = `
#! /usr/bin/env node

const child_process = require('child_process')

console.log('我还是pre-commit')

child_process.exec('npm run test2',(err)=>{
  if(err){
    return console.log('err',err)
  }
  console.log('hhhh')
})
`
console.log('content',  packageJSON.zzzgithooks['pre-commit'], process.cwd(),path.resolve(__dirname, 'pre-commit'));

const nodePreCommitContent = `
#! /usr/bin/env node

${packageJSON.zzzgithooks['pre-commit']}

`

child_process.exec('npm run test2', (err) => {
  if (err) {
    return console.log('err', err)
  }
  console.log('hhhh');

  fsPromise.mkdir(path.resolve(__dirname, '.test2')).then(res => {
    console.log('test2-res', res);
    fsPromise.writeFile(path.resolve(__dirname, '.test2','pre-commit'), nodePreCommitContent).then(res => {
      console.log('pre-commit-res', res);
    }).catch(err => {
      console.error('pre-commit-err', err);
    });
  }).catch(err => {
    console.error('test2-err', err);
  });

})


