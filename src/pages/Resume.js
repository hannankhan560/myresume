import React from 'react'
// import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
import Introduction from '../components/Introduction'
import Resumeinreact from '../components/Resumeinreact'
import MyBenefit from '../components/MyBenefit'
import MyQuote from '../components/MyQuote'
import Experience from '../components/Experience'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Basics from '../components/Basics'
import Experience2 from '../components/Experience2'
import ContactForm from '../components/ContactForm'
// import AOS from 'aos';

function Resume({theme}) {
    // useEffect(() => {
    //     AOS.init({
    //       duration : 1000
    //     });
    //   }, []);
    return (
        // <ThemeSelector>  
        <div className={theme} >
            <div id="fullpage" className='resume-wrapper'>
            <Introduction />
            <MyQuote />
            <Basics />
            <Skills />
            <MyBenefit />
            <Experience />
            <Experience2 />
            {/* <Work /> */}
            <ContactForm />
            <Resumeinreact />
            {/* <Link to="/">Go Back</Link> */}
            </div>
        </div>
        // </ThemeSelector> 
    )
}

export default Resume




