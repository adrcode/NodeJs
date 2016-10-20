var fs = require("fs");

var data = fs.readFileSync('books.json');
var books = JSON.parse(data);
books.books[books.books.length] = {author: 'Jimmy2', id: '10052', name: 'sport2', price: '322' };
console.log(books);

fs.writeFile('books.json', JSON.stringify(books), function(err){
	if(err) throw err;
	console.log("Export Data Success!");
}); 