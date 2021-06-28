
BoardFormDto = function(data){
    this.title = data.title;
    this.content = data.content;
}

BoardFormDto.prototype.getTitle = function(){
    return this.title;
}
BoardFormDto.prototype.setTitle = function(title){
    this.title = title;
}
BoardFormDto.prototype.getContent = function(){
    return this.content;
}
BoardFormDto.prototype.setContent = function(content){
    this.content = content;
}

module.exports = BoardFormDto;