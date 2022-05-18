// Modules
const { getApiData } = require('../utils/api');

// controllers

/***
* Function => get
*
*/
exports.bySymbol = async (req, res) => {
  const { symbol } = req.params;

  if (!symbol) { 
    res
        .status(400)
        .json({
          success: false,
          message: "No symbol supplied"
        });
  }

  let url = `https://sandbox-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${symbol}`;

  try {
    const { data} = await getApiData(url);
    res.
        status(200)
        .json({
          success: true,
          data
        });
  } catch (e) {
    res
        .status(400)
        .json({
          success: false,
          error: e
        });
  }
}
