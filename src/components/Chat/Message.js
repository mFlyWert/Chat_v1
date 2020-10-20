import React from "react"

function Message({user, text, sendTime}){
   return (
      <div className='Chat__message' key={ '' + user.nick_name + sendTime}>
         <div className='Chat__sender'>
            <div className='Chat__user-avatar Chat__user-avatar_small'
            style={{
               backgroundImage: `url(${user.img})`
            }}
            >
            </div>
            <div className='Chat__sender-name'>
               {`${user.first_name} ${user.last_name}`}
            </div>
         </div>
         <div className='Chat__message-text'>
            {text}
         </div>
         <div className='Chat__send-time'>
            {sendTime}
         </div>
      </div>
   )
}

function createMessage(props){
   return <Message {...props} key={'' + props.user.img + props.sendTime}/>
}

export {Message, createMessage}