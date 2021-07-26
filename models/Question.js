const Base = require('./Base');
const query = require('../db/index');

class Question extends Base {
    constructor () {
        super('questions') // table name
    }
    async getAllQuestionData (id){
 
        const data = await query(`
        SELECT questions.q_id,
        questions.title,
        questions.body,
        questions.created_at,
        users.username FROM questions 
        INNER JOIN users ON 
        questions.userId = users.userId
        WHERE ?
        `, id);
        return data
    }
   
}

module.exports  = new Question()