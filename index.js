// Replit用です！

// config.jsを呼ぶ（これがないとWebViewが出てこない）
require('./config.js');

const { TOKEN } = process.env; // SECLETに登録したenvのTOKEN
const { Client, GatewayIntentBits, ActivityType } = require('discord.js'); // 環境変数

// DiscordBotが機能するために必要なデータ
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildMessages
]
                          });

const prefix = 't'; // prefixの設定

// 起動時に実行するready
client.once('ready', () => {
	console.log(`${client.user.tag}がログインしました！`);
  client.user.setPresence({
  activities: [{ name: `V14スタート`,  // ステータス名を表示する
                 type: ActivityType.Playing  // ◯◯をプレイ中と表示する
               }],
               status: 'online'  // online,dnd,idle,offlineで変更可
  });
});

// messageで定義する
client.on('messageCreate', async (message) => {

  // Botの連投対策（botの発言を無視する）
  if (message.author.bot)
    return;

  // "hi"と喋ると"Hello World!"と返します
  if (message.content === "hi") {
    message.reply("Hello World!")
  }
});

client.login(TOKEN); // Botの起動に必要（消さないこと！）
