 const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Yeah'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

 /////////////////////////////START CODE//////////////////////////////////////////////////
 const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logueado como ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'g!hello') {
    msg.reply('Hola, ¿que tal?');
  }
});

 if (command === 'random') {
        if(!args[0]) return msg.reply("You didn't specify args 1")
        if(!args[1]) return msg.reply("You didn't specify args 2")
        msg.channel.send("Your random number is: " + Math.floor(Math.random() * args[1] + args[0]));
    }
})

client.login(process.env.DISCORD_TOKEN);