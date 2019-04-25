const parsePage = require("./src/parser");
const getPage = require("./src/data");
const URLS = require("./src/urls");

module.exports.hello = async event => {
  const html = await getPage(URLS.NL);
  const links = parsePage(html);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: links,
        input: event
      },
      null,
      2
    )
  };
};
