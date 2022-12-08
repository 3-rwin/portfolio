import React from 'react'
import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main className='missing'>
            <h2>Pagina niet gevonden</h2>
            <p>
                <Link to='/'>Terug naar de Homepage</Link>
            </p>
        </main>
    )
}

export default Missing