
const connectionPool = require("../conf/db");


getTransaction = function(func){
        return connectionPool.getConnection(function(err,conn){
            if(err) reject(err);
            conn.beginTransaction();
            // do something 
            func(conn)
                .then((rs)=>{
                    conn.commit();
                    return rs
                })
                .catch((err)=>{
                    if(err) conn.rollback();
                })
            conn.release();
        });
}

module.exports = getTransaction;