import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import AnimateText from './AnimateText';

function Introduction() {
    return (
        <section className='intro-sec sec section'>
            <div className='intro-content'>
                <div className='pic-wrapper' data-aos="fade-down">
                    <img src={
                        require("../images/hannanpic.jpg")
                    } alt='img'/>
                </div>
                <h1 >I'm &nbsp;
                <span>
                    <AnimateText text="Hannan"/>
                </span>
                    &nbsp; a. khan</h1>

                <p data-aos="fade-up">React / Javascript Developer & Graphic Designer</p>
                <div className='intro-subsec'>
                    <div className='intro-title'>
                        <p><span>Age:</span> 24</p>
                    </div>
                    <div className='intro-title'>
                        <p><span>Employment Status:</span> Self-employed</p>
                    </div>
                    <div className='intro-title'>
                        <p><span>Notice Period:</span> 7 Days</p>
                    </div>
                </div>
            </div>
            <div className='sec-arrow-down'>
            <IoIosArrowDown />
            </div>
        </section>
    )
}

export default Introduction
