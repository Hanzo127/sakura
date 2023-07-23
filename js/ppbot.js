const chalk = require('chalk')
const fs = require('fs')
global.ppbot = 
const vi = ['https://telegra.ph/file/067b2cb3312837533239c.mp4',
'https://telegra.ph/file/e38881701692c74484a17.mp4',
'https://telegra.ph/file/de776d34ef058b7d2ec12.mp4', 'https://telegra.ph/file/bc82653506c301b40679c.mp4',     'https://telegra.ph/file/7f10b3624991bbcee9ded.mp4', 'https://telegra.ph/file/51aa9701839dcc29066e9.mp4',     'https://telegra.ph/file/4f26132ac0296a34a45a8.mp4']

var vid = vi[Math.floor(Math.random() * (vi.length))]
// pakai url gmbr
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
