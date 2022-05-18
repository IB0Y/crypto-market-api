// NPM Packages
const axios = require('axios');

exports.getApiData = async (url) => {
  let response = null;
  return  new Promise(async (resolve, reject) => {
    try {
      response = await axios.get(url, {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.API_KEYS,
        },
      });
    } catch(ex) {
      response = null;
      reject(ex);
    }
    if (response) {
      // success
      const json = response.data;
      resolve(json);
    }
  });

}
