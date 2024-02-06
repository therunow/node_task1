let express = require('express');

let app = express();

app.get('/',function(req,res){
    res.send("<h2>Привет not an Express!</h2>")
});

app.listen(3000);