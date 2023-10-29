import { Container } from "./styles";
import backArrow from "../../assets/carret_left.svg";

import { useNavigate } from "react-router-dom";

export function BackTextButton() {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    return (
        <Container type="button" onClick={handleBack}>
            <span>
                <img src={backArrow} alt="Voltar a página anterior" />
                Voltar
            </span>
        </Container>
    );
};
