import {useState, useEffect} from 'react'
import './index.css'
import Navbar from './components/layout/navbar.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import Marquee from './components/sections/Marquee.jsx';
import ProjectsSection from './components/sections/Projects.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';
import Footer from './components/layout/Footer.jsx';

export default function App() {
    const [dark, setDark] = useState(false);
    const [italian, setItalian] = useState(false);
    
    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    return (
        <div>
            <div id='top'></div>
            <Navbar dark={dark} setDark={setDark}/>
            <HeroSection/>
            <Marquee/>
            <ProjectsSection id='works'/>
            <AboutSection id='about'/>
            <ContactSection id='contacts'/>
            <Footer/>
        </div>
    );
}