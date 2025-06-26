const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('https://dsc.gg/logistack', { 
        type: 'STREAMING',
        url: 'https://www.twitch.tv/twitch' // Replace with a valid twitch account URL
    });
});

client.login(process.env.TOKEN);
