const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const logbook = new Discord.RichEmbed()
  .setAuthor("Logbook")
  .setColor("#00AE86")
  .setImage("https://datastudio.google.com/embed/reporting/1OgHD3GCsazMPvi5XIpdYLv0z1n49Jo8f/page/p7LO")
  .setThumbnail("")
  .setTimestamp();

client.on('message', msg => {
  if (msg.content === 'SAlogbook') {
    msg.reply({embed: logbook});
  }
});

client.login(process.env.token);
