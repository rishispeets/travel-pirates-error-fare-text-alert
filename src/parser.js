const htmlparser = require("htmlparser2");

module.exports = function parsePage(html) {
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
  parse.end();
}

function addLinkTo(links) {
  return (name, attribs) => {
    if (isTarget(name, attribs)) links.add(attribs.href);
  };
}

function isTarget(name, attribs) {
  return isCharA(name) && hasHref(attribs) && isErrorFare(attribs.href);
}

function isErrorFare(s) {
  return s.includes("error-fare");
}

function isCharA(s) {
  return s === "a";
}

function hasHref(obj) {
  return obj && obj.href;
}
