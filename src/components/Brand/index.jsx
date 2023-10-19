import { Container } from "./styles";
import logo from "../../assets/poligon.svg";

export function Brand() {
    return (
        <Container>
            <img src={logo} alt="logomarca do food explorer" />
            <h1>food explorer</h1>
        </Container>
    );
};
