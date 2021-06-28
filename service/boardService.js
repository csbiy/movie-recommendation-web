const boardDao = require('../dataAccess/boardDao')

function createBoard(board){
    return boardDao.createBoard(board);
}

module.exports = {
    createBoard,
};