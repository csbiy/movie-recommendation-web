const express = require('express');
const router = express.Router();
const path = require('path');
let boardFormDto = require('../../model/BoardFormDto');
const boardService = require("../../service/boardService");
baseURL = "/../../views";


router.get("/",(req,res)=>{
    console.log("board request");
    res.render(path.join("board.html"));
})

router.get("/boardForm",(req,res)=>{
    res.render(path.join("boardForm.html"));
})

router.post("/boardForm",(req,res)=>{
    return boardService.createBoard(new boardFormDto(req.body));
})
module.exports = router;