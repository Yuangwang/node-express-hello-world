var express=require('express');
var app=express();

var routes=require('./routes/route.js');

app.set('view engine','ejs');
app.use(function(req, res, next) {
    res.set('Cache-Control', 'public, max-age=31536000');
    next();
});
app.use(express.static(__dirname + '/public'));

app.get('/',routes.home);

var port = process.env.PORT || 3000;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});
