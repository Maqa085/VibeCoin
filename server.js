const TelegramBot = require('node-telegram-bot-api');

// Sizin Bot Tokeniniz
const TOKEN = '8864140741:AAH5kcCbVilprOCWZy2WF9-GZMKFXIhkiaw'; 
// Mini tətbiqinizin yükləndiyi (host olunduğu) url linki
const MINI_APP_URL = 'https://maqa085.github.io/VibeCoin'; 

const bot = new TelegramBot(TOKEN, { polling: true });

console.log("Bot uğurla işə salındı...");

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name;

    const welcomeMessage = `Salam *${firstName}*! 👋\n\nPremium qazanc tətbiqimizə xoş gəlmisiniz. Aşağıdakı düyməyə klikləyərək Mini App-ı aça bilərsiniz!`;

    bot.sendMessage(chatId, welcomeMessage, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "🚀 Mini App-ı Aç",
                        web_app: { url: MINI_APP_URL }
                    }
                ]
            ]
        }
    });
});
