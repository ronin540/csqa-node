const Base = require('./Base');
const query = require('../db/index');

class Rating extends Base {
    constructor() {
        super('voting_info');
    }
    async checkUpvote (data) {
        const whereCondition = `type = "${data.type}" AND action = "${data.action}" AND parent_id = "${data.parent_id}" AND user_id = "${data.user_id}"`
       
        const dataCount = await query(`SELECT COUNT(*) as upvoteCount FROM voting_info WHERE ${whereCondition}`);

        if(dataCount[0].upvoteCount > 0){
            await query(`DELETE FROM voting_info WHERE ${whereCondition}`);
            return {query : "delete"}
        } else {
            await this.create(data);
            return {query : "create"}
        }
    }
}


module.exports = new Rating();