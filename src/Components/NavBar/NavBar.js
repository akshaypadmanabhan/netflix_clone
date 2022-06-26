import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className="nav-bar">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img className="logo"src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='Netflix'/>
  <div className="navbar-collapse">
    <ul className="navbar-list">
      <li className="nav-item">
        <a className="nav-link" href="https://www.netflix.com/browse">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.netflix.com/browse/genre/83">TV shows</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.netflix.com/browse/genre/34399">Movies</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.netflix.com/latest">New&Popular</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.netflix.com/browse/my-list">My List</a>
      </li>
    </ul>
    <img className="avatar" src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='Avatar'/>
  </div>
</nav>
    </div>
  )
}

export default NavBar