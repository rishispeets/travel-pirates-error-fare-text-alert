module.exports.isErrorFareLink = function isErrorFareLink(name, attribs) {
  return isCharA(name) && hasHref(attribs) && containsErrorFare(attribs.href);
};

function containsErrorFare(s) {
  return s.includes("error-fare");
}

function isCharA(s) {
  return s === "a";
}

function hasHref(obj) {
  return obj && obj.href;
}
