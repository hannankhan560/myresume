import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Introduction from '../components/Introduction'
import Resumeinreact from '../components/Resumeinreact'
import MyBenefit from '../components/MyBenefit'
import MyQuote from '../components/MyQuote'
import Experience from '../components/Experience'

function Resume({theme}) {
        
    return (
        // <ThemeSelector>  
        <div className={theme} >
            <div id="fullpage" className='resume-wrapper'>
            <Introduction />
            <MyQuote />
            <MyBenefit />
            <Experience />
            <Resumeinreact />
            {/* <Link to="/">Go Back</Link> */}
            </div>
        </div>
        // </ThemeSelector> 
    )
}

export default Resume




