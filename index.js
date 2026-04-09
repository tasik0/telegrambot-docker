import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot('8184529006:AAEDF6ix07r-D82qU3OZITaPu4tlaXj-Xq0', { polling: true });

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'Bot working v2 🚀');
});
