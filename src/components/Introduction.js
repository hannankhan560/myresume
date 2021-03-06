import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import AnimateText from './AnimateText';

function Introduction() {
    return (
        <section className='intro-sec sec section'>
            <div className='container'>
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
                    
                </div>
                    <a className='btn' href="https://drive.google.com/file/d/14oI0L3WuPjyb4J35NsxG-YGNl9OvVvxk/view?usp=sharing">Download Resume</a>
                <div className='sec-arrow-down'>
                <IoIosArrowDown />
                </div>
            </div>
        </section>
    )
}

export default Introduction
