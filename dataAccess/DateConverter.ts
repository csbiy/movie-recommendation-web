const toMySQLDateTime :any = function( date : Date) :string{
    return date.toISOString().slice(0,19).replace("T"," ");
}

module.exports= {
    toMySQLDateTime,
}