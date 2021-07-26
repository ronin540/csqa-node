const layout = require('./layout')

const checkLoggedIn = (data, req) => {
    if(!req.session.user){
        return `<p><a href="/accounts/login">Log in to answer this question</a></p>`
    } else {
        return `<form action="/question/${data.q_data[0].q_id}/answer" method="post">
        <div class="form-group">
          <textarea
            id="text"
            name="text"
            rows="7"
            placeholder="Type your answer here."
            required="required"
            class="form-control"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </form>
      `
    }
}
const renderAnswer = (a_data, req) => {
  // check if user logged in for invoke upvote

  const render = a_data.map((answer) => {
    return `<div>
    <hr class="answer-hr" />
    <div class="answer-block">
      <div class="answer-text">${answer.text}</div>
      <div class="text-secondary answer-sub">
        <span>${answer.username}</span> <span class="separator">|</span>
        <span>22 days ago</span> <span class="separator">|</span>
        <span
          ><a href="javascript:void(0)" onclick="answerUpvote(${answer.a_id}, this)" class="text-secondary">upvote</a>
          <span class="separator">|</span>
          <a href="javascript:void(0)" class="text-secondary">downvote</a>
          <span class="separator">|</span></span
        >
        <span>0 points</span>
      </div>
    </div>
  </div>
  <div>`
  }).join('');
  return render;
}
module.exports = (data, req) => {
    const user = req.session.user;
    return layout({
        content : `
        <div class="pb-2 pt-4 pr-4 pl-4">
        <div id="question">
          <h5>${data.q_data[0].title}</h5>
          <div style="margin-bottom: 5px; font-size: 17px;">
            ${data.q_data[0].body}
          </div>
          <div class="text-secondary" style="font-size: 14px">
            posted by ${data.q_data[0].username}<span class="separator">|</span>22 days ago
      
            <span class="separator">|</span>
            <a href="javascript:void(0)" class="text-secondary">upvote</a>
            <span class="separator">|</span>
            <a href="javascript:void(0)" class="text-secondary">downvote</a>
            <span class="separator">|</span> <span>0 points</span>
          </div>
          ${renderAnswer(data.a_data, req)}
          <!----><!---->
          <hr class="answer-hr" />
          <!---->
          
          ${checkLoggedIn(data,req)};
        </div>
      </div>
        `
    }, user)
}