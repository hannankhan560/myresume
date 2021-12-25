import React, {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";

function Layout() {
    const[theme, setTheme] = useState('dark-theme')
    return (
        <section className='main-layout'>
            <div className='row'>
                <Link to="/resume-light" className='all-center theme-selector-light' >
                    <div className='layout-content'>
                        <h2>Light Version</h2>                    
                    </div>
                </Link>
                <Link to="/resume-dark" className='all-center theme-selector-dark' >
                    <div className='layout-content'>
                        <h2>Dark Version</h2>
                    </div>
                </Link>
            <Outlet />
        </div>
        </section>
    )
}

export default Layout
