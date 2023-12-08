import { Container } from "./styles";
import logo from "../../assets/poligon.svg";
import { useNavigate } from "react-router-dom";

export function Brand() {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate("/")}>
            <img src={logo} alt="logomarca do food explorer" />
            <h1>food explorer</h1>
        </Container>
    );
}
