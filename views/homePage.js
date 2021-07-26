const layout = require("./layout");

module.exports = ({ user }, { result }) => {
  const render = result
    .map((res) => {
      return `<p>
    <a href="/question/${res.q_id}"
      >${res.title}
      <span class="text-secondary num-answers">(0 comments)</span></a
    >
  </p>`;
    })
    .join("");
  // const renderQuestions = result[0].map((res) => {
  //   console.log(res.title);
  // })
  return layout(
    {
      content: `<div class="pb-2 pt-4 pr-4 pl-4">
      ${render}
      </div>
      `,
    },
    user
  );
};
