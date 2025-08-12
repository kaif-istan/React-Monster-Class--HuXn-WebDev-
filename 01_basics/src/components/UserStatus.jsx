import React from 'react'

const UserStatus = ({loggedIn, isAdmin=false}) => {
  if (loggedIn && isAdmin) {
    return <h1>Welcome Admin!</h1>
  } else if (loggedIn && !isAdmin) {
    return <h1>Welcome User!</h1>
  } else {
    return <h1>Please login!</h1>
  }
}

export default UserStatus