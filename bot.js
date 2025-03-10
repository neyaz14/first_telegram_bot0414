require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

// .env ফাইল থেকে BOT_TOKEN লোড করা
const token = process.env.BOT_TOKEN;

// বট ইনিশিয়ালাইজ করা (Polling method)
const bot = new TelegramBot(token, { polling: true });

// যখন কেউ /start কমান্ড পাঠাবে
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Hello ${msg.chat.first_name}! 👋 আমি তোমার Telegram Bot`);
});

// যখন কেউ মেসেজ পাঠাবে
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  if (msg.text.toLowerCase() === "hello") {
    bot.sendMessage(chatId, "Hi there! 😊");
  }
});
