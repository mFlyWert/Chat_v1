import {SEND_MESSAGE} from './types'


export function sendMessage(user, text) {
   if(!text.trim()) return {
      type: 'ERROR'
   }
   const date = new Date()
   return {
      type: SEND_MESSAGE,
      payload: {
         user,
         text,
         sendTime: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
      }
   }
}