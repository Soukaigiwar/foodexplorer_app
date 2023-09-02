import { Container, BwBrand } from "./styles";
import logo from "../../assets/poligon_grey.svg"

export function Footer() {
    return (
        <Container>
            <BwBrand>
                <img src={logo} alt="logomarca do food explorer" />
                <h2>food explorer</h2>
            </BwBrand>
            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    )
};
