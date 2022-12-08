import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//npm install --save @fortawesome/free-brands-svg-icons
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const Projects = () => {
  return (
    <section id="projects" className='projects'>
    <h2>Projecten</h2>
    <div className="project__list">
    <div className="project__row">
        <div className="project__row-img">
          <img src={require('./img/screen_tic.png')} alt="" width="200px" />
        </div>
        <div className="project__row-content">
          <h3 className="project__row-content-title">Boter, kaas en eieren</h3>
          <p className="project__row-content-desc">
            Een twee-speler versie van dit bekende spel in React Javascript. 
            Belangrijkste React features: useState en useEffect. 
          </p>             
          <div className="project__row-content-buttons">
            <Link to="/tic">Probeer</Link>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Code</a>
          </div>
        </div>
      </div>

      <div className="project__row">
        <div className="project__row-img">
          <img src={require('./img/screen_calc.png')} alt="" width="200px" />
        </div>
        <div className="project__row-content">
          <h3 className="project__row-content-title">Rekenmachine</h3>
          <p className="project__row-content-desc">
            Belangrijkste React features: useState, useEffect en useRef. 
            Verder wordt er in Javascript met Regular expressions gekeken 
            welke input er gegeven wordt en of deze toegestaan is.
          </p>             
          <div className="project__row-content-buttons">
            <Link to="/calculator">Probeer</Link>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Code</a>
          </div>
        </div>
      </div>

      <div className="project__row">
        <div className="project__row-img">
          <img src={require('./img/screen_todo.png')} alt="" width="200px" />
        </div>
        <div className="project__row-content">
          <h3 className="project__row-content-title">Todo lijst </h3>
          <p className="project__row-content-desc">
          Gebasseerd op <a href="https://youtu.be/RVFAyFWO4go"  target="_blank" rel="noopener noreferrer"> 
          React JS Full Course for Beginners <FontAwesomeIcon icon={faUpRightFromSquare} /></a>. Belangrijkste 
          React features: Prop drilling, useState, useEffect en JSON API. Voor de backend 
          wordt gebruik gemaakt van <a href="https://mockapi.io/"  target="_blank" rel="noopener noreferrer">
          mockAPI <FontAwesomeIcon icon={faUpRightFromSquare} /></a>.
          </p>             
          <div className="project__row-content-buttons">
            <a href="/todo">Probeer</a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Code</a>
          </div>
        </div>
      </div>

      <div className="project__row">
        <div className="project__row-img">
          <img src={require('./img/screen_blog.png')} alt="" width="200px" />
        </div>
        <div className="project__row-content">
          <h3 className="project__row-content-title">Blog CMS site</h3>
          <p className="project__row-content-desc">
          Gebasseerd op <a href="https://youtu.be/RVFAyFWO4go"  target="_blank" rel="noopener noreferrer"> 
          React JS Full Course for Beginners <FontAwesomeIcon icon={faUpRightFromSquare} /></a>. Belangrijkste 
          React features: useState, useEffect, Context Provider, Axios en 
          windowSize Hooks, BrowserRouter en Routes. Voor de backend 
          wordt gebruik gemaakt van <a href="https://mockapi.io/"  target="_blank" rel="noopener noreferrer">
          mockAPI <FontAwesomeIcon icon={faUpRightFromSquare} /></a>.
          </p>             
          <div className="project__row-content-buttons">
            <a href="/blog">Probeer</a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Code</a>
          </div>
        </div>
      </div>

      <div className="project__row">
        <div className="project__row-img">
          <img src={require('./img/screen_chat.png')} alt="" width="200px" />
        </div>
        <div className="project__row-content">
          <h3 className="project__row-content-title">Chat applicatie </h3>
          <p className="project__row-content-desc">
          Gebasseerd op <a href="https://youtu.be/watch?v=k4mjF4sPITE"  target="_blank" rel="noopener noreferrer"> 
          Chat App using React and Firebase <FontAwesomeIcon icon={faUpRightFromSquare} /></a>. Belangrijkste 
          React features: useState, useEffect, Context Provider, BrowserRouter, Routes en Navigate. Voor de backend 
          wordt gebruik gemaakt van <a href="https://firebase.google.com/"  target="_blank" rel="noopener noreferrer">
          Google Firebase <FontAwesomeIcon icon={faUpRightFromSquare} /></a>.
          </p>             
          <div className="project__row-content-buttons">
            <a href="/chat"  target="_blank" rel="noopener noreferrer">Probeer</a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Code</a>
          </div>
        </div>
      </div>

      <div className="project__row">
        <div className="project__row-img">
          <img src={require('./img/screen_website.png')} alt="" width="200px" />
        </div>
        <div className="project__row-content">
          <h3 className="project__row-content-title">Deze website</h3>
          <p className="project__row-content-desc">
            Deze porfolio site. Belangrijkste React features: useState, useEffect, BrowserRouter, Routes en Navigate. 
          </p>             
          <div className="project__row-content-buttons">
            <a href="/#banner">Probeer</a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Code</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Projects