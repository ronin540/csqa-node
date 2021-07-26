const Base = require('./Base');

class User extends Base {
    constructor(){
        super('users') // table name;
     }
}


module.exports = new User();