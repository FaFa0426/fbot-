const Discord = require('discord.js');
const bot = new Discord.Client();
var prefixx = ('!');

bot.on('ready', () => {
    console.log('fbot opérationnel')
}) 

bot.on('message', function (message) {
    if (message.content === '!!ping') {
        message.channel.sendMessage('pong')
    };
    if (message.content === '!!flip' || message.content === '!flip') {
		var flip = Math.floor(Math.random() * 2 + 1);
		if (flip === 1) {
			console.log('pil')
			message.reply('La pièce a fait pil!')
		}
		else {
			console.log('face');
			message.reply('La pièce a fait face!')
        };
    };
    if (message.content.toLowerCase() === 'salut')
        message.channel.send('Salut à toi' + message.author);

        var prefixx = ("!!");

        var args = message.content.substring(prefixx.length).split(' ');

    switch (args[0].toLowerCase()){
        case "8ball":
        let args = message.content.split(" ").slice(1);

        let tte = args.join(" ");

        if (!tte){
            return message.reply ("Veuillez posez une question :8ball:.")};

            var replys = [ 
                "Oui.",

                "Non.",

                "C'est presque sûr.",

                "Il y a des chances.",

                "Évidemment.",

                "Il vaut mieux ne pas vous répondre...",

                "Sûrement",

                "Reposez votre question plus tard."
            ]

            let réponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(':8ball: 8ball')
            .setAuthor(message.author.tag)
            .setColor('#000000')
            .setTitle('commande 8ball')
            .addField('Question:', tte)
            .addField('Réponse', réponse) 
            .setFooter('8ball')
        message.channel.sendEmbed(bembed)
             
    }
})


bot.on('ready', function () {
    bot.user.setAvatar('./avatar chinois.jpg')
    .then(() => console.log('avatar mis avec succés'))
    .catch(console.error)
    bot.user.setActivity('la création de FaFa2604', {type:'WATCHING'})
    .then(() => console.log('activité mis avec succés'))
    .catch(console.error)
    bot.user.setUsername('EntrePotes\'bot')
    .then(() => console.log('activité mis avec succés'))
    .catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
    member.createDM().then (function (channel){
    return channel.send('Bienvenue sur EntrePotes ! Pense a lire les règles dans #regles-informatioon et bon jeux a toi' + member.displayName)
    }).catch(console.error()
    )
})

const prefix = '!!';
function hook(channel, title, message, color, avatar) {

    if (!channel) return console.log('Channel not specified.');
    if (!title) return console.log('Title not specified.');
    if (!message) return console.log('Message not specified.');
    if (!color) color = 'd9a744';
    if (!avatar) avatar = 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png'

    color = color.replace(/\s/g, '');
    avatar = avatar.replace(/\s/g, '');

    channel.fetchWebhooks()
        .then(webhook => {

            let foundHook = webhook.find('name', 'Webhook');

            if (!foundHook) {
                channel.createWebhook('Webhook', 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png') // Make sure this is the same thing for when you search for the webhook. The png image will be the default image seen under the channel. Change it to whatever you want.
                    .then(webhook => {
                        webhook.send('', {
                            "username": title,
                            "avatarURL": avatar,
                            "embeds": [{
                                "color": parseInt(`0x${color}`),
                                "description":message
                            }]
                        })
                            .catch(error => {
                                console.log(error);
                                return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                            })
                    })
            } else {
                foundHook.send('', {
                    "username": title,
                    "avatarURL": avatar,
                    "embeds": [{
                        "color": parseInt(`0x${color}`),
                        "description":message
                    }]
                })
                    .catch(error => {
                        console.log(error);
                        return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                    })
                }

        })

}

bot.on('message', message => {

    let msg = message.content.toUpperCase();

    if (msg.startsWith(prefix + 'HOOK')) {

        message.delete();

        if (msg === prefix + 'HOOK') {
            return hook(message.channel, 'Hook Usage', `${prefix}hook <title>, <message>, [HEXcolor], [avatarURL]\n\n**<> is required\n[] is optional**`,'FC8469','https://cdn4.iconfinder.com/data/icons/global-logistics-3/512/129-512.png') // Remeber that \n means new line. This is also using a custom HEX id, and an image.
        }

        let hookArgs = message.content.slice(prefix.length + 4).split(",");
        hook(message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);
    }

});

var randnum = 0

function random(min, max) {
    min = Math.ceil(0)
    max = Math.floor(16)
    randnum = Math.floor(Math.random() * (max - min +1) + min)
};

var aleanum = 0

function aleatoire(min, max){
    min = Math.ceil(0)
    max = Math.floor(2)
    aleanum = Math.floor(Math.random() * (max - min +1) + min)
};

bot.on('message', function (message){
    if (message.content === '!!test'){
        aleatoire();
        if (aleanum == 1){
            message.reply('1');
        };
        if (aleanum == 2){
            message.reply('2');
        };
    };
    if (message.content === '!!jeux'){
    random();

    if (randnum == 1){
        message.reply('League of legends');
    };
    if (randnum == 2){
        message.reply('Fortnite Battle Royale');
    };
    if (randnum == 3){
        message.reply('Fortnite Sauver le monde');
    };
    if (randnum == 4){
        message.reply('Minecraft');
    };
    if (randnum == 5){
        message.reply('Bomb Party');
    };
    if (randnum == 6){
        message.reply('Brawlhalla');
    };
    if (randnum == 7){
        message.reply('Business Tour(500 jeton');
    };
    if (randnum == 8){
        message.reply('Paladins Siege');
    }
    if (randnum == 9){
        message.reply('S4 League');
    };
    if (randnum == 10){
        message.reply('Lanceur choisi');
    };
    if (randnum == 11){
        message.reply('Business Tour(100 jeton)');
    };
    if (randnum == 12){
        message.reply('Rocket League');
    };
    if (randnum == 13){
        message.reply('Autre Chosi')
    };
    if (randnum == 14){
        message.reply('Cities Skyline');
    };
    if (randnum == 15){
        message.reply('The Escapist 2');
    };
}

if (message.content === '!!mode'){
    random();
    if (randnum == 9){
        message.reply('casual');
    };
    if (randnum == 1){
        message.reply('Classé');
    };
    if (randnum == 2){
        message.reply('Classé');
    };
    if (randnum == 3){
        message.reply('Classé');
    };
    if (randnum == 4){
        message.reply('Classé');
    };
    if (randnum == 5){
        message.reply('Classé');
    };
    if (randnum == 6){
        message.reply('Classé');
    };
    if (randnum == 7){
        message.reply('Classé');
    };
    if (randnum == 8){
        message.reply('Classé');
    };
    if (randnum == 9){
        message.reply('casual');
    };
    if (randnum == 10){
        message.reply('casual');
    };
    if (randnum == 11){
        message.reply('casual');
    };
    if (randnum == 12){
        message.reply('casual');
    };
    if (randnum == 13){
        message.reply('casual');
    };
    if (randnum == 14){
        message.reply('casual');
    };
    if (randnum == 15){
        message.reply('casual');
    };
    if (randnum == 16){
        message.reply('casual');
    };
      
};

if (message.content === '!!temp'){
    random();
    if (randnum == 1){
        message.reply('1 game ');
    };
    if (randnum == 2){
        message.reply('1 game ');
    };
    if (randnum == 3){
        message.reply('1 game ');
    };
    if (randnum == 4){
        message.reply('1 game ');
    };
    if (randnum == 5){
        message.reply('1 heure');
    };
    if (randnum == 6){
        message.reply('1 heure');
    };
    if (randnum == 7){
        message.reply('1 heure');
    };
    if (randnum == 8){
        message.reply('1 heure');
    };
    if (randnum == 9){
        message.reply('2 heure');
    };
    if (randnum == 10){
        message.reply('2 heure');
    };
    if (randnum == 11){
        message.reply('2 heure');
    };
    if (randnum == 12){
        message.reply('2 heure');
    };
    if (randnum == 13){
        message.reply('toute la journée');
    };
    if (randnum == 14){
        message.reply('toutela journée');
    };
    if (randnum == 15){
        message.reply('toute la journée');
    };
    if (randnum == 16){
        message.reply('toute la journée');
    };
    };
});

bot.login(process.env.TOKEN)
