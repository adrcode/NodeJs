var express = require('express');
var app = express();
app.use("/static", express.static("./"));

app.get('/api', function(req, res){
    res.json({
        user: {
            name: "Mark"    
        }    
    });
});

// app.post(...)
// app.put(...)
// app.delete(...)

app.listen(3000);



