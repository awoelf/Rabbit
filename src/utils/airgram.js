const { Airgram, Auth, prompt, toObject } = require('airgram');
const { getTdjson } = require('prebuilt-tdlib');
import { API_ID, API_HASH } from '@env'

export const airgram = new Airgram({
    apiId: API_ID,
    apiHash: API_HASH,
    command: getTdjson(),
    logVerbosityLevel: 2
})

export const AirgramLogin = () => {
    airgram.use(new Auth({
        code: () => prompt(`Please enter the secret code:\n`),
        phoneNumber: () => prompt(`Please enter your phone number:\n`)
    }))
}

// airgram.use(new Auth({
//     code: () => prompt(`Please enter the secret code:\n`),
//     phoneNumber: () => prompt(`Please enter your phone number:\n`)
// }))

// void (async function () {
//     const me = toObject(await airgram.api.getMe())
//     console.log('[Me] ', me)

  
//     const { response: chats } = await airgram.api.getChats({
//       limit: 100,
//       offsetChatId: 0,
//       offsetOrder: '9223372036854775807'
//     })
//     console.log('[My chats] ', chats)
//     // sendMessage(5897101348, 'Hope this works');
//     getMessages(5897101348)
// })()

// async function sendMessage (chatId, message) {
//     const { response: result } = await airgram.api.sendMessage({
//         chatId: chatId,
//         inputMessageContent: {
//             _: 'inputMessageText',
//             text: {
//                 _: 'formattedText',
//                 text: message
//             }
//         }
//     })
//     console.log(result);
// }

// async function getMessages (chatId) {
//     const { response: messages } = await airgram.api.getChatHistory({
//         chatId: chatId,
//         fromMessageId: 0,
//         limit: 100
//     })
//     console.log(messages)
// }
  
// // Getting all updates
// airgram.use((ctx, next) => {
// if ('update' in ctx) {
//     // console.log(`[all updates][${ctx._}]`, JSON.stringify(ctx.update))
// }
// return next()
// })
  
// // Getting new messages
// airgram.on('updateNewMessage', async ({ update }) => {
// const { message } = update
// console.log('[new message]', message)
// })


