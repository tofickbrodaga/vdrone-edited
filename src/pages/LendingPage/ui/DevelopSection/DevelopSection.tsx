import BlurText from "../../../../components/BlurText.tsx";
import droneBg from "../../../../assets/dronesBlur.png"; 

export const DevelopSection = () => {
    return (
        <div className='develop'>
            <h2 className='title'>
                Мы разрабатываем решения для современных вызовов в разных областях
            </h2>
            
            <div className="realms">
                <div className="realm">
                    <img src={droneBg} className="drone-bg" alt="" />
                    <BlurText animateBy={'words'} direction={'top'} delay={300} text={'агропромышленные технологии'}/>
                </div>
                <div className="realm">
                    <img src={droneBg} className="drone-bg" alt="" />
                    <BlurText animateBy={'words'} direction={'top'} delay={300} text={'промышленная безопасность'}/>
                </div>
                <div className="realm">
                    <img src={droneBg} className="drone-bg" alt="" />
                    <BlurText animateBy={'words'} direction={'top'} delay={300} text={'мониторинг территорий'}/>
                </div>
                <div className="realm">
                    <img src={droneBg} className="drone-bg" alt="" />
                    <BlurText animateBy={'words'} direction={'top'} delay={300} text={'инспекция ЛЭП'}/>
                </div>
            </div>
        </div>
    )
}