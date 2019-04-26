const axios = require("axios");

module.exports = async function getPage(url) {
  if (!url || typeof url !== "string") throw new Error("Provide valid url.");

  const res = await axios.get(url).catch(err => console.error(err));
  return res.data;
};
