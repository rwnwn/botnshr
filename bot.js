const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('$bc-bot')){
    if(!message.author.id === '') return;
    message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')
    client.users.forEach(m =>{
    m.sendMessage(args)
    })
    }
    });
    
    client.login(process.env.BOT_TOKEN);
