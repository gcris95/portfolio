import React from 'react'
import {useState} from 'react'
import './index.css'
import Project from './components/Project.jsx'
import { HugeiconsIcon } from '@hugeicons/react';
import {GithubIcon, Mail01Icon, Linkedin,InternetIcon, Moon02Icon, Sun02Icon} from '@hugeicons/core-free-icons'

const projects = [
    {
        title: 'Project 1',
        date: '2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['React', 'Tailwind CSS']
    },
        {
        title: 'Project 2',
        date: '2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['React', 'Vue.JS']
    }
];

const contacts = [
    {
        icon: GithubIcon,
        contact: 'github.com/giovannicriscuolo',
        href: 'https://github.com/giovannicriscuolo'
    },
    {
        icon: Mail01Icon,
        contact: 'giovanni.criscuolo@example.com',
        href: 'mailto:giovanni.criscuolo@example.com'
    },
    {
        icon: Linkedin,
        contact: 'linkedin.com/in/giovannicriscuolo',
        href: 'https://linkedin.com/in/giovannicriscuolo'
    },
    {
        icon: InternetIcon,
        contact: 'game development portfolio',
        href: 'https://giovannicriscuolo.example.com'
    },
];

export default function Test() {
    const [dark, setDark] = useState(false);
    const [italian, setItalian] = useState(false);

    return (
        <div>
            <nav className="px-4 md:px-24 py-2 flex sticky top-0 justify-between border-b border-border items-center bg-background opacity-97 z-50"> {/* Header */}
                <h5 className="font-bold">G.Criscuolo</h5>
                <div className="hidden md:flex gap-6 text-normal">
                    <button className="cursor-pointer hover:text-accent font-sans">Works</button>
                    <button className="cursor-pointer hover:text-accent font-sans">About</button>        
                </div>
                <button
                    className="p-2 text-primary hover:text-accent transition-colors cursor-pointer group"
                    onClick={() => setDark(!dark)}
                >
                    <HugeiconsIcon icon={dark ? Sun02Icon : Moon02Icon} className={`w-5 h-5 transition-transform duration-400 ease-out group-hover:scale-110 ${dark ? "group-hover:rotate-180" : "group-hover:rotate-20"}`} />
                </button>
            </nav>   
            <section className="px-4 md:px-24 lg:px-44 xl:px-64 py-20 flex flex-col gap-2 border-b border-border">  {/* Hero */}
                <div>
                    <span className="text-accent uppercase" style={{ fontSize: 'clamp(0.8rem, 2vw, 1.15rem)' }}>UI Designer &amp; Developer</span>
                </div>
                <div className="tracking-tight leading-[1.04] text-foreground pb-4">
                    <h1>Welcome to my portfolio</h1>                    
                </div>
                <div className="mt-2 flex gap-4">
                    <button className="px-3 py-3 bg-primary text-primary-foreground text-sm font-medium hover:opacity-75 transition-opacity cursor-pointer font-sans">View Works</button>
                    <button className="px-3 py-3 border border-border text-sm font-medium hover:bg-muted transition-colors cursor-pointer font-sans">Contact Me</button>
                </div>
            </section>
            <section className="px-4 md:px-24 lg:px-44 xl:px-64 py-20 flex flex-col gap-8 border-b border-border"> {/* Works */}
                <div className="flex gap-2">
                    <span>01</span>
                    <h2>Selected Projects</h2>
                </div>
                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <Project
                            key={index}
                            title={project.title}
                            date={project.date}
                            description={project.description}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </section>
            <section className="px-4 md:px-24 lg:px-44 xl:px-64 py-20 flex flex-col gap-8 border-b border-border"> {/* About */}
                <div className="flex gap-2">
                    <span>02</span>
                    <h2>About</h2>
                </div>
                <div className="flex flex-col md:flex-row-reverse gap-6">  
                    <div className="flex flex-col gap-6">
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="flex flex-col gap-2">
                            {contacts.map((contact, index) => (
                                <a key={index} className="flex gap-2 items-center group" href={contact.href}>
                                    <HugeiconsIcon icon={contact.icon} className="w-5 h-5 text-muted-foreground group-hover:text-accent" />
                                    <p className="text-muted-foreground underline group-hover:text-accent">{contact.contact}</p>
                                </a>
                            ))}
                        </div>
                    </div>                                              
                    <img className="w-100 md:w-75" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="Portrait" />
                </div>            
            </section>
            <footer className="px-4 md:px-24 lg:px-44 xl:px-64 py-4">  {/* Footer */}
                <div className="text-center flex flex-col md:flex-row justify-between">
                    <span>© 2026 Giovanni Criscuolo — Italy</span>
                    <span>Cover image by John Doe</span>
                </div>     
            </footer>
        </div>
    );
}