import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    margin: 0 12.3rem 47px 12.3rem;
    height: 52.9rem;
    
    position: relative;

    > .shadow_layer {
        position: absolute;
        top: 68px;
        width: 100%;
        height: 462px;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 100%);
        /* background: linear-gradient(90deg, rgba(250,0,0,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(250,0,0,1) 100%); */
        z-index: 1000;
        pointer-events: none;
    }

    > .carret_left {
        position: absolute;
        top: 280px;
        left: 20px;
        z-index: 1001;
        pointer-events: none;
    }

    > .carret_right {
        position: absolute;
        top: 280px;
        right: 10px;
        z-index: 1001;
        pointer-events: none;
        transform: rotate(180deg);
    }

    > h2 {
        color: var(--light-light-300, #E1E1E6);
        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; 
        margin-bottom: 23px;
    }

    > .slide_card {
        width: 130px;
        height: 462px;
        background-color: white;
        padding: 24px;
    }

    > .swiper {
        width: 100%;
        height: 100%;
        z-index: 999;
    }

    .swiper-button-next,
    .swiper-button-prev {
        position: absolute !important;
        right: -5px;
        padding: 30px;
        top: 220px !important;
        color: transparent !important;
        stroke: #FFFFFF !important;
        z-index: 2000;
    }
`