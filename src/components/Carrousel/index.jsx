import { useState, useLayoutEffect } from 'react';
import { Container } from "./styles.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Card } from "../Card";
import carretLeft from "../../assets/carret_left.svg";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export function Carrousel({ title }) {
    const [navigationAvailable, setNavigationAvailable] = useState(false);
    const [slidesInCarrousel, setSlidesInCarrousel] = useState(3.5);
    const [spaceBetweenCards, setSpaceBetweenCards] = useState(27);

    function handleWindowResize() {
        if (window.innerWidth < 428) {
            setNavigationAvailable(false);
            setSlidesInCarrousel(1.9);
            setSpaceBetweenCards(16);
        } else {
            setNavigationAvailable(true);
            setSlidesInCarrousel(3.5);
            setSpaceBetweenCards(27);
        }
    };

    useLayoutEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                modules={[Navigation]}
                slidesPerView={slidesInCarrousel}
                spaceBetween={spaceBetweenCards}
                loop={true}
                navigation={navigationAvailable}
                // className={mobileOrDesktopView}
            >
                <SwiperSlide className="slide_card"><Card /></SwiperSlide>
                <SwiperSlide className="slide_card"><Card /></SwiperSlide>
                <SwiperSlide className="slide_card"><Card /></SwiperSlide>
                <SwiperSlide className="slide_card"><Card /></SwiperSlide>
                <SwiperSlide className="slide_card"><Card /></SwiperSlide>
                <SwiperSlide className="slide_card"><Card /></SwiperSlide>
                <SwiperSlide className="slide_card"><Card /></SwiperSlide>
                <SwiperSlide className="slide_card"><Card /></SwiperSlide>
            </Swiper>
            <div className="shadow_layer"></div>
            <div className="carret_left"><img src={carretLeft} /></div>
            <div className="carret_right"><img src={carretLeft} /></div>
        </Container>
    );
};