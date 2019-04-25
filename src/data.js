const axios = require("axios");

module.exports = async function getPage(url) {
  const res = await axios.get(url).catch(err => console.error(err));
  return res.data;
};
