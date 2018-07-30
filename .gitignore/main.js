const Discord = require ('discord.js');

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot Ready !");
});

bot.login('NDcyODMxNzgwODUyODU4ODky.Dj5HJg.LbRpUpUDGGGiuUpO5nkpCWii_BE');

//Commandes dans le chat commencant par <<.
bot.on('message', message => {


    //Quand Quelqu'un écrit Ping le bot repond Pong.
    if(message.content === "<< Ping"){
        message.reply("pong");
        console.log('ping pong');
    }

    //...
    if(message.content === "<< Est-ce que Winstinder est beau?"){
        message.reply(":thinking:");
        console.log('Arthur pa bo');
    }

    //...
    if(message.content === "<< Est-ce que Canard est beau?"){
        message.reply(":thinking:");
        console.log('Arthur pa bo');
    }

    //Met JL Admin.
    if(message.content === "<< AdminJL"){
        let role = message.member.guild.roles.find("name", "Admin Jean-Loup");
        message.member.addRole(role);
        consol.log('JL Admin!')
    }

    //Idée de merde de Winstinder.
    if(message.content === "<<Dab"){
        random();
        if(randnum == 1){
            message.reply("Tadaa" ,{file : "https://i.ytimg.com/vi/GRpJk1uERKA/maxresdefault.jpg"});
            console.log("Reponse1");
        }
        if(randnum == 2){
            message.reply("Tadaa" ,{file : "https://ih1.redbubble.net/image.405266455.6769/raf,750x1000,075,t,fafafa:ca443f4786.u3.jpg"});
            console.log("Reponse2");
        }
        if(randnum == 3){
            message.reply("Tadaa" ,{file : "http://pm1.narvii.com/6359/0e00abe42ae2e079586138798ca004d305c36d6f_00.jpg"});
            console.log("Reponse3");
        }
        if(randnum == 4){
            message.reply("Tadaa" ,{file : "https://memestatic1.fjcdn.com/comments/Dab+on+them+haters+_f6268ba4a4acc5529ae7957dc8867088.jpg"});
            console.log("Reponse4");
        }
        if(randnum == 5){
            message.reply("Tadaa" ,{file : "https://vignette.wikia.nocookie.net/doctorwhogeneral/images/5/5d/PickleDab.png/revision/latest?cb=20170906090345"});
            console.log("Reponse5");
        }
        console.log('Dab');
    }

})

//Quand un nouveau arrive sur le serveur.
bot.on("guildMemberAdd", member => {

    //Donne le role Membre
    let role = member.guild.roles.find("name", "Membre");
    console.log('Nouveau Membre !');
    member.addRole(role);
})

//Quand Un Membre Quitte le serveur.
bot.on("guildMemberRemove", member => {
    console.log('Membre Partie');
})

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(5);
    randnum = Math.floor(Math.random() * (max - min +1) + min)
}
