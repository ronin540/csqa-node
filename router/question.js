const express = require('express');

const Voting_info = require('../models/Voting_info');
const Rating = require('../models/Rating');
const Answer = require('../models/Answer');
const Question  = require('../models/Question');
const { checkAuthOff } = require('./auth/middleware'); 
const newQuestionTemp = require('../views/newQuestion');
const questionTemp = require('../views/question');
const homePageTemplate = require('../views/homePage');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const result = await Question.getAll();
        res.send(homePageTemplate({user : req.session.user}, {result}));
    } catch(err){
        res.send(console.log(err))
    }
    
})

router.get('/question/new', checkAuthOff, ( req, res) => {
    res.send(newQuestionTemp({user : req.session.user}));
})

router.post('/answer/upvote', async (req,res) => {
    if(!req.session.user){
       return res.send({loggedIn : false})
    }
    
    const upvoteData = {
        type : 'ans',
        action : 'upvote',
        parent_id : req.body.id,
        user_id : req.session.user.userId
    }
    const checkUpvote = await Rating.checkUpvote(upvoteData);
    
   res.send(checkUpvote);
})

router.post('/question/new', async(req,res) => {
    req.body.userId = req.session.user.userId;
    const data = await Question.create(req.body)
    res.redirect('/')
})

router.get('/question/:id', async(req, res) => {
    try{
    const params = {q_id : req.params.id}
    const q_data = await Question.getAllQuestionData(params);
    const a_data = await Answer.getAnswerAllData(params);
    
        // parent_id = a_data[].a_id;
     
        // let data = await Voting_info.getOneBy(parent_id);
        // res.send(data);
    
    // res.send(votingData);
    q_data[0].q_id = req.params.id;
    res.send(questionTemp({q_data, a_data} ,req));
    
    } catch (err) {
        console.log(err);
       res.send(`something went wrong`)
    }
    
})

router.post('/question/:id/answer', async (req, res) => {
    try{
        const answer = {
            text : req.body.text,
            q_id : req.params.id,
            userId : req.session.user.userId
        }
        await Answer.create(answer);
        res.redirect(`/question/${req.params.id}`)
    } catch (e) {
        res.send(`something went wrong`);
    }
   
})
module.exports = router;