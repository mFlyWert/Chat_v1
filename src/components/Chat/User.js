import React from 'react'

function User({first_name, last_name, lastVisit, img}) {
   return (
      <div className='Chat__user'>
         <div
            className='Chat__user-avatar Chat__user-avatar_large'
            style={
               {
                  backgroundImage: `url('${img}')`
               }
            }>
         </div>
         <div className='Chat__user-info'>
            {first_name}
            <br/>
            {last_name}
         </div>
         <div className='Chat__last-seen'>
            {lastVisit}
         </div>
      </div>
   )
}

function createUser(props) {
   return <User {...props} key={props.img}/>
}

export {User, createUser}