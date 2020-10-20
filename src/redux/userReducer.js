import {SAVE_USER_DATA} from './types'

const initialState = {
   'nick_name': 'Big black lord',
   'first_name': 'John',
   'last_name': 'Doe',
   'email': 'john_doe@domain.com',
   'phone': '+3-111-444-444-44',
   'avatar': '/storage/avatars/sdijfefdkjfsdf.jpg',
   'created_at': '2020-01-11 12:00:00',
   'updated_at': '2020-10-07T17:43:07.000000Z',
   'img': 'https://wallbox.ru/resize/1920x1200/wallpapers/main2/201724/1497598161594388d10be017.96172722.jpg'
}

export function userReducer(state = initialState, action) {
   switch (action.type) {
      case SAVE_USER_DATA:
         return {
            ...action.payload
         }
      default:
         return state
   }
}