import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//npm install --save @fortawesome/free-brands-svg-icons
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <header className="header">
        <div className="header__title">
        </div>
        <nav className="header__nav">
            <a href="/#about">Over</a>
            <a href="/#projects">Projecten</a>
            <a href="/#contact">Contact</a>
            <a href="https://www.linkedin.com/in/erwinpels" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.github.com/3-rwin/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </nav>
    </header>
  )
}

export default Header