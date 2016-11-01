var express=require("exprss");
va app=new  express();
var path=require("path");
   
   
   require("./token.js")(app);
   
var saticpath=path.join(_dirname,"../static");
app.use(express.static(saticpath));

app.listen(3000,function(){
	console.log("open http://127.0.0.1:3000");
})
