/*
一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
Node.js 提供了exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
*/

var test = require('./module1');
test.mouduleTest();


var Hello = require('./module2');
hello = new Hello();
hello.setName("Jessica");
hello.sayHello();