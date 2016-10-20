/*
*在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。一个 Buffer 类似于一个整数数组
*/


//创建buffer实例
var buffer1 = new Buffer(256);

var buffer2 = new Buffer([10, 20, 30,40, 50]);

var buffer3 = new Buffer("www.baidu.com", "utf8");


//写入缓冲区
var len = buffer1.write("www.baidu.com");
console.log("写入字节数：" + len);


//从缓冲区读取数据
buf = new Buffer(26);
for(var i = 0; i< 26; i++) {
	buf[i] = i + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString(undefined, 0, 5));
