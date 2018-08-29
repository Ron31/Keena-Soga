const Discord = require("discord.js"),
      bot = new Discord.Client(),
      BotSettings = require("./botsettings.json"),
      fs = require("fs"),
      profile = JSON.parse(fs.readFileSync("profil/message.json","utf8")),
      Config = require("./config.json"),
      Splatoon = require("./Splatoon_Arrays.json")
  
    

//Start-Up
bot.on("ready", async () => {
    console.log(`\nBot ist online.\nName + Tag: ${bot.user.username}#${bot.user.discriminator}\nPrefix: ${BotSettings.prefix}`)
    bot.user.setStatus("online") //online, idle, dnd, invisible
})
setInterval(async function() {

    let status = [`${BotSettings.prefix}help`, `${bot.users.size} members!`,`Version: [2.0]`,`on ${bot.guilds.size} Servers!`,`Bot-Owner: ${bot.users.get(BotSettings.OwnerID).tag}`];
    let chosen = status[Math.floor(Math.random() * status.length)];
  
    bot.user.setActivity(chosen, {type: "PLAYING"}); //PLAYING, STREAMING, LISTENING, WATCHING
  
}, 10000);
    

    // Join
    // bot.on("guildCreate", async guild => {
    //     bot.guilds.get(guild.id).channels.first().send("Hi")
    //     console.log(error)
    // })    



//Welcome Message
bot.on("guildMemberAdd", async member => { 

    //Ich
    if(member.guild.id == `406946551538253828`) {
    bot.channels.get("439880541043425290").send(`${member} Welcome to the ${member.guild.name}! Please take a look at the <#406946551538253830> and behave yourself. \nIf you have any questions you can go to the mods, supporter or even Newtox. \nIt also does not hurt to take a look into the <#477222309787205674> ${bot.emojis.find("name","Glumanda_Hi")}`)
        member.addRole("406952857917456395")

        //Xami
        if(member.guild.id == `361532938816585730`) { 
            bot.channels.get("478552771734536192").send(`${member} Willkommen in der ${member.guild.name}! Wir wünschen dir hier viel Spaß. Lies dir aber bitte die <#478965010920374291> durch.`)
                member.addRole("473485307950530560")
            }
    }
        //Sky
    if(member.guild.id == `480117939287359502`) { 
        bot.channels.get("480120688150183946").send(`${member} Willkommen in der ${member.guild.name}! Wir wünschen dir hier viel Spaß. Lies dir aber bitte die <#475768698758758401> durch.`)
            member.addRole("483662517110046722")
        }

        //Others
    if(member.guild.id == `361532938816585730`) { 
        bot.channels.get("478552771734536192").send(`${member} Willkommen in der ${member.guild.name}! Wir wünschen dir hier viel Spaß. Lies dir aber bitte die <#478965010920374291> durch.`)
            member.addRole("473485307950530560")
        }

        //Sora
    if(member.guild.id == `417437075734790174`) { 
            member.addRole("417770123840061451")
        }
});
bot.on("message", async message => { })

 //Goodbye Message
 bot.on("guildMemberRemove", async member => { 
    if(member.guild.id == `406946551538253828`) {
    bot.channels.get("439880541043425290").send(`${member.user.username}#${member.user.discriminator} has left the ${member.guild.name}...`)
    }
});
bot.on("message", async message => { }) 



bot.on("message", async message => {

    //Variablen
    var args = message.content.slice(BotSettings.prefix.length).trim().split(" "),

        command = args.shift(),
        msg = message.content.toLowerCase(),
        mention = message.mentions.members.first()
        HelpFooter = `Write ${BotSettings.prefix}help <command> For more information about a command.`
        NewtoxFooter = `https://cdn.discordapp.com/attachments/406957187869442048/484411766533652511/yes.png`
        ToxbotFooter = `${bot.user.username} | V2.0`
        ToxbotLogo = `${bot.user.avatarURL}`
        embedRandom = '#' + ("000000" + Math.random()*0xFFFFFF<<0).toString(16);
        

       

    //Emojis
    let GlumandaHi = message.guild.emojis.find("name", "Glumanda_Hi") 
    let Balance = message.guild.emojis.find("name", "Balance") 
    let Brilliance = message.guild.emojis.find("name", "Brilliance") 
    let Bravery = message.guild.emojis.find("name", "Bravery") 


     dab1 = "<:dabbing1:481144666759102475>"
     dab2 = "<:dabbing2:481144673746812946>"
     dab3 = "<:dabbing3:481144682001334272>"


     ONLINE_EMOTE = "<:online:480435603587203118>"
     IDLE_EMOTE = "<:idle:480435654233423892>"
     DND_EMOTE = "<:dnd:480435646624694302>"
     INV_EMOTE = "<:invisible:480435664417194014>"


    //Verbotene Zeichen/Wörter
   

     //Schutz vor Bots
     if(!message.author.bot) {


        //Help
        if(message.content ==`${BotSettings.prefix}help`) { 
            var embed = new Discord.RichEmbed() 

            .setColor(embedRandom)
            .setTimestamp()
            .setFooter(HelpFooter)
            .setTitle("Here you can see every Command of the Bot")
            .addField(`**__Info__**`,"`userinfo` \n`serverinfo` \n`serverlist` \n`serverpartners` \n`messages` \n`devmessage` \n`botinfo` \n`botinvite` \n`Fun` \n`Hypesquad`",true)
            .addField(`**__Moderation__**`,"`kick` \n`ban` \n`giverole` \n`removerole`",true)
            .addField(`**__Management__**`,"`roleedit` \n`clear` \n`emojiFile`",true)
            .addField(`**__Fun__**`,"`rolecolor` \n`randomcolor` \n`splatoon2perks` \n`lööps` \n`@Toxbot` \n`dab` \n`snens` \n`subway`",true)
            .addField(`**__Developer__**`,"`roleID` \n`emojiID`",true)
            .setThumbnail("https://cdn.discordapp.com/attachments/406957187869442048/476098810460766229/help2.png")
            message.channel.send(embed)
        }

        

        //Hypesquad!
        if(message.content ==`${BotSettings.prefix}Hypesquad`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`This command only works on the bot-owner server. \n[**${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}**`)

            var embed = new Discord.RichEmbed()

            .setDescription(`Here you see all the Hypesquad houses. \nTo which you can be adden your respective role. \n${Balance} ${BotSettings.prefix}Balance \n${Brilliance} ${BotSettings.prefix}Brilliance \n${Bravery} ${BotSettings.prefix}Bravery`)
            .addField("If you want to change your house. Can you do that. ","All you have to do is type the same as above, only with a **leave** behind. That would then look like: `tx!Balanceleave`",true)
            .addField("To see which members are in which house", "simply use \n`tx![House] list`")
            .addField("If you don't know what the Hypesquad is, Then please watch the following video:","https://youtu.be/SWzB1mx2o5k",false)
            .setThumbnail("https://cdn.discordapp.com/emojis/479789194852565002.png?v=1")
    
            message.channel.send(message.author, embed)
        }

        if(message.content ==`${BotSettings.prefix}Balance list`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`This command only works on the bot-owner server. \n[**${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}**`)

            var embed = new Discord.RichEmbed()
            .setColor("#45DDC0")
            .addField("House-Balance-Members",`${message.guild.members.filter(members => members.roles.has("480798479103295490")).map(members => members).join(" \n")}` || `Currently there are no ${message.guild.roles.get("480798479103295490").name} members.`, false)
            .setThumbnail("https://cdn.discordapp.com/attachments/406957187869442048/481181516370673684/Balance.png")

            message.channel.send(embed)
        }

        if(message.content ==`${BotSettings.prefix}Brilliance list`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`This command only works on the bot-owner server. \n[**${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}**`)

            var embed = new Discord.RichEmbed()
            .setColor("#F47B67")
            .addField("House-Brilliance-Members",`${message.guild.members.filter(members => members.roles.has("480798626382086157")).map(members => members).join(" \n")}` || `Currently there are no ${message.guild.roles.get("480798626382086157").name} members.`, false)
            .setThumbnail("https://cdn.discordapp.com/attachments/406957187869442048/481181549518389249/Brilliance.png")

            message.channel.send(embed)
        }

        if(message.content ==`${BotSettings.prefix}Bravery list`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`This command only works on the bot-owner server. \n[**${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}**`)

            var embed = new Discord.RichEmbed()
            .setColor("#9C84EF")
            .addField("House-Bravery-Members",`${message.guild.members.filter(members => members.roles.has("480798562079342593")).map(members => members).join(" \n")}` || `Currently there are no ${message.guild.roles.get("480798562079342593").name} members.`, false)
            .setThumbnail("https://cdn.discordapp.com/attachments/406957187869442048/481181534276026388/Bravery.png")

            message.channel.send(embed)
        }

        //Help-Hypesquad

        if(message.content ==`${BotSettings.prefix}help Hypesquad`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`This command only works on the bot-owner server. \n[**${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}**]`)

            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Hypesquad`,"`Show you all the Hypesquad houses you can be adden to.`",false)
            .addField(`Verwendung`,"`tx![house]`")
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        }

        if(message.content ==`${BotSettings.prefix}Balance`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`This command only works on the bot-owner server. \n[**${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}**]`)
            if(message.member.roles.has("480798562079342593") || message.member.roles.has("480798626382086157")) return message.channel.send(`${message.author} You are currently in the house **${message.guild.roles.get("480798562079342593").name}** or **${message.guild.roles.get("480798626382086157").name}**. You have to leave your current house.`)
            if(message.member.roles.has("480798479103295490")) return message.channel.send(`${message.author} You are already in the house **${message.guild.roles.get("480798479103295490").name}**.`)

            message.member.addRole(`480798479103295490`)
            message.channel.send(`${message.author} I am happy to welcome you in the house **Balance**!`)
        }

        if(message.content ==`${BotSettings.prefix}Balanceleave`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`This command only works on the bot-owner server. \n[**${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}**]`)
            if(message.member.roles.has("480798562079342593") || message.member.roles.has("480798626382086157")) return message.channel.send(`${message.author} You can't leave a house by not being.`)

            message.member.removeRole(`480798479103295490`)
            message.channel.send(`${message.author} Too bad you left house balance.`)
        }

        if(message.content ==`${BotSettings.prefix}Brilliance`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`This command only works on the bot-owner server. \n[**${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}**]`)
            if(message.member.roles.has("480798479103295490") || message.member.roles.has("480798562079342593")) return message.channel.send(`${message.author} You are currently in the house **${message.guild.roles.get("480798479103295490").name}** or **${message.guild.roles.get("480798562079342593").name}**. You have to leave your current house.`)
            if(message.member.roles.has("480798626382086157")) return message.channel.send(`${message.author} You are already in the house **${message.guild.roles.get("480798626382086157").name}**.`)


            message.member.addRole(`480798626382086157`)
            message.channel.send(`${message.author} I am happy to welcome you in the house **Brilliance**!`)
        }

        if(message.content ==`${BotSettings.prefix}Brillianceleave`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`This command only works on the bot-owner server. \n[**${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}**]`)
            if(message.member.roles.has("480798479103295490") || message.member.roles.has("480798562079342593")) return message.channel.send(`${message.author} You can't leave a house by not being.`)

            message.member.removeRole(`480798626382086157`)
            message.channel.send(`${message.author} Too bad you left house brilliance.`)
        }

        if(message.content ==`${BotSettings.prefix}Bravery`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`This command only works on the bot-owner server. \n[**${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}**]`)
            if(message.member.roles.has("480798479103295490") || message.member.roles.has("480798626382086157")) return message.channel.send(`${message.author} You are currently in the house **${message.guild.roles.get("480798479103295490").name}** or **${message.guild.roles.get("480798626382086157").name}**. You have to leave your current house.`)
            if(message.member.roles.has("480798562079342593")) return message.channel.send(`${message.author} You are already in the house **${message.guild.roles.get("480798479103295490").name}**.`)

            message.member.addRole(`480798562079342593`)
            message.channel.send(`${message.author} I am happy to welcome you in the house **Bravery**!`)
        }

        if(message.content ==`${BotSettings.prefix}Braveryleave`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`This command only works on the bot-owner server. \n[**${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}**]`)
            if(message.member.roles.has("480798479103295490") || message.member.roles.has("480798626382086157")) return message.channel.send(`${message.author} You can't leave a house by not being.`)

            message.member.removeRole(`480798562079342593`)
            message.channel.send(`${message.author} Too bad you left house bravery.`)
        }

        //Help-messages

        if(message.content ==`${BotSettings.prefix}help messages`) {

            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`messages`,"`Shows you the number of messages you've sent so far. You can also see this in others.`",false)
            .addField(`Use`,"`tx!messages \nOder tx!messages [Mitglied]`")
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        }



        //Messagecounter
        if(!profile[message.author.id]) {
            profile[message.author.id] = {Nachricht: 0}
            fs.writeFile("profil/message.json", JSON.stringify(profile),(err)=>{
                if(err)console.error(err)
            })
        }



        if(profile [message.author.id]) {
            profile[message.author.id] .Nachricht++
            fs.writeFile("profil/message.json", JSON.stringify(profile),(err)=>{
                if(err)console.error(err)
            })
        }   



        if(message.content ==`${BotSettings.prefix}messages`) {            

            var embed = new Discord.RichEmbed()
            .setColor(embedRandom)
            .setDescription(`${message.author} You have sent **${profile[message.author.id] .Nachricht}** Messages until now.`,false)

            message.channel.send(embed)
        } 


        if(message.content ==`${BotSettings.prefix}messages ${mention}`) {

            var embed = new Discord.RichEmbed()
            .setColor(embedRandom)
            .setDescription(`**${mention}** has sent **${profile[mention.id] .Nachricht}** Messages until now.`)

            message.channel.send(embed)
        }

         

        //Help-botinfo
        if(message.content ==`${BotSettings.prefix}help botinfo`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`botinfo`,`Gives you some information about the Bot`,false)
            .setFooter(ToxbotFooter, NewtoxFooter)
            message.channel.send(embed)
        }

        //Botinfo
        if(message.content == `${BotSettings.prefix}botinfo`) {

            var embed = new Discord.RichEmbed() 

            .setColor("#ff9564")
            .setTitle("About Toxbot")
            .addField("Name and Tag",`**${bot.user.username}**#${bot.user.discriminator}`,false)
            .addField("Bot-Owner:",`**${message.guild.member("402483602094555138").user.username}**#${message.guild.member("402483602094555138").user.discriminator}`, true)
            .addField("Coded with:","Discord.js 11.3.2",false)
            .addField(`Prefix`,`The prefix of the bot is **${BotSettings.prefix}**`, false)
            .addField("Creation date of the bot",`The bot was created on **${Config.Date_Name[bot.user.createdAt.toString().split(" ")[1]]}** **${bot.user.createdAt.toString().split(" ")[2]}**, **${bot.user.createdAt.toString().split(" ")[3]}**!`,false)
            .setTimestamp()
            .setThumbnail(bot.user.avatarURL)
        

    

            message.channel.send(embed)
        }



        //Help-userinfo
        if(message.content ==`${BotSettings.prefix}help userinfo`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Userinfo`,"`Gives you some information about your account. You can also see this in others.`",false)
            .addField(`Verwendung`,"`tx!userinfo \nor tx!userinfo [Member]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
            message.channel.send(embed)
        }

        //Userinfo
        if(message.content ==`${BotSettings.prefix}userinfo`) {

            var embed = new Discord.RichEmbed()
    
            .setColor(message.member.highestRole.color || embedRandom)
            .setTimestamp()
            .setTitle(`Userinfo about ${message.author.username}`)
            .addField(`Name + Tag`, `**${message.author.username}**#${message.author.discriminator}`)
            .setFooter(ToxbotFooter)
    
            if(message.author.username != message.member.displayName) {
                embed.addField(`Nickname`, `${message.member.displayName}`)
            } else {
                embed.addField(`Nickname`, `-`)
            }
          

            embed.addField(`Status`,`${Config.status_ger[message.author.presence.status]}`)
            
            if(message.author.presence.game) {
                embed.addField(`Activity`,`${Config.Activitytypes[message.author.presence.game.type]} **${message.author.presence.game.name}**`)
            }
            else {
                embed.addField(`Activity`,`-`)
            }
    
            embed.addField(`ID`,`${message.author.id}`,true)
        
            embed.addField(`Roles`,`${message.member.roles.map(roles => roles).splice(1).join(", ") || `-`}`)
        
            embed.addField("Account creation Date", `You have created your account on **${Config.Date_Name[message.member.user.createdAt.toString().split(" ")[1]]}** **${message.member.user.createdAt.toString().split(" ")[2]}**, **${message.member.user.createdAt.toString().split(" ")[3]}**!`, false) 
    
            embed.addField("Joindate", `You have joined the server last on **${Config.Date_Name[message.member.joinedAt.toString().split(" ")[1]]}** **${message.member.joinedAt.toString().split(" ")[2]}**, **${message.member.joinedAt.toString().split(" ")[3]}**!`, false) 
    
            .setThumbnail(`${message.author.displayAvatarURL}`)
    
            message.channel.send(embed)
    
        }

        if(message.content ==`${BotSettings.prefix}userinfo ${mention}`) {   
    
            var embed = new Discord.RichEmbed()
    
            .setColor(mention.highestRole.color || embedRandom)
            .setTimestamp()
            .setTitle(`Userinfo about ${mention.user.username}`)
            .addField(`Name + Tag`, `**${mention.user.username}**#${mention.user.discriminator}`)
            .setFooter(ToxbotFooter)
    
            
            if(mention.user.username != mention.displayName) {
                embed.addField(`Nickname`, `${mention.displayName}`)
            } else {
                embed.addField(`Nickname`, `-`)
            }
    
            embed.addField(`Status`,`${Config.status_ger[mention.presence.status]}`)
            
            if(mention.presence.game) {
                embed.addField(`Activity`,`${Config.Activitytypes[mention.presence.game.type]} **${mention.presence.game.name}**`)
            }
            else {
                embed.addField(`Activity`,`-`)
            }
        
            embed.addField(`ID`,`${mention.id}`,true)
    
            embed.addField(`Roles`,`${mention.roles.map(roles => roles).splice(1).join(", ") || `-`}`)
    
            embed.addField(`Account creation Date`,`**${mention.displayName}** created his/her account on **${Config.Date_Name[mention.user.createdAt.toString().split(" ")[1]]}** **${mention.user.createdAt.toString().split(" ")[2]}**, **${mention.user.createdAt.toString().split(" ")[3]}**!`, false) 
    
            embed.addField(`Joindate`, `**${mention.displayName}** joined the server last on **${Config.Date_Name[mention.joinedAt.toString().split(" ")[1]]}**  **${mention.joinedAt.toString().split(" ")[2]}**, **${mention.joinedAt.toString().split(" ")[3]}**!`, false) 
    
            .setThumbnail(`${mention.user.displayAvatarURL}`)
    
    
            message.channel.send(embed)
    
        }

        //Clear
        if(command === "clear") {
       
            if(message.author.id == BotSettings.OwnerID ||  message.member.hasPermission("MANAGE_MESSAGES"))  {

            var deleteCount = parseInt(args[0], 10);
    
            if (!deleteCount || deleteCount < 2 || deleteCount > 100) return message.reply("Please enter a number between 2 and 100.");
    
            let deleted = await message.channel.bulkDelete(deleteCount +1).catch(error => message.reply(`Could not delete messages because ${error}`));    

            let msg1 = await message.channel.send(`**${deleted.size}** messages have been deleted. ${message.author}`)
            setTimeout(async () => {msg1.delete()}, 5000)
    
          } else {
            message.channel.send(`This command requires the following server rights: **Manage-Messages**. ${message.author}`)
          } 
        } 
            //Help-clear
            if(message.content ==`${BotSettings.prefix}help clear`) {
                
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Clear`,"`Deletes any number of messages`")
            .addField(`Use`,"`tx!clear [number]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }
    
    
    
            //Kick
            if(command === "kick") {
    
                if(message.author.id == BotSettings.OwnerID ||  message.member.hasPermission("KICK_MEMBERS"))  {
    
            let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    
            if(!member)
    
              return message.reply(`Please enter a member located on the server.`);
    
            if(!member.kickable) 
    
              return message.reply("I can't kick this member, I'm sorry.");
    
            let reason = args.slice(1).join(' ');
    
            if(!reason) reason = `${message.author} Please give a reason!`;
    
            if(member.user.id == BotSettings.OwnerID) return message.channel.send(`The Bot-Owner cannot be kicked!`)
    
            await member.kick(reason)
    
            message.reply(`${member.user.tag} was kicked off the server for ${reason}`);

            } else {
                message.channel.send(`This command requires the following server rights: **Kick-Members**. ${message.author}`)
            } 
          }

         
    
    
            //Help-Kick
            if(message.content ==`${BotSettings.prefix}help kick`) {
                var embed = new Discord.RichEmbed()
                .setColor("#7289DA")
                .addField(`kick`,"`Kicks the selected user`")
                .addField(`Verwendung`,"`tx!kick [member] [reason]`")
                .setFooter(ToxbotFooter, NewtoxFooter)
    
                message.channel.send(embed)
            }
    
            //Bann
            if(command === "ban") {
    
                if(message.author.id == BotSettings.OwnerID ||  message.member.hasPermission("BAN_MEMBERS"))  {
        
            let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    
            if(!member)
    
              return message.reply(`Please enter a member located on the server.`);
    
            if(!member.bannable) 
    
              return message.reply("I can't ban this member, I'm sorry.");
        
    
            let reason = args.slice(1).join(' ');
    
    
            if(!reason) reason = `${message.author} Please give a reason!`;
    
            if(member.user.id == BotSettings.OwnerID) return message.channel.send(`The Bot-Owner cannot be banned!`)
    
            await member.ban(reason)
        
            message.reply(`${member.user.tag} was banned off the server for ${reason}`);

            } else {
                message.channel.send(`This command requires the following server rights: **Ban-Members**. ${message.author}`)
            } 
          }
         
          
          //Help-ban
          if(message.content ==`${BotSettings.prefix}help ban`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`ban`,"`Bans the selected user`")
            .addField(`Use`,"`tx!ban [member] [reason]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }


        //OPadd
        if(command.toLowerCase() == `giverole`) {
            if(message.author.id == BotSettings.OwnerID ||  message.member.hasPermission("ADMINISTRATOR"))  {
    
                var Rolle = args.join(" ")
                if(Rolle) {
                    if(message.guild.roles.find("name", Rolle)) {
    
                        message.member.addRole(message.guild.roles.find("name", Rolle).id).catch(err => {
    
                            if(err) message.channel.send(`Hm. Something went wrong. ${message.author}.\n\nError-Bericht: ${err}`)
    
                        });
    
                        message.channel.send(`You now have the role ${Rolle}. ${message.author} `)
    
                    } else {
                        message.channel.send(`This role does not exist on the server. ${message.author}`)
                    }
    
                } else {
                    message.channel.send(`Please enter a role. ${message.author}`)
                } 
    
            } else {
                message.channel.send(`This command requires the following server rights: **Administrator**. ${message.author}`)
            }
    
            
    
        }
    
        //Help-opgiverole
        if(message.content ==`${BotSettings.prefix}help giverole`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`giverole`,"`gives you a specific role`")
            .addField(`Use`,"`tx!giverole [Role]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }
    
    
    
        //Opremove
        if(command.toLowerCase() == `removerole`) {
        if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("ADMINISTRATOR")) {
    
    
    
                var Rolle = args.join(" ")
    
                if(Rolle) {
    
                    if(message.guild.roles.find("name", Rolle)) {
    
                        message.member.removeRole(message.guild.roles.find("name", Rolle).id).catch(err => {
    
                            if(err) message.channel.send(`Hm. Something went wrong. ${message.author}.\n\nError-Bericht: ${err}`)
    
                        });
    
                        message.channel.send(`You have been removed the role ${Rolle}. ${message.author} `)
    
                    } else {
                        message.channel.send(`This role does not exist on the server. ${message.author}`)
                    }
    
                } else {
                    message.channel.send(`Please enter a role. ${message.author}`)
                }
    
            } else {
                message.channel.send(`This command requires the following server rights: **Administrator**. ${message.author}`)
            }
    
            
        }


    
        //Help-opremoverole
        if(message.content ==`${BotSettings.prefix}help removerole`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`removerole`,"`removes you a specific role`")
            .addField(`Use`,"`tx!removerole [Role]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }
    
    
    
            //Rollen-ID
            if(command == "roleID") {
    
            if(message.author.id == BotSettings.OwnerID) {
    
                var Rolle = args.join (" ")
    
                if(Rolle) {
    
                    if(message.guild.roles.find("name",Rolle)) {
    
                        message.channel.send(`The ID of the Role **${Rolle}** is **${message.guild.roles.find("name",Rolle).id}** ${message.author}`)
    
                    } else {
                        message.channel.send(`${message.author} This is not a role that exists on the server.`)
                    }
    
                } else {
                    message.channel.send(`${message.author} Please enter an available role.`)
                }
    
            } else {
                message.channel.send(`Only the Bot-Owner can use this command. ${message.author}`)
            }
            return
        }
    
        //Help-roleID
        if(message.content ==`${BotSettings.prefix}help roleID`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`roleID`,"`Gives you the ID of a specific role`")
            .addField(`Use`,"`tx!roleID [Role]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }

              
        //Emoji-ID
        if(command == "emojiID") {
    
            if(message.author.id == BotSettings.OwnerID) {
    
            var Emote = args.join (" ")
    
            if(Emote) {
    
                if(message.guild.emojis.find("name",Emote)) {
    
                    message.channel.send(`The ID of the Emoji **${Emote}** is **${message.guild.emojis.find("name",Emote).id}** ${message.author}`)
    
                } else {
                    message.channel.send(`${message.author} This is not an emoji that exists on the server.`)
                }
    
            } else {
                message.channel.send(`${message.author} Please enter an available emoji.`)
            }
    
        } else {
            message.channel.send(`Only the Bot-Owner can use this command. ${message.author}`)
        }
        return
    }
    
        //Help-EmojiID
        if(message.content ==`${BotSettings.prefix}help emojiID`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`emojiID`,"`Gives you the ID of a specific emoji`")
            .addField(`Use`,"`tx!emojiID [Emoji]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }
    
    
        //Emoji-File
        if(command == "emojiFile") {
    
            if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("MANAGE_EMOJIS")) {
        
                var Emote = args.join (" ")
        
                if(Emote) {
        
                    if(message.guild.emojis.find("name",Emote)) {
        
                        message.channel.send(`Here is the emoji **${Emote}** as a File. ${message.guild.emojis.find("name",Emote).url} ${message.author}`)
        
                    } else {
                        message.channel.send(`${message.author} This is not an emoji that exists on the server.`)
                    }
        
                } else {
                    message.channel.send(`${message.author} Please enter an available emoji.`)
                }
        
            } else {
                message.channel.send(`This command requires the following server rights: **Manage-Emojis**. ${message.author}`)
            }
            return
        }
    
        //Help-emojiFile
        if(message.content ==`${BotSettings.prefix}help emojiFile`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`emojiFile`,"`Gives you a specific emoji as a file`")
            .addField(`Use`,"`tx!emojiFile [Emoji]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }
    
    
             
    
          //Rollenfarbe 
            if(command == "rolecolor") {
    
                var Rolle = args.join (" ")
    
                if(Rolle) {
    
                    if(message.guild.roles.find("name",Rolle)) {      
    
                    message.channel.send(`The role **${Rolle}** Has the RGB-Color **${message.guild.roles.find("name", Rolle).hexColor.toUpperCase()}**. ${message.author}`)
    
                    } else {
                        message.channel.send(`${message.author} This is not a role that exists on the server.`)
                    }
    
                } else {
                    message.channel.send(`${message.author} Please enter an available role.`)
                }
            return
        }
    
        //Help-rolecolor
        if(message.content ==`${BotSettings.prefix}help rolecolor`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`rolecolor`,"`gives you the color code of a specific role`")
            .addField(`Use`,"`tx!rolecolor [Role]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }
    

        //Randomcolor
        if(message.content ==`${BotSettings.prefix}randomcolor`) {

            var randomcolor = '#' + ("000000" + Math.random()*0xFFFFFF<<0).toString(16);

            var embed = new Discord.RichEmbed()
            .setColor(randomcolor)
            .setDescription(`This is your Color: \n**${randomcolor}** \n \nR: ${Math.round(Math.random()*255)} \nG: ${Math.round(Math.random()*255)} \nB: ${Math.round(Math.random()*255)}\n \n:arrow_left: You can see the color on the left side of the embed.`)
            
            message.channel.send(embed) 
        }

        //Help-randomcolor
        if(message.content ==`${BotSettings.prefix}help randomcolor`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`randomcolor`,"`gives you a random color code`")
            .addField(`Use`,"`tx!randomcolor`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }


        //Rollen-Edit
        if(command.toLowerCase() == `roleedit`) {
            if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("MANAGE_ROLES")) {
            if(args[0] && args[1]) {
                if(Number(parseInt(args[1].toString(10), 16)) < 16777215) {
                    if(message.guild.roles.find("name", args[0])) {
                        await message.guild.roles.find("name", args[0]).setColor(`#${args[1].toUpperCase()}`)
                        message.channel.send(`The color of the role **${args[0]}** became **#${args[1]}**. ${message.author}`)
                    } else {
                        message.channel.send(`This role does not exist on the server. ${message.author}`)
                    }
                } else {
                    message.channel.send(`This is not an RGB value. ${message.author}`)
                }
            } else {
                message.channel.send(`Please enter a **available** role and a color. ${message.author}`)
            }
        } else {
             message.channel.send(`This command requires the following server rights: **Manage-Roles**. ${message.author}`)
        }
            return
        }
    
        //Help-roleedit
        if(message.content ==`${BotSettings.prefix}help roleedit`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`roleedit`,"`So you can change the color of a role by bot`")
            .addField(`Use`,"`tx!roleedit [Role] [Color]`")
            .setFooter(ToxbotFooter, NewtoxFooter)
    
            message.channel.send(embed)
        }

        //Fun-Commands
        if(message.content ==`${BotSettings.prefix}splatoon2perks`) {
            message.channel.send(`https://pro-rankedboost.netdna-ssl.com/wp-content/uploads/2017/07/Splatoon-2-Abilities-List.png`)

        }


        if(message.content ==`${BotSettings.prefix}subway`) {
            message.channel.send(`https://cdn.discordapp.com/attachments/419197030104039426/483000826084851742/Screenshot_20180825-215234_Gallery.jpg`)
        }
 

        if(message.content ==`${BotSettings.prefix}lööps`) {
            message.channel.send(`https://cdn.discordapp.com/attachments/480022630884311060/480778360205869056/Screenshot_2018-08-17-21-36-51.png`)
        }

        if(message.content ==`${BotSettings.prefix}dab`) {
            message.channel.send(`${dab1}${dab2}${dab3}`)
        }

        if(message.content ==`${BotSettings.prefix}snens`) {
            message.channel.send(`https://cdn.discordapp.com/attachments/473896120917950464/481481773952401457/Darth_Snens.png`)
        }


        //Help-splatoon2perks
        if(message.content ==`${BotSettings.prefix}help splatoon2perks`) {
            var embed = new Discord.RichEmbed()
            .setColor(embedRandom)
            .addField(`splatoon2perks`,"`Shows the pros and cons of the brands in Splatoon 2`",false)
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        }   
        
        //Help-lööps
        if(message.content ==`${BotSettings.prefix}help lööps`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`splatoon2perks`,"`Shows the pros and cons of the brands in Splatoon 2`",false)
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        } 

        //Help-Toxbot
        if(message.content ==`${BotSettings.prefix}help Toxbot`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Toxbot`,"`Toxbot will be angry with you`",false)
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        }

        //Help-dab
        if(message.content ==`${BotSettings.prefix}help dab`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`dab`,"`You can always use a dab`",false)
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        }

         //Help-snens
         if(message.content ==`${BotSettings.prefix}help snens`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`snens`,"*Summon the Dark Lord!*",false)
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        }

        //Help-subway
        if(message.content ==`${BotSettings.prefix}help subway`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`subway`,"`Who's going to serve you at subway today?`",false)
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        }


        if(message.content ==`${BotSettings.prefix}botinvite`) {
            message.channel.send(`You want me on your server? \nUse this link:  \nhttps://discordapp.com/oauth2/authorize?client_id=463336117723201546&scope=bot&permissions=2146958847`)
        }

        //Help-Bot
        if(message.content ==`${BotSettings.prefix}help botinvite`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`botinvite`,"`gives you a link where you can invite the bot to your server.`",false)

            message.channel.send(embed)
        }

        if(message.content ==`${bot.user}`) {
                var embed = new Discord.RichEmbed()
                .setColor(embedRandom)
                .setImage("https://cdn.discordapp.com/attachments/406957187869442048/476102813705830404/ping.jpg")

                message.channel.send(embed)
        }

        // if(message.content ==`${BotSettings.prefix}spam`) {
        //     setInterval(async () => { message.channel.send(`<@276010682682572800>`) }, 1000);
        // }
        

        //serverinfo
        if(message.content ==`${BotSettings.prefix}serverinfo`) {

            var embed = new Discord.RichEmbed()
            .setColor(embedRandom)
            .setTitle(`${message.guild.name}`)
            .addField(`ID`,`${message.guild.id}`,true)
            .addField(`Owner`,`${message.guild.owner}`,true)
            .addField(`Verification Level`,`${Config.Verification_Name[message.guild.verificationLevel]}`,true)
            .addField(`Region`,`${message.guild.region}`,true)
            .addField(`Members`,`**${message.guild.memberCount}**`,true)
            .addField(`Bots`,`**${message.guild.members.filter(members => members.user.bot).size}**`,true)
            .addField(`Text-Channels`,`**${message.guild.channels.filter(channels => channels.type == "text").size}**`,true)
            .addField(`Voice-Channels`,`**${message.guild.channels.filter(channels => channels.type == "voice").size}**`,true)
            .addField(`AFK-Channel`,`${message.guild.afkChannel}`,true)
            .addField(`Roles`,`The server has **${message.guild.roles.size}** Roles\n \n${message.guild.roles.map(roles => roles).splice(1).join(", ")}`,true)
            .addField(`Emojis`,`The server has **${message.guild.emojis.size}** Emojis\n \n${message.guild.emojis.map(emojis => emojis).join("")}`,true)
            .addField(`Server creation Date`,`The server was created on **${Config.Date_Name[message.guild.createdAt.toString().split(" ")[1]]}** **${message.guild.createdAt.toString().split(" ")[2]}**, **${message.guild.createdAt.toString().split(" ")[3]}**!`, true)
            .addField(`Server-Icon`,`${message.guild.iconURL}`,true)
            .setThumbnail(`${message.guild.iconURL}`)
            .setFooter(ToxbotFooter)
            .setTimestamp()

            message.channel.send(embed)
        } 


        //Help-Serverinfo
        if(message.content ==`${BotSettings.prefix}help serverinfo`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Serverinfo`,"`Gives you some information about the server.`",false)
            message.channel.send(embed)
        } 


        if(message.content ==`${BotSettings.prefix}serverlist`) {

            var embed = new Discord.RichEmbed()
            .setColor(embedRandom)
            .setDescription(`The bot is located on **${bot.guilds.size}** Servers: \n \n${bot.guilds.map(members => members).join(",\n")}`)
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        }


        //Help-Serverliste
        if(message.content ==`${BotSettings.prefix}help serverlist`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Serverliste`,"`Shows you all the servers on which the bot is located.`",false)
            message.channel.send(embed)
        }


        //Serverpartner
        if(message.content ==`${BotSettings.prefix}serverpartners`) {
            var embed = new Discord.RichEmbed()
            .setColor(embedRandom)
            .setTitle(`Here you can see all server partners from the Toxbot development hub`,)
            .addField(`*Currently there are no partners*`,true)
            .setTimestamp()
            .setFooter(ToxbotFooter, NewtoxFooter)

            message.channel.send(embed)
        }
    
        //Help-Serverpartner
        if(message.content ==`${BotSettings.prefix}help serverpartners`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`Serverpartners`,"`Shows you all server partners from the Toxbot development hub`",false)
            message.channel.send(embed)
        } 



        //Say-Command

        if(command == "say") {
            if(message.author.id == BotSettings.OwnerID) { 
                var Say = args.join(" ") 
                if(Say) {
                    message.channel.send(Say) 
                } else { 
                    message.channel.send(`What do you want me to say? ${message.author}`)
                }
            } else { 
                message.channel.send(`Only the Bot-Owner can use this command. ${message.author}`)

            }
            message.delete();
        }

        //DevMessage
        if(message.content == `${BotSettings.prefix}devmessage ${args.join(" ")}`) {
            bot.users.get(BotSettings.OwnerID).send(args.join(' '))
            message.channel.send(`Your message was sent to the Bot-Owner.`)
        }


        //Help-Devmessage
        if(message.content ==`${BotSettings.prefix}help devmessage`) {
            var embed = new Discord.RichEmbed()
            .setColor("#7289DA")
            .addField(`devmessage`,"`Sends a message to the Bot-Owner`",false)
            message.channel.send(embed)
        } 

        //Vote-Test
        if(command == "vote") {
            if(message.author.id == BotSettings.OwnerID || message.member.hasPermission("ADMINISTRATOR"))  { 
                if(message.guild.id != `361532938816585730`) return message.channel.send(`Dieser Befehl funktioniert nur auf dem Server von **${bot.users.get("227034133447180288").username}**#${bot.users.get("227034133447180288").discriminator}`)

                var vote = args.join(" ") 
                if(vote) {
                    await message.channel.send(vote) 
                    .then(msg => msg.react("430984155984035850").then(msg2 => msg.react("430985269362032642").then(msg3 => msg.react("430985153180073985")).then(msg4 => msg.react("430984548625416198"))))

                } else { 
                    message.channel.send(`Was für eine Abstimmung soll es sein? ${message.author}`)
                }
            } else { 
                message.channel.send(`Nur eine Person mit Admin Rechten oder der Bot-Owner können diesen Befehl nutzen. ${message.author}`)

            }
            message.delete();
        }

        if(message.content ==`${BotSettings.prefix}Xami`) {
            if(message.guild.id != `361532938816585730`) return message.channel.send(`Dieser Befehl funktioniert nur auf dem Server von **${bot.users.get("227034133447180288").user.username}**#${bot.users.get("227034133447180288").user.discriminator}`)

            var embed =  new Discord.RichEmbed()
            .setColor("#206694")
            .setTitle(`Das Team der ${message.guild.name}`)
            .addField("Owner",`${message.guild.members.filter(members => members.roles.has("361534036298170398")).map(members => members).join(", ")}` || `Aktuell gibt es keine/n ${message.guild.members.filter(members => members.roles.has("361534036298170398")).array.name}`, false)
            .addField("Developer",`${message.guild.members.filter(members => members.roles.has("361535544968347648")).map(members => members).join(", ")}`, false)
            .addField("Moderator",`${message.guild.members.filter(members => members.roles.has("361534180229906432")).map(members => members).join(", ")}`, false)
            .addField("Bots",`${message.guild.members.filter(members => members.roles.has("361534497990115328")).map(members => members).join(", ")}`, false)

            .setThumbnail(`${message.guild.member("227034133447180288").user.avatarURL}`)
            .setFooter(ToxbotFooter, NewtoxFooter)


            message.channel.send(embed)
        }

         //BotOff
         if(message.content ==`${BotSettings.prefix}shutdown`) {
            if(message.author.id == BotSettings.OwnerID) { 

            bot.destroy()    
            } else {
                message.channel.send(`Nur der Bot-Owner kann diesen Command nutzen. ${message.author}`)
            }     
        }

        if(message.content ==`${BotSettings.prefix}HateWaffen Newtox`) {
            if(message.guild.id != BotSettings.ServerID) return message.channel.send(`This command only works on the bot-owner server. \n[**${message.guild.member("402483602094555138").user.username}#${message.guild.member("402483602094555138").user.discriminator}**]`)
            
            var embed = new Discord.RichEmbed()
            .setColor(message.member.highestRole.color)
            .setDescription(`Blaster \nDual-Platscher \nDual-Platscher-SE \nDynaroller \nDynaroller Tesla \nE-Liter 4K \nHydrant \nKalligraf \nKleckser \nKlecks-Splatling \nKontra-Blaster \nNautilus 47 \nParapluviator \nQuasto \nS3 Tintenwerfer \nSplatling \nSprenkler Fresco \nSchwapper \nWannen-Schwapper`)
            .setTimestamp()
            .setFooter(ToxbotFooter,NewtoxFooter)

            message.channel.send(`Hey ${message.author}, du spielst Splatoon 2 und möchtest den Newtox mal richtig ragen sehen? Dann steht dir hier eine Liste an Waffen zur Verfügung, mit denen du im eine auf die Mütze geben kannst. \nIch wünsche Viel Spaß beim auslachen :smile:`,embed)
        }

    }
});




bot.login(process.env.BOT_TOKEN)
