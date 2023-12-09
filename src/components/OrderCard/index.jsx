import { Container, Price } from "./styles";
import dishImage from "../../assets/ravanello_200.png";
import { TextButton } from "../TextButton";
import { handleZeros } from "../../utils/string";
import { useCart } from "../../hooks/cart";

export function OrderCard({ data, paymentStatus, ...rest }) {
    const { deleteItem } = useCart();

    const handleDeleteItem = (dish_id) => {
        deleteItem(dish_id);
    };

    return (
        <Container {...rest}>
            <img src={dishImage} alt="Imagem do Prato" />
            <div>
                <p>
                    {data.quantity} x {data.title}
                    <Price>R$ {handleZeros(data.quantity * data.price)}</Price>
                </p>
                {paymentStatus === "processing" &&
                    <TextButton
                        title="Excluir"
                        onClick={() => handleDeleteItem(data.dish_id)}
                    />
                }
            </div>
        </Container>
    );
}
