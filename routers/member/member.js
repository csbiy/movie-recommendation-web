let express = require("express");
let path = require("path");
const memberFormDto = require("../../model/memberFormDto");
const loginFormDto = require("../../model/loginFormDto");
const memberService = require("../../service/memberService");
const dateUtil = require("../../utilFunction/date");
let router = express.Router();
const baseURL = "/../../views/";


router.post("/",function(req,res){
    memberService.createMember(new memberFormDto(req.body))
        .then(rs=>{
            try{
                console.log(rs);
                res.sendFile(path.join(__dirname+"/../../public/html/index.html"));
            }catch(e){
                console.log("예외처리 로직 실행")
                res.send("wrong data");
            }
    })
})
router.get("/",function(req,res){
    res.render(path.join(__dirname+baseURL+"/register.html"))
})
router.get("/login",function(req,res){
    res.render(path.join(__dirname+baseURL+"/login.html"))
})
router.post("/login",function(req,res){
    memberService.login(new loginFormDto(req.body),res,req)
        .then((userName)=>{
            if(userName)
            {
                res.render(path.join(__dirname+baseURL+"/index.html"),{ "today": dateUtil.getCurrentDate(), "username" : userName }); 
            }else{
                res.render(path.join(__dirname+baseURL+"/login.html"));
            }
        })
        .catch((err) => {if(err) throw err })
        });

module.exports = router;