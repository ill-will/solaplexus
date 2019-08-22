import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.png'

const Header = ({ logo }) => {

  const logoPath = logo || "/img/logo.png"

  return (
    <div className="logo">
      <Link to="/">
        <img src={logoPath} alt="Sola Plexus Logo" />
      </Link>
    </div>
  )
}

export default Header
