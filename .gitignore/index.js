const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
    console.log('fbot opérationnel')
}) 

bot.on('message', function (message) {
    if (message.content === '!ping') {
        message.channel.sendMessage('pong')
    }
})

bot.on('ready', function () {
    bot.user.setAvatar('./avatar chinois.jpg')
    .then(() => console.log('avatar mis avec succés'))
    .catch(console.error)
    bot.user.setActivity('la création de FaFa2604', {type:'WATCHING'})
    .then(() => console.log('activité mis avec succés'))
    .catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
    member.createDM().then (function (channel){
    return channel.send('Bienvenue sur EntrePotes ! Pense a lire les règles dans #regles-informatioon et bon jeux a toi' + member.displayName)
    }).catch(console.error()
    )
})

bot.login('NDY1MTgwNjYzMjcyNzAxOTUy.DiJ6Bw.KTvVLHKPHErIwxV2-L6bIY4LJyU')
