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

const prefix = '~';
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
    let sender = message.author
    let cont = message.content.slice(prefix.length).split(" ");

    if (msg.startsWith(prefix + 'PURGE')) {
        async function purge() {
            message.delete();

            if (!message.member.roles.find("name", "bot-commander")) {
                message.channel.send('You need the \`bot-commander\` role to use this command.');
                return; 
            }

            if (isNaN(args[0])) {
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>');
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' messages found, deleting...');

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`));

        }

        purge();

    }


    if (msg.startsWith(prefix + 'WEATHER')) {

        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
            if (err) message.channel.send(err);

            if (result === undefined || result.length === 0) {
                message.channel.send('**Please enter a valid location.**')
            }

            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86)
                .addField('Timezone',`UTC${location.timezone}`, true)
                .addField('Degree Type',location.degreetype, true)
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)

                message.channel.send({embed});
        });
    }

    if (msg.startsWith(prefix + 'HOOK')) {

        message.delete();

        if (msg === prefix + 'HOOK') {
            return hook(message.channel, 'Hook Usage', `${prefix}hook <title>, <message>, [HEXcolor], [avatarURL]\n\n**<> is required\n[] is optional**`,'FC8469','https://cdn4.iconfinder.com/data/icons/global-logistics-3/512/129-512.png') // Remeber that \n means new line. This is also using a custom HEX id, and an image.
        }

        let hookArgs = message.content.slice(prefix.length + 4).split(",");
        hook(message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);
    }

});

bot.login(process.env.TOKEN)
