const Base  = require('./Base');
const query = require('../db/index');

class Answer extends Base{
    constructor(){
        super('answers') // table name
    }
    async getAnswerAllData (id) {
        const data = await query(`SELECT 
        answers.a_id,
        answers.text, 
        answers.created_at, 
        users.username 
        FROM answers 
        INNER JOIN users ON 
        answers.userId = users.userId 
        WHERE ?`, id)
        return data;
    } 
}

module.exports = new Answer();