import { YandexMap } from "../../../../components/YandexMap/YandexMap.tsx"

export const ContactsSection = () => {
    return (
        <section className="contacts">
        <h2>Контакты</h2>
            <div className='contacts_container'>
                <div className='information'>
                    <h4>Адрес</h4>
                    <p>354340, Краснодарский край, пгт. <br/> Сириус, Триумфальный пр., д. 1</p>
                    <h4>Электронная почта</h4>
                    <p>info@vdrone.tech</p>
                </div>

                <YandexMap />

            </div>
    </section>)
}