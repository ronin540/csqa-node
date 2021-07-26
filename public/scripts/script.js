function answerUpvote(id, upvote){

    axios.post('/answer/upvote', { id })
      .then(function (response) {
        if(response.data.loggedIn === false){
         return alert(`Please login `)
        }
        if(response.data.query === `create`){
        upvote.classList.add("upvoteActive");
        upvote.classList.remove("text-secondary");
        }
        if(response.data.query === `delete`){
          upvote.classList.add("text-secondary");
        upvote.classList.remove("upvoteActive");
        }
      })
      .catch(function (error) {
        console.log({error});
      });
}

