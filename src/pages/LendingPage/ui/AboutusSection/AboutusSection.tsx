import square from "../../../../assets/square.svg";
import architecture from "../../../../assets/architecture.svg";
import caseSvg from "../../../../assets/case.svg";
import flag from "../../../../assets/flag.svg";
import oldcomputer from "../../../../assets/oldcomputer.png";

export const AboutusSection = () => {
    return ( <section className="aboutus">
        <div className="title">
            <h2>мы не просто разрабатываем дроны</h2>
            <p>мы создаём модульную платформу из отечественных комплектующих,
                что объединит невысокую стоимость продукта с полной независимостью от импорта</p>
        </div>
        <div className="aboutus_content">
            <div className="aboutus_content-items">
                <div className="aboutus_content-item">
                    <img src={square} alt="куб"/>
                    <h4>модульный корпус</h4>
                    <p>совместимый с различной нагрузкой</p>
                </div>
                <div className="aboutus_content-item">
                    <img src={architecture} alt="архитектура"/>
                    <h4>открытая архитектура</h4>
                    <p>кастомизация и локальное производство</p>
                </div>
                <div className="aboutus_content-item">
                    <img src={caseSvg} alt="внедрение"/>
                    <h4>простое внедрение</h4>
                    <p>в текущие бизнес процессы</p>
                </div>
                <div className="aboutus_content-item">
                    <img src={flag} alt="флаг"/>
                    <h4>производство</h4>
                    <p>на территории РФ</p>
                </div>
            </div>
            <img src={oldcomputer} alt="old computer" />
        </div>
    </section>)
}