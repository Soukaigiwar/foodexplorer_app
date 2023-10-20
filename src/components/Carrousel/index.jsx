import { useEffect, useState, useRef } from 'react';
import { Container } from "./styles.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Card } from "../Card";
import carretLeft from "../../assets/carret_left.svg";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export function Carrousel({ title }) {
    let slidesQt;
    let setNav;

    slidesQt = getWindowWidth() > 428 ? 3.5 : 1.5;

    setNav = getWindowWidth() > 428 ? 'navigation' : '';

    const [slides, setSlides] = useState(slidesQt);
    const [navigationAvailable, setNavigationAvailable] = useState(setNav);
    
    function getWindowWidth() {
        const { innerWidth } = window;
        return innerWidth;
    }

    useEffect(() => {
        function handleWindowResize() {
            getWindowWidth() > 428 ? setSlides(3.5) : setSlides(1.5);
            getWindowWidth() > 428 ? setNavigationAvailable("navigation") : setNavigationAvailable("");
            console.log(slides, navigationAvailable);
            return slides;
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [getWindowWidth()]);

    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                modules={[Navigation]}
                slidesPerView={slides}
                spaceBetween={27}
                loop={true}
                navigation
                
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