import React, {useState} from 'react'
import {sendMessage} from '../../redux/actions'
import {connect, useDispatch} from 'react-redux'

function WriteMessage({user}) {
   const [message, setMessage] = useState('')
   const dispatch = useDispatch()
   const changeMessageHandler = ({target}) => {
      setMessage(target.value)
   }
   const sendMessageHandler = (event) => {
      event.preventDefault()
      setMessage('')
      dispatch(sendMessage(user, message))
   }
   return (
      <form
         className='Chat__write-message'
         onSubmit={sendMessageHandler}
      >
         <input
            type="text"
            placeholder='Ваше сообщение'
            className='Chat__input-send'
            value={message}
            onChange={changeMessageHandler}
         />
         <button type='submit' className='Chat__btn-send'>Отправить</button>
      </form>
   )
}

const mapStateToProps = ({user}) => {
   return {
      user: user
   }
}

export default connect(mapStateToProps, null)(WriteMessage)