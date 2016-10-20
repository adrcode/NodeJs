var fs = require('fs');

//创建一个可读流
var readerStream = fs.createReadStream('input.txt');

//创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

//管道读写操作
//读取input.txt文件内容， 并复制到文件output.txt
readerStream.pipe(writerStream);

console.log('Finshed to copy file.');