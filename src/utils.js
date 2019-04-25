module.exports.isTargetLink = function isTargetLink(name, attribs) {
  return isCharA(name) && hasHref(attribs) && isErrorFare(attribs.href);
};

function isErrorFare(s) {
  return s.includes("error-fare");
}

function isCharA(s) {
  return s === "a";
}

function hasHref(obj) {
  return obj && obj.href;
}
