import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function Introduction() {
    return (
        <section className='intro-sec sec'>
            <div className='intro-content'>
                <div className='pic-wrapper'>
                    <img src={
                        require("../images/hannanpic.jpg")
                    } alt='img'/>
                </div>
                <h1>I'm <span>Hannan</span> a. khan</h1>
                <p>React / Javascript Developer & Graphic Designer</p>
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
