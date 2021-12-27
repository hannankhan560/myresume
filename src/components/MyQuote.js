import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function MyQuote() {
    return (
        <section className='sec myquote-sec section'>
            <div className='myquote-content'>
                <div className='quote-mark quote-left'><FaQuoteLeft /></div>
                <div className='quote-mark quote-right'><FaQuoteRight /></div>
                <p>
                    Smart companies hire people for there <span>Attitude</span> not skills. <span>Skills</span> can be excelled by anyone. 
                </p>
                {/* <p>And I do have the right attitude</p> */}
            </div>
        </section>
    )
}

export default MyQuote
