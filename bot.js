require("dotenv").config();
const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
const { handler } = require("./controller/index");
const PORT = process.env.PORT || 9000
const app = express();


// টোকেন লোড করা
const token = process.env.TELEGRAM_BOT_TOKEN;

// Polling mode চালু করা (Webhook ছাড়া বট কাজ করানোর জন্য)
// const bot = new TelegramBot(token, { polling: true });
app.use(express.json());


app.post('*',async (req,res) => {
    console.log(req.body)
    res.send(await handler(req),"Sorry from the developer, he is working on me to make me more good, right now I only can reply what you say me")
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
