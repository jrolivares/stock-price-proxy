const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/stock", async (req, res) => {
  const ticker = req.query.ticker;
  if (!ticker) {
    return res.status(400).send("Missing ticker");
  }

  try {
    const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(ticker)}`;
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const data = await response.json();
    const price = data?.quoteResponse?.result?.[0]?.regularMarketPrice;

    if (price === undefined) {
      return res.status(404).send("Ticker not found");
    }

    res.send(price.toString());
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error fetching data");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Stock proxy running on port ${PORT}`);
});

