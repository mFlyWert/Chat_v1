import {ADD_USER_TO_CHAT, SEND_MESSAGE} from './types'

const initialState = {
   'messagesData': [
      {
         user: {
            img: 'https://cdn.pixabay.com/photo/2019/03/25/09/57/bad-look-4079817_1280.jpg',
            first_name: 'Андрей',
            last_name: 'Сафронов'
         },
         sendTime: 'Сегодня 16.16',
         text: `
               Мой личный лайфхак: играть несколько раз подряд. Заходить на следующий 
               день и повторить пункт 1. Я так уже выиграл гору скидок: от скидок в магазин 
               техники до скидок на авиаперелет. А во 2 день «игры» мне удалось заполучить взрослый самокат в подарок. Не электрический, как я понял, но вполне себе 
               крутой, не для детей. Буду на работу на нем гонять.!
             `
      },
      {
         user: {
            img: 'https://alfa-cds.com/wp-content/uploads/images/karlikovie-korotkolapie-porodi-koshek_pts.jpg',
            first_name: 'Сергей',
            last_name: 'Иванов'
         },
         sendTime: '22.09.2020',
         text: `
               Не очень понимаю, я правда могу выиграть айфон? Случайным образом? 
               Попробую испытать «теорию вероятности» на деле.
            `
      },
      {
         user: {
            img: '',
            first_name: 'Николай',
            last_name: 'Форточкин'
         },
         sendTime: '22.09.2019',
         text: `
               Мой личный лайфхак: играть несколько раз подряд. Заходить на следующий 
               день и повторить пункт 1. Я так уже выиграл гору скидок: от скидок в магазин 
               техники до скидок на авиаперелет. А во 2 день «игры» мне удалось заполучить взрослый самокат в подарок. Не электрический, как я понял, но вполне себе 
               крутой, не для детей. Буду на работу на нем гонять.!
             `
      }
   ],
   'usersData': [
      {
         first_name: 'Андрей',
         last_name: 'Софронов',
         img: 'https://cdn.pixabay.com/photo/2019/03/25/09/57/bad-look-4079817_1280.jpg',
         lastVisit: '22.10'
      },
      {
         first_name: 'Имя',
         last_name: 'ДлиннаяФамилия',
         img: 'https://eus-www.sway-cdn.com/s/eGeICUQuqJELcaiD/images/6mzsA2cry6XYkP?quality=1080&isThumbnail=True',
         lastVisit: '21.10'
      },
      {
         first_name: 'Андрей',
         last_name: 'Софронов',
         img: 'https://i.ucrazy.ru/files/i/2007.6.7/gijobvl_13.jpg',
         lastVisit: '09.10'
      },
      {
         first_name: 'Андрей',
         last_name: 'Софронов',
         img: 'https://wallbox.ru/wallpapers/main/201601/95df864c647c9e0.jpg',
         lastVisit: 'Вчера'
      },
      {
         first_name: 'Андрей',
         last_name: 'Софронов',
         img: 'https://i.pinimg.com/736x/e6/9b/6f/e69b6feb89a524682cf149d527026893--chats-tabby-tabby-cats.jpg',
         lastVisit: 'Вчера'
      },
      {
         first_name: 'Андрей',
         last_name: 'Софронов',
         img: 'https://wallbox.ru/wallpapers/main/201601/a722441072774f0.jpg',
         lastVisit: 'Вчера'
      },
      {
         first_name: 'Андрей',
         last_name: 'Софронов',
         img: 'https://petsvillage.ru/wp-content/uploads/2015/05/british_cat-e1431865800333-1024x737.jpg',
         lastVisit: 'Вчера'
      }
   ]
}

export function chatReducer(state = initialState, action) {
   switch (action.type) {
      case SEND_MESSAGE:
         return {
            ...state,
            ['messagesData']: [...state['messagesData'], action.payload]
         }
      case ADD_USER_TO_CHAT:
         return {
            ...state,
            ['usersData']: [...state['usersData'], action.payload]
         }
      default:
         return state
   }
}