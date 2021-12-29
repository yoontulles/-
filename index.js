const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => { 
    console.log('준비완료'); 
});
client.on('message', message => {
    console.log(message.content);
    if (message.content === '튤스야') {
        message.channel.send('안넝')
    }
});
client.on('message', message => {
    console.log(message.content);
    if (message.content === '튤스야 윤하') {
        message.channel.send('윤하~!')
    }
});
client.on('message', message => {
    console.log(message.content);
    if (message.content === '튤스야 윤바') {
        message.channel.send('윤바..')
    }
});
client.login('OTE1MTY1OTMxNDUyMzc1MDUx.YaXosQ.fpmFkOntALhpliu_E_DxmD3o2jQ');