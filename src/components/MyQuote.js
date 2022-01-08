import React, {useEffect} from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function MyQuote() {

    return (
        <section className='sec myquote-sec section sec2'>
            <div className='container'>
                <div className='myquote-content'>
                    <div className='quote-mark quote-left aos' data-aos="fade-right" ><FaQuoteLeft /></div>
                    <div className='quote-mark quote-right aos' data-aos="fade-left"><FaQuoteRight /></div>
                    <p data-aos="zoom-in" className='.aos'>
                        Smart companies hire people for there <span>Attitude</span> not skills. <span>Skills</span> can be excelled by anyone. 
                    </p>
                    {/* <p>And I do have the right attitude</p> */}
                </div>
            </div>
        </section>
    )
}

export default MyQuote
