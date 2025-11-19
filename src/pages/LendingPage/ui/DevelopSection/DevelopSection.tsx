import BlurText from "../../../../components/BlurText.tsx";

export const DevelopSection = () => {
    return (
        <div className='develop'>
            <h2 className={'title'}>Мы разрабатываем решения для современных вызовов в разных областях</h2>
            <div className="realms">
                <div className="realm">
                    <BlurText animateBy={'words'} direction={'top'} delay={300} text={'агропромышленные технологии'}/>
                </div>
                <div className="realm">
                    <BlurText animateBy={'words'} direction={'top'} delay={300} text={'промышленная безопасность'}/>
                </div>

                <div className="realm">
                    <BlurText animateBy={'words'} direction={'top'} delay={300} text={'мониторинг территорий'}/>
                </div>
                <div className="realm">
                    <BlurText animateBy={'words'} direction={'top'} delay={300} text={'патрулирование протяжённых объектов'}/>
                </div>
            </div>
        </div>
    )
}