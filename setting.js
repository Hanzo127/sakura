const chalk = require('chalk')
const fs = require('fs')


// edit thumb ada di file string/ppbot.js

global.owner = ['6281272308541'] // pakai nomor owner
global.ownernomer = "6281272308541" // pakai nomor owner
global.socialmedia = "IG: nier_89" // ini ig buat di ownerjy
global.yutub = "YT: lenttobs"// sama
global.lokasi = "Indonesia, Jawatimur, Lumajang"//

global.packgename = "by" 
global.author = "viper_md" 

global.title = 'viper_md'//Tittle reply 
global.body = 'nice to meet you' //body reply

global.welcome = false 
global.left = false


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
