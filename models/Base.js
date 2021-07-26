const query = require('../db/index');

module.exports = class Base {

    constructor(table) {
        this.table = table;
    }

    // async getOneBY (filters) {
    //     const coloumn =  Object.keys(filters)[0];
    //     const parameters = [coloumn, this.table, filters];
    //     const sqlQuery = `SELECT ?? FROM ?? WHERE ?`;
    //     const data = await query(sqlQuery, parameters);
    //     return data;
    // }

    async getOneBy(filters) {
        const parameters = [this.table, filters];
        const sqlQuery = `SELECT * FROM ?? WHERE ?`
        const data = await query(sqlQuery, parameters);
        return data;
    }

    async create (attributes) {
       const paras = [this.table, attributes]
        const data = await query(`INSERT INTO ?? SET ?`, paras);
        return data;
    }
    
    async getAll(){
        const data = await query(`SELECT * FROM ?? ORDER BY q_id DESC LIMIT 10 `, this.table);
        return data;
    }

} 