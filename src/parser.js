const htmlparser = require("htmlparser2");
const { isTargetLink } = require("./utils");

module.exports = function parsePage(html) {
  if (!html || typeof html !== "string") throw new Error("Provide valid html.");
  const links = new Set();

  const parser = createParser(addLinkTo(links));
  parse(parser, html);

  return Array.from(links);
};

function createParser(onOpenTagHandler) {
  return new htmlparser.Parser(
    { onopentag: onOpenTagHandler },
    { decodeEntities: true }
  );
}

function parse(parser, html) {
  parser.write(html);
  parser.end();
}

function addLinkTo(links) {
  return (name, attribs) => {
    if (isTargetLink(name, attribs)) links.add(attribs.href);
  };
}
