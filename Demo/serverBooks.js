var fs = require("fs");

var express = require('express');
var app = express();
app.use("/static", express.static("./"));

var fileData = fs.readFileSync('books.json');
var books = JSON.parse(fileData);


app.get('/books', function(req, res){
    res.send(books);
    res.end();
});

app.get('/books/:id', function(req, res){
	fs.readFile('books.json', function(err, data){
		if(err) throw err;
		data = JSON.parse(data);
		// res.send(JSON.stringify(data));
		var bookReturn = "";
		var len = data.books.length;
		for(i = 0; i < len; i++) {
			var book = data.books[i];
			if(book.id == req.params.id) {
				bookReturn = book;
				
			}
		}

		if(bookReturn == "") {
			res.send(404, 'Could not find the book!');
		} else {
			res.send(bookReturn);	
		}
		
		
	});

});

// app.post(...) Add a book
app.post('/books', function(req, res) {
	if(req.body) {
		res.send("test") 
		//res.send({"books":[{"id": "111111", "name": req.body.author, "name": req.body.name, "price": req.body.price}]});
	} else {
        var body = '', jsonStr;
        req.on('data', function (chunk) {
            body += chunk; 
        });    
        req.on('end', function () {
            try {
                jsonStr = JSON.parse(body);
            } catch (err) {
                jsonStr = null;
            }

            if(jsonStr) {
            	var id = Math.ceil((Math.random()*100) + 1000).toString()
            	res.send({"id": id, "author": jsonStr.author, "name": jsonStr.name, "price":jsonStr.price});
            	var len = books.books.length;

            	books.books[len] = {author: jsonStr.author, id: id, name: jsonStr.name, price: jsonStr.price };
            	fs.writeFile('books.json', JSON.stringify(books), function(err){
					if(err) throw err;
					console.log("Export Data Success!");
				}); 

            } else {
            	res.send({"status":"error"});
            }

        });
    }    
});    


// app.put(...)
app.put('/books/:id', function(req, res) {

	if(req.body) {
		res.send("test") 
		//res.send({"books":[{"id": "111111", "name": req.body.author, "name": req.body.name, "price": req.body.price}]});
	} else {
        var body = '', jsonStr;
        req.on('data', function (chunk) {   //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
            body += chunk; 
        }); 


        var found = false;
        req.on('end', function () {     //在end事件触发。
            try {
                jsonStr = JSON.parse(body);
            } catch (err) {
                jsonStr = null;
            }

			var bookId = req.params.id;

            if(jsonStr) {
            	fs.readFile('books.json', function(err, data){
					if(err) throw err;
					data = JSON.parse(data);
					var len = data.books.length;
					for(i = 0; i < len; i++) {
						var book = data.books[i];
						console.log(book.id == bookId);
						if(book.id == bookId) {
							found = true;
							break;
						}
					}
									
				});

            	console.log(bookId.toString());
            	console.log(found);
				if(found) {
					res.send(404, 'Could not find the book!');
				} else {
					var booksUpdated = {"id": bookId, "author": jsonStr.author, "name": jsonStr.name, "price":jsonStr.price};
					var len = books.books.length;
					for(i = 0; i < len; i++) {
						if(books.books[i].id == bookId) {
							books.books[i] = {"id": bookId, "author": jsonStr.author, "name": jsonStr.name, "price":jsonStr.price};
							fs.writeFile('books.json', JSON.stringify(books), function(err){
								if(err) throw err;
								console.log("Export Data Success!");
							});
							break; 	
						}

					}
								

					res.send(booksUpdated);
				}

        	}
    	});
    }    
});  

app.delete('/books/:id', function(req, res){
	var deletedBookId = req.params.id;
	fs.readFile('books.json', function(err, data){
		data = JSON.parse(data);
		for(i = 0, len = data.books.length; i < len; i++) {
			if(data.books[i].id == deletedBookId) {
				data.books.splice(i, 1);
				fs.writeFile('books.json', JSON.stringify(data), function(err){
					if(err) throw err;
					console.log("Export Data Success!");
					
				});	
				res.send('Delete book success!');
				break;
			}
		}

	});

});

app.listen(3000);

