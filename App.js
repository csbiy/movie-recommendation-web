// 
let express = require("express");
const mysql = require('mysql')
const nonjucks = require('nunjucks');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const members = require("./routers/member/member");
const boards = require("./routers/board/board");
const dbSetUp = require("./conf/db")
const serverPort = 8999;
// 
const app =  express();
app.set("port",process.env.PORT || 3002);
app.use(cookieParser('crypto'));
app.use(session({
    resave:false,
    saveUninitialized : false,
    secret: "crypto",
    cookie: {
        httpOnly:true,
        secure:false,
    },
}))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','html');
nonjucks.configure('views',{
    express:app,
    watch:true,
});
app.use(express.static(__dirname+"/public"));
app.use("/members",members);
app.use("/boards",boards);

app.listen(serverPort,()=>{
    console.log("Server running on " + serverPort );
});
app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/html/index.html");
})
