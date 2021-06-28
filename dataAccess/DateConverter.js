var toMySQLDateTime = function (date) {
    return date.toISOString().slice(0, 19).replace("T", " ");
};
module.exports = {
    toMySQLDateTime: toMySQLDateTime
};
