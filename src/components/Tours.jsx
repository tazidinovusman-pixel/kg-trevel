import React from 'react';
import style from './Tours.module.css';

const Tours = ({ items }) => {
    const getBadgeClass = (badge) => {
    switch (badge) {
      case 'ХИТ': return style.badgeHit;
      case 'АКЦИЯ': return style.badgeSale;
      case 'ЛУЧШАЯ ЦЕНА': return style.badgeBest;
      case 'ИСТОРИЯ': return style.badgeHistory;
      default: return style.badgeDefault;
    }
  };
 return (
    <div className={style.toursSection}>
      <div className={style.grid}>
        {items.map((tour) => (
          <div key={tour.id} className={style.card}>
            <div className={style.imageBlock} style={{ backgroundImage: `url(${tour.img})` }}>
              {tour.badge && (
                <span className={`${style.badge} ${getBadgeClass(tour.badge)}`}>
                  {tour.badge}
                </span>
              )}
            </div>
            {/* ... остальной контент карточки (title, price и т.д.) ... */}
            <div className={style.content}>
               <h3>{tour.title}</h3>
               <p className={style.subtitle}>{tour.subtitle}</p>
               <div className={style.priceBlock}>
                 <span className={style.currentPrice}>{tour.price} сом</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;