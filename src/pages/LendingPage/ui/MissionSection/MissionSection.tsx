import adaptation from "../../../../assets/adaptation.png";
import youngcomand from "../../../../assets/youngcomand.png";
import residents from "../../../../assets/residents.png";
import deliveryDrone from "../../../../assets/deliveryDrone.png";
import DecryptedText from "../../../../components/DecryptedText.tsx";

export const MissionSection = () => {
    return (
        <section className="mission">
            <div className='mission_content'>
                <h3>наша миссия</h3>
                <p>обеспечить технологическую независимость России за счёт
                    разработки гибких и доступных платформ
                    для беспилотных решений в ключевых отраслях.</p>
                <div className='mission_content-items'>
                    <div className='mission_content-item'>
                        <img src={adaptation} alt="Адаптация под отрасли"/>
                        <DecryptedText text={'АДАПТАЦИЯ ПОД ОТРАСЛИ'}
                                       speed={60}
                                       maxIterations={10}
                                       revealDirection={'start'}
                                       sequential={true}
                                       animateOn={'view'}

                        />
                    </div>
                    <div className='mission_content-item'>
                        <img src={youngcomand} alt="Молодая команда"/>
                        <DecryptedText text={'МОЛОДАЯ КОМАНДА ИНЖЕНЕРОВ'}  speed={60}
                                       maxIterations={10}
                                       revealDirection={'start'}
                                       sequential={true}
                                       animateOn={'view'}

                        />
                    </div>
                    <div className='mission_content-item'>
                        <img src={residents} alt="Резиденты ИНТЦ Сириус"/>
                        <DecryptedText text={'РЕЗИДЕНТЫ ИНТЦ СИРИУС'}  speed={60}
                                       maxIterations={10}
                                       revealDirection={'start'}
                                       sequential={true}
                                       animateOn={'view'}

                        />
                    </div>
                </div>
            </div>
            <img className='mission_img' src={deliveryDrone} alt="Сириус"/>
        </section>
    )
}