import './MoreInfoSection.css';

export const MoreInfoSection = () => {
    return (
        <section className="more-info-section">
            <div className="content-stack">
                <h2 className="big-title">
                    УЗНАТЬ<br />ПОДРОБНОСТИ
                </h2>
                <div className="glowing-arrow">
                    <svg width="40" height="120" viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 0L20 115" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M5 95L20 115L35 95" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div className="action-wrapper">
                    <a href="mailto:info@vdrone.tech" className="btn-write">
                        НАПИСАТЬ
                    </a>
                    
                    <div className="pixel-drone-decoration">
                        <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="20" y="10" width="20" height="6" fill="white"/>
                            <rect x="25" y="6" width="10" height="4" fill="white"/>
                            <rect x="0" y="8" width="12" height="2" fill="white"/>
                            <rect x="48" y="8" width="12" height="2" fill="white"/>
                            <rect x="2" y="12" width="2" height="6" fill="white"/>
                            <rect x="56" y="12" width="2" height="6" fill="white"/>
                            <path d="M5 4L9 8" stroke="white" strokeWidth="2"/>
                            <path d="M55 4L51 8" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};