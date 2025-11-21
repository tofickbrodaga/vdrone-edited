import { useState } from 'react';
import logo from "../../assets/vdrone.svg";
import Scene3D from "../../components/Scene3D/Scene3D.tsx";
import { MainSection } from "./ui/MainSection/MainSection.tsx";
import { AboutusSection } from "./ui/AboutusSection/AboutusSection.tsx";
import { MissionSection } from "./ui/MissionSection/MissionSection.tsx";
import { DevelopSection } from "./ui/DevelopSection/DevelopSection.tsx";
import { ContactsSection } from "./ui/ContactsSection/ContactsSection.tsx";
import { MoreInfoSection } from "./ui/MoreInfoSection/MoreInfoSection.tsx"; 
import type { DroneParts } from '../../components/DroneConfigurator';
import "../../App.css";

const DRONE_VARIANTS = [
    { id: 'quad', label: 'КВАДРОКОПТЕР', stands: 'low_quad' },
    { id: 'hexa', label: 'ГЕКСАКОПТЕР', stands: 'medium_hexa' },
    { id: 'octo', label: 'ОКТОКОПТЕР', stands: 'high_octo' }
] as const;

export const LendingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(2);
    const currentVariant = DRONE_VARIANTS[currentIndex];
    
    const droneParts: DroneParts = {
        hull: currentVariant.id,
        engines: currentVariant.id,
        stands: currentVariant.stands as DroneParts['stands'],
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % DRONE_VARIANTS.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + DRONE_VARIANTS.length) % DRONE_VARIANTS.length);
    };

    return (
        <div className="App">
            <header className="header">
                <img src={logo} className="App-logo" alt="logo"/>
                <nav className='header_nav'>
                    <a href="#about">о нас</a>
                    <a href="#mission">миссия</a>
                    <a href="#develop">направления</a>
                    <a href="#contacts">контакты</a>
                </nav>
            </header>

            <div className="configurator-block">
                <div className="scene-container full-width">
                    <Scene3D parts={droneParts} />
                </div>

                <div className="drone-selector-ui">
                    <button className="arrow-btn" onClick={handlePrev}>
                        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 20L58 20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                            <path d="M20 20L35 5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                            <path d="M20 20L35 35" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                        </svg>
                    </button>

                    <div className="drone-label">
                        {currentVariant.label}
                    </div>
                    <button className="arrow-btn" onClick={handleNext}>
                        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 20L2 20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                            <path d="M40 20L25 5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                            <path d="M40 20L25 35" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className='content'>
                
                <div id="about">
                    <MainSection />
                </div>
                
                <div id="mission">
                    <MissionSection/>
                </div>

                <AboutusSection />
                
                <div id="develop">
                    <DevelopSection />
                </div>
                <MoreInfoSection />

                <div id="contacts">
                    <ContactsSection/>
                </div>

                <footer className="footer">
                   <div className="left">
                       <h4>ООО «вэдрон»</h4>
                       <p>354340, <br/> пгт. Сириус, <br/> Триумфальный проезд, <br/> д.1</p>
                   </div>
                    <div className='center'>
                        <ul>
                            <li><a href="#about" style={{color: 'inherit', textDecoration: 'none'}}>о нас</a></li>
                            <li><a href="#mission" style={{color: 'inherit', textDecoration: 'none'}}>миссия</a></li>
                            <li><a href="#develop" style={{color: 'inherit', textDecoration: 'none'}}>направления</a></li>
                            <li><a href="#contacts" style={{color: 'inherit', textDecoration: 'none'}}>контакты</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <svg width="76" height="34" viewBox="0 0 76 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59.9924 2.75C57.3553 2.75 54.7774 3.55642 52.5848 5.06729C50.3921 6.57816 48.6832 8.72562 47.674 11.2381C46.6648 13.7506 46.4008 16.5153 46.9153 19.1825C47.4297 21.8497 48.6996 24.2997 50.5643 26.2227C52.429 28.1457 54.8048 29.4553 57.3912 29.9858C59.9776 30.5163 62.6585 30.244 65.0948 29.2033C67.5312 28.1626 69.6136 26.4003 71.0787 24.1391C72.5437 21.8779 73.3257 19.2195 73.3257 16.5C73.3259 14.6943 72.9811 12.9062 72.3111 11.2379C71.6411 9.56963 70.659 8.05378 69.4208 6.77695C68.1827 5.50011 66.7128 4.4873 65.095 3.79635C63.4773 3.1054 61.7434 2.74985 59.9924 2.75ZM64.2317 23.5846C64.1818 23.713 64.1059 23.8288 64.009 23.9244C63.9122 24.02 63.7966 24.0931 63.6701 24.1389C63.5436 24.1847 63.409 24.202 63.2755 24.1898C63.1419 24.1775 63.0125 24.136 62.8957 24.068L59.2762 21.1676L56.9531 23.3778C56.8992 23.4188 56.8361 23.4453 56.7697 23.4546C56.7033 23.464 56.6357 23.4559 56.5731 23.4313L57.0184 19.3222L57.0327 19.3338L57.0418 19.2527C57.0418 19.2527 63.5551 13.1374 63.8205 12.8768C64.0891 12.6169 64.0005 12.5606 64.0005 12.5606C64.0157 12.2436 63.5184 12.5606 63.5184 12.5606L54.8884 18.2861L51.2944 17.0239C51.2944 17.0239 50.7424 16.8197 50.6904 16.3708C50.6357 15.9253 51.3124 15.6833 51.3124 15.6833L65.6017 9.82917C65.6017 9.82917 66.7764 9.28946 66.7764 10.1833L64.2317 23.5846Z" fill="black"/>
                        </svg>
                        info@vdrone.tech
                    </div>
                </footer>
            </div>
        </div>
    );
};