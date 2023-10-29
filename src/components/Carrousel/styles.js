import styled from "styled-components";
import { devices } from "../../styles/media";

export const Container = styled.div`
    margin: 0 0 2.4rem 2.4rem;
    position: relative;

    > .shadow_layer {
        display: none;
    }

    > .carret_left,
      .carret_right {
        display: none;
    }

    > h2 {
        color: var(--light-light-300, #E1E1E6);
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; 
        margin-bottom: 24px;
    }

    > .slide_card {
        width: 210px;
        height: 800px;
        /* height: 292px; */
        /* background-color: white; */
        padding: 2.4rem;
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

    @media (${devices.desktop}) {
        margin: 0 12.3rem 47px 12.3rem;

        > .shadow_layer {
            display: initial;
            position: absolute;
            top: 68px;
            width: 100%;
            height: 462px;
            background: rgb(0,0,0);
            background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 100%);
            z-index: 1000;
            pointer-events: none;
        }

        > .carret_left,
          .carret_right {
            position: absolute;
            top: 280px;
            left: 20px;
            z-index: 1001;
            pointer-events: none;
            display: unset;
        }

        > .carret_right {
            right: 10px;
            transform: rotate(180deg);
        }

        > h2 {
            font-size: 32px;
        }
    }
`
