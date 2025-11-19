import type { DroneParts } from '../../../../components/DroneConfigurator';
import styles from './MainSection.module.css';

interface MainSectionProps {
  droneParts: DroneParts;
  selectPreset: (preset: 'octo' | 'hexa' | 'quad') => void;
}

export const MainSection = ({ droneParts, selectPreset }: MainSectionProps) => {
    return (
        <main className={styles.main}>
            <div className={styles.contentWrapper}>
                <div className={styles.infoBlock}>
                    <h1>Кто мы?</h1>
                    <p>мы - российская технологическая команда, разрабатывающая
                        универсальные платформы беспилотных летательных аппаратов
                        с модульной архитектурой.</p>
                </div>

                <div className="controls-container">
                    <h2>КОНФИГУРАТОР</h2>
                    <div className="controls-group">
                        <h4>Тип рамы</h4>
                        <button className={droneParts.hull === 'octo' ? 'active' : ''} onClick={() => selectPreset('octo')}>Октокоптер</button>
                        <button className={droneParts.hull === 'hexa' ? 'active' : ''} onClick={() => selectPreset('hexa')}>Гексакоптер</button>
                        <button className={droneParts.hull === 'quad' ? 'active' : ''} onClick={() => selectPreset('quad')}>Квадрокоптер</button>
                    </div>
                </div>
            </div>
        </main>
    );
};