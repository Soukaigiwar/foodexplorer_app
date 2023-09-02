import { Container } from "./styles";
import backArrow from "../../assets/carret_left.svg";

export function BackTextButton() {
    return (
        <Container type="button">
            <span><img src={backArrow} alt="Voltar a página anterior" />Voltar</span>
        </Container>
    );
};
