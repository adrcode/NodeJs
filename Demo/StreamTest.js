/*Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
Stream 有四种流类型:
1. Readable - 可读操作;
2. Writable - 可写操作;
3. Duplex - 可读可写操作;
4. Transform - 操作被写入数据，然后读出结果;

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
1. data - 当有数据可读时触发。
2. end - 没有更多的数据可读时触发。
3. error - 在接收和写入过程中发生错误时触发。
4. finish - 所有数据已被写入到底层系统时触发。
*/



//################ 从流中读取数据 #################
var fs = require('fs');
var data = '';

//创建可读流
var readerStream = fs.createReadStream('input.txt');

//设置编码为 utf8
readerStream.setEncoding('UTF-8');

//处理流事件  --> data, end, error
readerStream.on('data', function(chunk) {
	data += chunk;
});

readerStream.on('end', function() {
	console.log(data);
});

readerStream.on('error', function(err){
	console.log(err.stack);
});


//################# 写入流 #####################
var data2 = "http://www.baidu.com";

//创建一个可以写入的流，写入到文件 output.txt中
var writerStream = fs.createWriteStream('output.txt');

//使用UTF8编码写入数据
writerStream.write(data2, 'UTF8');

//标记文件末尾
writerStream.end();

//处理流事件 --> data, end, error
writerStream.on('finish', function(){
	console.log('Finshed to output.');
});

writerStream.on('error', function(err){
	console.log(err.stack);
});