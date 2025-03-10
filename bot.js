require("dotenv").config();
const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
const PORT = process.env.PORT || 9000
const app = express();
// https://api.telegram.org/bot${MY_TOKEN}/${method}
//  https://api.telegram.org/bot7929468904:AAFZuONyBz-92uhSnatUN_b6XTll50c6ydk/setWebhook?url=https://a67e-103-87-214-195.ngrok-free.app

// টোকেন লোড করা
const token = process.env.TELEGRAM_BOT_TOKEN;

// Polling mode চালু করা (Webhook ছাড়া বট কাজ করানোর জন্য)
// const bot = new TelegramBot(token, { polling: true });
app.use(express.json());
app.post('*',async (req,res) => {
    console.log(req.body)
    res.send('Post ...')
})

app.get('*',async (req,res) => {
    // console.log(req.body)
    res.send(' Get ...')
})

app.listen(PORT, function (err) {
    if(err) console.log(err);
    console.log("Server listening on port, " , PORT)
    console.log("🤖 বট চলছে...")
} )
