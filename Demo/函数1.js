/*
Node.js中函数的使用与Javascript类似
*/

function say(word) {
	console.log(word);
};


function execute(someFunction, value) {
	say(value);
};

execute(say, "Hello world!");

//匿名函数
execute(function(word) {console.log(world);}, "Function without name!");
