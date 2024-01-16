import { Container, Price } from "./styles";
import dishPlaceHolder from "../../assets/dish_place_holder.png";
import { TextButton } from "../TextButton";
import { handleZeros } from "../../utils/string";
import { useCart } from "../../hooks/cart";
import { api } from "../../services/api";


export function OrderCard({ data, paymentStatus, ...rest }) {
    const { deleteItem } = useCart();

    const dishImageUrl = data.image_filename
        ? `${api.defaults.baseURL}/files/${data.image_filename}`
        : dishPlaceHolder;

    const handleDeleteItem = (dish_id) => {
        deleteItem(dish_id);
    };

    return (
        <Container {...rest}>
            <img src={dishImageUrl} alt="Imagem do Prato" />
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
