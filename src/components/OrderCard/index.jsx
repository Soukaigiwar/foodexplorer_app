import { Container } from "./styles";
import dishImage from "../../assets/ravanello_200.png";
import { TextButton } from "../TextButton";
import { handleZeros } from "../../utils/string";

export function OrderCard({ data, ...rest }) {
    return (
        <Container {...rest}>
            <img src={dishImage} alt="Imagem do Prato" />
            <div>
                <p>1 x {data.title}<span>R$ {handleZeros(data.price)}</span></p>
                <TextButton
                    title="Excluir"
                />
            </div>
        </Container>
    );
};
