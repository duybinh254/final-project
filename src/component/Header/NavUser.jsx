import React from 'react'
import { Link } from "react-router-dom";



function NavUser(user) {
  return (
    <div className="header-user">
    <img alt="avatar" src={user.photoURL} />
    <ul className="header-user-list">
      <li className="header-user-item">{user.displayName}</li>
      <li className="header-user-item">{user.email}</li>
      <li className="header-user-item">
        <Link to="/favorite-movie">My Favorite Movie</Link>
      </li>
      <li className="header-user-item" 
    //   onClick={logOut}
      >
        Log Out
      </li>
    </ul>
  </div>
  )
}


export default NavUser
