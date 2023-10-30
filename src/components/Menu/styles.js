import styled from 'styled-components';
import { devices } from "../../styles/media";

export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 100%;

    width: 100%;
    height: 100%;
    z-index: 1000;

    display: grid;
    grid-template-rows: 114px auto 77px;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    transition: transform 0.5s ease-in-out;
    transform: ${({ menuisvisible }) => (menuisvisible === "true" ? "translateX(0%)" : "translateX(100%)")};



    @media (${devices.desktop}) {
    display: grid;

    }
`

export const Header = styled.div`
  grid-area: header;
  width: 100%;
  height: 114px;

  padding: 64px 28px 32px;

  background-color: ${({ theme }) => theme.COLORS.BG_600};

  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;

    display: flex;
    align-items: center;
    gap: 16px;

    img {
        color: white;
        width: 18px;
    }
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 2.11rem;
        line-height: 25px;

      color: white;
    }
  }
`

export const Content = styled.div`
    grid-area: content;
    padding: 36px 28px;
    background-color: ${({ theme }) => theme.COLORS.BG_400};

    input {
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.BG_900};
        color: ${({ theme }) => theme.COLORS.FG_100};
        display: flex;
        height: 48px;
        padding: 12px 44px;
        justify-content: center;
        align-items: center;
        gap: 14px;
        flex-shrink: 0;
        align-self: stretch;
        border: none;
    }

    img {
        position: absolute;
        margin-left: 14px;
        margin-top: 12px;
    }

    div:nth-child(2) {
        margin-top: 3.2rem;
        height: 5.4rem;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BG_1000};

    }
    div p {
        
        color: ${({ theme }) => theme.COLORS.FG_100};
        font-family: 'Poppins';
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: 140%;
;
    }
`

// export const Nav = styled.nav`
//   margin-top: 36px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 10px;

//   > button {
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 300;
//     font-size: 24px;
//     line-height: 140%;

//     padding: 10px;
//     width: 100%;
//     border-bottom: 1px solid ${({ theme }) => theme.COLORS.BG_1000};

//     color: ${({ theme }) => theme.COLORS.FG_300};

//     background: none;
//     border: none;
//     text-align: left;
//   }
// `

// export const NavLink = styled(Link)`
//   font-family: 'Poppins';
//   font-style: normal;
//   font-weight: 300;
//   font-size: 24px;
//   line-height: 140%;

//   padding: 10px;
//   width: 100%;
//   border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

//   color: ${({ theme }) => theme.COLORS.LIGHT_300};
// `