import React from 'react'

export const About = () => {
  return (
    <section id="about" className='about'>
      <h2>Over mij</h2>
      <div className="aboutContent">
        <div className="aboutText">
          <p>
            Na bijna 15 jaar werkzaam in de Telecom branch is het voor mij tijd voor een nieuwe uitdaging. 
            Werken met opensource producten zoals Kamailio, Freeswitch, Ansible, GIT en MySQL op Linuxservers heeft mij veel kennis gebracht wat betreft IT architectuur.
            Maar daarnaast vind ik het in mijn vrije tijd al tijden leuk om te programmeren. Zo heb ik voor een Escape room een Android App en Raspberry Pi software geschreven in Python,
            en bouw ik voor diezelfde Escape Room diverse puzzels met Arduino's en programmeer deze in C. 
          </p>
          <p>
            De afgelopen maanden heb ik mij verdiept in Web development: HTML, CSS, Javascript, en vervolgens React. Eerst gewoon om te kijken wat er mee kan, maar ik merk dat ik zoveel plezier uit het bouwen van dit soort
            interactieve apps en websites haal dat ik hier mijn werk van wil maken. Bekijk de <a href="/#projects">projecten</a> voor mijn huidige ervaring.
          </p>
          <p>
            Daarom sta ik open voor een mooie uitdaging waar ik mijn huidige kennis kan inzetten en vergroten.
            Mocht u een vacature voor React Frontend Developer hebben en deze met mij willen bespreken. Neem dan gerust <a href="/#contact">contact</a> met mij op.
          </p>
        </div>
        <div className="aboutLogos">
          <a href="https://www.freeswitch.org" title="Freeswitch is an open-source SIP PABX and Telecom Stack" target="_blank" rel="noopener noreferrer"><img src={require('./img/logos/freeswitch.png')} alt="Freeswitch logo" /></a>
          <a href="https://www.kamailio.org" title="Kamailio is an open-source SIP server and proxy" target="_blank" rel="noopener noreferrer"><img src={require('./img/logos/kamailio.png')} alt="Kamailio logo" /></a>
          <a href="https://www.ansible.com/" title="Ansible is a platform used to create, execute, and manage automation" target="_blank" rel="noopener noreferrer"><img src={require('./img/logos/ansible.png')} alt="Ansible logo" /></a>
          <a href="https://www.git-scm.com/" title="Git is an open-source distributed version control system"  target="_blank" rel="noopener noreferrer"><img src={require('./img/logos/git.png')} alt="Git logo" /></a>
          <a href="https://www.mysql.com/" title=" MySQL is an open-source relational database management system" target="_blank" rel="noopener noreferrer"><img src={require('./img/logos/mysql.png')} alt="Git logo" /></a>
          <a href="https://www.arduino.cc/" title="Arduino boards are microcontroller boards programmed in C" target="_blank" rel="noopener noreferrer"><img src={require('./img/logos/arduino.png')} alt="Arduino logo" /></a>
          <a href="https://www.raspberrypi.com/" title="Rapberry Pi is a series of small single-board computers" target="_blank" rel="noopener noreferrer"><img src={require('./img/logos/pi.png')} alt="Raspberry Pi logo" /></a>
          <a href="https://www.python.org/" title="Python is a high-level, general-purpose programming language" target="_blank" rel="noopener noreferrer"><img src={require('./img/logos/python.png')} alt="Python logo" /></a>
          <a href="https://www.javascript.com/" title="JavaScript is a programming language that is one of the core technologies of the World Wide Web" target="_blank" rel="noopener noreferrer"><img src={require('./img/logos/js.png')} alt="Javascript logo" /></a>
          <a href="https://reactjs.org/" title="React is an open-source front-end JavaScript library for building user interfaces" target="_blank" rel="noopener noreferrer"><img src={require('./img/logos/react.png')} alt="React logo" /></a>
        </div>
        </div>
    </section>
      
  )
}
