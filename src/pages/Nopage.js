import React from 'react'
import { Link } from 'react-router-dom'

function Nopage() {
    return (
        <div className='text-center'>
            <h2>404</h2>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Nopage
