
const TelegramBot = require('node-telegram-bot-api');
const token = "801938505:AAHjsZ7NeQuz8IiPe_c79EFn2PQaJVpnxMI";
const rs = require("request");
var CoinMarketCap = require("node-coinmarketcap");
var coinmarketcap = new CoinMarketCap();
// If you want to check a single coin, use get() (You need to supply the coinmarketcap id of the cryptocurrency, not the symbol)
// If you want to use symbols instead of id, use multi.
const axios = require('axios');

const bot = new TelegramBot(token, {polling: true});
bot.on('message', (msg) => {
  coinmarketcap.multi(coins => {
   let btcs =coins.get("BTC").price_usd// Prints price of BTC in USD
    let eths= coins.get("ETH").price_usd// Print price of ETH in USD
    // Prints the price in USD of BTC at the moment.
    var eth ="eth"
    let btc="btc"
    if (msg.text.toString().toLowerCase().indexOf(eth) === 0) {
    bot.sendMessage(msg.chat.id,`Gía ETH hiện tại là : ` + eths + "USDT",{parse_mode:"Markdown"});
    }
    if (msg.text.toString().toLowerCase().indexOf(btc) === 0) {
      bot.sendMessage(msg.chat.id,`Gía BTC hiện tại là : ` + btcs+ "USDT",{parse_mode:"Markdown"});
      }

  });
  // goi trau ra
  axios({
    method: "GET",
    url:
      "https://api.ethermine.org/miner/:0x78C56E18906f21c8009FcbA662E8f2C0e1ed196c/workers"
  })
    .then(res => {
      var trau ="trau"
      if (msg.text.toString().toLowerCase().indexOf(trau) === 0) {
        bot.sendMessage(msg.chat.id,`Tổng trâu đang khai thác là  : ` + res.data.data.length + "con",{parse_mode:"Markdown"});
        }
   
    })
    .catch(err => {
      console.log(err);
    });
  
});;
   
