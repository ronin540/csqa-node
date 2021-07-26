const Base = require('./Base');
const query = require('../db/index');

class Voting_info extends Base {
    constructor () {
        super('voting_info') // table name
    }

    async countUpvote (parent_id){
        const data = await query(`SELECT COUNT(action) as upvote FROM ?? WHERE action = "upvote" AND parent_id = ${parent_id}`, this.table);
        
        return data;
    }
}

module.exports = new Voting_info();