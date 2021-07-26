const mysql = require('mysql2');
const pool = mysql.createPool({ 
    host :'b9kmsicmznn8orwgiv6s-mysql.services.clever-cloud.com',
    user : 'uwbfi3dkuoezd4ju' ,
    password: 'tUp1L3Sigqmx8s3FZDon',
    database: 'b9kmsicmznn8orwgiv6s',
    waitForConnections: true,
    connectionLimit: 4,
    queueLimit: 0
})


const fetch = async (query, parameter) => {
    const promisePool = pool.promise();

        const [row] = await promisePool.query(query, parameter);
        return row;
}

// const fetch = async (sql,inserts) => {
//     const promisePool = pool.promise();
//     try {
//         sql = promisePool.format(sql, inserts);
//         console.log({sql});
//         const [row] = await promisePool.query(sql);
//         return row;
//     } catch (error) {
//         console.log({dbError : error});
//     }
// }




module.exports = fetch;