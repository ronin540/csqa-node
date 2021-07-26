const express = require('express');
const cookieSession = require('cookie-session');

const signupRouter = require('./router/auth/auth');
const questionRouter = require('./router/question');

const User  = require('./models/User');

const app = express();

const port = precess.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cookieSession({
    keys : [
        'mySecetKeys'
    ]
}))
app.use(express.static('public'));
app.use(signupRouter);
app.use(questionRouter);

// this is working with promisePool.query(query, parameter)
// app.get('/', async (req, res) => {
//     const allData =  await User.getAll();
//    res.send(allData);
// })

// this is working with promisePool.query(query, parameter)
// app.get('/', async (req, res) => {
//         const email = 'sam@gmail.com'
//     const allData =  await User.getOneBY(['email' , 'users', {email}]);
//     console.log(allData);
//    res.send(allData);
   
    
// })

app.listen(port, () => {
    console.log(`App is listening to ${port}`);
})
