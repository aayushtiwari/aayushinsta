var express= require('express');

var app=express();
app.listen(process.env.PORT || 8888);
app.set('view engine','ejs');

app.use('/static',express.static(__dirname+'/client'));
app.get('*',function(req,res){
res.render('index.ejs');
});

console.log("server is runnning");
