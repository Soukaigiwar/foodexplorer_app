import { Container } from "./styles";
import dishImage from "../../assets/ravanello_200.png";
import { TextButton } from "../TextButton";

export function OrderCard() {
    return (
        <Container>
            <img src={dishImage} alt="Imagem do Prato" />
            <div>
                <p>1 x Pastel de queijo <span>R$ 12,00</span></p>
                <TextButton
                    title="Excluir"
                />
            </div>
        </Container>
    );
};
