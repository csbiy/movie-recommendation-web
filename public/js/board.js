const boardTitle = document.querySelector("#boardTitle");
const boardTitleWarning= document.querySelector("#boardTitleWarning");

boardTitle.addEventListener("keyup",function(){
    boardTitleWarningTxt = boardTitleWarning.lastElementChild;
    if(!(this.value == "" || this.value == undefined)){
        boardTitleWarning.classList.remove("text-danger");
        boardTitleWarning.classList.add("text-success");
        boardTitleWarningTxt.textContent = "게시판 제목이 입력되었습니다.";
    }else{
        boardTitleWarning.classList.remove("text-success");
        boardTitleWarning.classList.add("text-danger");
        boardTitleWarningTxt.textContent = "게시판 제목은 필수입니다.";
    }
})