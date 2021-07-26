const layout = require('./layout');

module.exports = ({user}) => {
    return layout({
        content : `
        <div class="pb-2 pt-4 pr-4 pl-4">
        <form action="/question/new" method="post">
          <div class="form-group">
            <label for="title">Question</label>
            <input
              class="form-control"
              id="title"
              name="title"
              placeholder="Enter your question here."
              required=""
            />
          </div>
          <div class="form-group">
            <label for="title">Details</label>
            <textarea class="form-control" id="body" name="body" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
      </div>
     `
    }, user)
}