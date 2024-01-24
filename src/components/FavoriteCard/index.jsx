import { Container } from "./styles";
import dishPlaceHolder from "../../assets/dish_place_holder.png";
import { TextButton } from "../TextButton";
import { api } from "../../services/api";


export function FavoriteCard({ data, ...rest }) {
    const dishImageUrl = data.image_filename
        ? `${api.defaults.baseURL}/files/${data.image_filename}`
        : dishPlaceHolder;

    const handleDeleteItemFromFavorites = (dish_id) => {
        // deleteItem(dish_id);
    };

    return (
        <Container {...rest}>
            <img src={dishPlaceHolder} alt="Imagem do Prato" />
            <div>
                <p>{data.title}</p>
                <TextButton
                    key={data.dish_id}
                    title="Remover dos Favoritos"
                    onClick={() => handleDeleteItemFromFavorites(data.dish_id)}
                />
            </div>
        </Container>
    );
}
