import React, {useEffect, useRef} from 'react'
import {createUser} from './User'
import {createMessage} from './Message'
import WriteMessage from './WriteMessage'
import {connect} from 'react-redux'

function Chat({usersData, messagesData}) {

   const users = usersData.map(createUser)

   const messages = messagesData.map(createMessage)

   const messagesRef = useRef(null)

   useEffect(()=>{
      messagesRef.current.scrollTo(0, 99999999)
   }, [messages])

   return (
      <div className='Chat'>
         <h2 className='Chat__title'>Чат</h2>
         <div className='Chat__chat-body mt-sm'>
            <div className='Chat__users'>
               {users}
            </div>
            <div className='Chat__messages-block'>
               <div className='Chat__messages' ref={messagesRef}>
                  {messages}
               </div>
               <WriteMessage/>
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = ({chat}) => {
   return {
      usersData: chat.usersData,
      messagesData: chat.messagesData
   }
}

export default connect(mapStateToProps, null)(Chat)