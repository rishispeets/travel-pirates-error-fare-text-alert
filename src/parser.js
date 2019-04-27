const htmlparser = require("htmlparser2");
const { isErrorFareLink } = require("./utils");

module.exports = function parsePage(html) {
  if (!html || typeof html !== "string") throw new Error("Provide valid html.");

  const errorFareLinks = new Set();
  findErrorFareLinks(errorFareLinks, html);
  return Array.from(errorFareLinks);
};

function findErrorFareLinks(links, html) {
  const parser = createParser(addLinkTo(links));
  parseHtml(parser, html);
}

function createParser(onOpenTagHandler) {
  return new htmlparser.Parser(
    { onopentag: onOpenTagHandler },
    { decodeEntities: true }
  );
}

function parseHtml(parser, html) {
  parser.write(html);
  parser.end();
}

function addLinkTo(links) {
  return (name, attribs) => {
    if (isErrorFareLink(name, attribs)) links.add(attribs.href);
  };
}
