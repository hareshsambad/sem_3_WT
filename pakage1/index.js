const { dir } = require('console');
const path = require('path');

const pathA = path.dirname('/home/student/FolderA/FolderB/FileA.html');
console.log(pathA);

const pathB = path.basename('/home/student/FolderA/FolderB/FileA.html');
console.log(pathB);

const pathD = path.parse('/home/student/FolderA/FolderB/FileA.html');
console.log(pathD);

const pathE = path.join('/home/student/FolderA/FolderB/FileA.html','/haresh/sambad');
console.log("join - pathE : "+pathE);

const changeFormat = {
    root : '/,',
    dir : '/home/student/FolderA/FolderB',
    ext : '.html',
    name : 'FileA'
}
const pathF = path.format(changeFormat);
console.log("format - pathF : "+pathF);

const pathA1 = path.normalize('/home/student/FolderA/FolderB/FileA.html');
console.log("normalize - pathA1 : "+pathA1);

const pathA2 = path.relative('/home/FolderB/FileA.html','/home/student/FolderA/FolderB/FileB.html');
console.log("relative - pathA2 : "+pathA2);

const pathA3 = path.resolve('../../FileB.html');
console.log("resolve - pathA3 : "+pathA3);

const fs = require('fs');

fs.writeFileSync('textA.txt','This Is Our File : ')

const a = fs.readFileSync('textA.txt','utf-8')
console.log(a)

fs.renameSync('textA.txt','myfile.txt')


