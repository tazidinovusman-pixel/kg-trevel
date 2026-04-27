import React from 'react';
import styles from './index.module.css';
import Logo1 from '../../../public/logo1.png'

const AboutCompanyPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.contentWrapper}>
        
        {/* Левая часть: Фото */}
        <div className={styles.imageSection}>
          <img 
          
            src={Logo1}
            alt="О нашей компании" 
            className={styles.mainImg}
          />
          {/* <div className={styles.experienceBadge}>
            <h3>10+</h3>
            <p>лет опыта</p>
          </div> */}
        </div>

        {/* Правая часть: Описание */}
        <div className={styles.textSection}>
          <h1 className={styles.title}>О компании <span>TUNDUK TRAVEL</span></h1>
          <p className={styles.description}>
            Мы — команда профессионалов, влюбленных в горы и культуру Кыргызстана. 
            Наша миссия — открывать для вас самые сокровенные уголки «Небесных гор», 
            предоставляя сервис международного уровня и незабываемые впечатления.
          </p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <h4>Индивидуальный подход</h4>
              <p>Разрабатываем маршруты, исходя из ваших пожеланий и уровня подготовки.</p>
            </div>
            <div className={styles.featureItem}>
              <h4>Безопасность</h4>
              <p>Наши гиды имеют сертификаты международного образца, а транспорт проходит строгий контроль.</p>
            </div>
          </div>

          <button className={styles.contactBtn}>Связаться с нами</button>
        </div>

      </div>
    </div>
  );
};

export default AboutCompanyPage;