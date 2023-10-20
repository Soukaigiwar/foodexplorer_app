import { Container } from "./styles.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Card } from "../Card"; 
import carretLeft from "../../assets/carret_left.svg";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export function Carrousel() {
    return (
        <Container>
            <h2>Refeições</h2>
            <Swiper
                modules={[Navigation]}
                slidesPerView={3.5}
                spaceBetween={27}
                loop={true}
                navigation
                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
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