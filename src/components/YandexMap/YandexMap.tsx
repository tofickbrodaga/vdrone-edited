import style from './YandexMap.module.css'
export const YandexMap = () => {
    return (<div className={style.mapContainer}>
        <iframe
            src="https://yandex.ru/map-widget/v1/?ll=39.965957%2C43.412297&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzIxNzAxMDUScNCg0L7RgdGB0LjRjywg0YTQtdC00LXRgNCw0LvRjNC90LDRjyDRgtC10YDRgNC40YLQvtGA0LjRjyDQodC40YDQuNGD0YEsINCi0YDQuNGD0LzRhNCw0LvRjNC90YvQuSDQv9GA0L7QtdC30LQsIDEiCg0j3R9CFTGmLUI%2C&z=16.85"
            width="560" height="400" frameBorder="1" allowFullScreen={true} style={{position: 'relative'}}></iframe>
    </div>)
}