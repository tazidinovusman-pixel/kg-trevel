import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Hero.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const mockApi = [
    {
        image: "https://kg.kabar.kg/site/assets/files/68094/15762598723588522_5209.jpg",
        title: "Гастрономические туры Иссык-Куля",
        description: "Успей забронировать тур на острова, количество мест ограничено",

    },
    {
        image: "https://www.orexca.com/img/kyrgyzstan/burana-tower.jpg",
        title: "Отдых в Чолпон-Ате",
        description: "Успей забронировать тур на острова, количество мест ограничено",
    }

];
const mainSlides = [
    {
        image: "https://dwc.kg/wp-content/uploads/2023/05/1647363922_10-vsegda-pomnim-com-p-ozero-chatir-kul-foto-11.jpg",
        title: "Тур на Чатыр-Куль в 2024 году",
        description: "Успей забронировать тур на острова, количество мест ограничено"

    },

    {

        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/e3/37/06/das-sind-die-jeti-oguz.jpg?w=900&h=500&s=1",
        title: "Путешествие в Жети-Огуз",
        description: "Успей забронировать тур на острова, количество мест ограничено"
    },

    {
        image: "https://issyk-kul-rest.narod.ru/img/cholpon-ata-01.jpg",
        title: "Чолпон-Ата ",
        description: "Успей забронировать тур на острова, количество мест ограничено"
    }

];

const Hero = () => {
    return (
        <div className={style.hero}>
            <div className={style.slider}>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {mainSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className={style.slideContent} style={{ backgroundImage: `url(${slide.image})` }}>
                                <div className={style.slideText}>
                                  <h1>{slide.title}</h1>
                                    <p>{slide.description}</p>
                                    <button className={style.moreBtn}>Подробнее</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={style.news}>
                {mockApi.map((item, index) => (
                    <div
                        key={index}
                        className={style.newsCard}
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;