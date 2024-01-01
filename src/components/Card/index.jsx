import { Container } from "./styles.js";
import dishPlaceHolder from "../../assets/dish_place_holder.png";
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";
import favorite from "../../assets/hearth.svg";
import edit from "../../assets/edit.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import { handleZeros } from "../../utils/string.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../hooks/cart.jsx";
import { useRole } from "../../hooks/role";
import { handleQuantity } from "../../utils/item.js";
import { api } from "../../services/api";

export function Card({ data }) {
    const [quantity, setQuantity] = useState(1);
    const [isAdminRole, setIsAdminRole] = useState(false);

    const { isAdmin } = useRole();
    const { addItemToCart } = useCart();
    
    const navigate = useNavigate();

    const dishImageUrl = data.image_filename
        ? `${api.defaults.baseURL}/files/${data.image_filename}`
        : dishPlaceHolder;
    
    function handleDetails(id) {
        navigate(`/dishes/${id}`);
    }

    function addItem(event) {
        event.preventDefault();

        const item = {
            dish_id: data.id,
            title: data.title,
            price: data.price,
            quantity,
            image_title: data.image_title,
            image_filename: data.image_filename,
        };

        addItemToCart(item);
    }

    const handleEditItem = (id) => {
        navigate(`/edit_dish/${id}`);
    };

    useEffect(() => {
        const checkIfUserRoleIsAdmin = async () => {
            const result = await isAdmin();
            setIsAdminRole(result);
        };
    
        checkIfUserRoleIsAdmin();
    }, []);

    return (
        <Container>
            <div className="favorite">
                {isAdminRole ? (
                    <a onClick={() => handleEditItem(data.id) }>
                        <img src={edit} alt="" />
                    </a>
                ) : (
                    <img src={favorite} alt="" />
                )}
            </div>
            <img src={dishImageUrl} alt="" onClick={() => handleDetails(data.id)} />
            <h2 onClick={() => handleDetails(data.id)}>{data.title} &gt;</h2>
            <p onClick={() => { handleDetails(data.id); }}>{data.description}</p>
            <h3 onClick={() => { handleDetails(data.id); }}>R$ {handleZeros(data.price)}</h3>
            {!isAdminRole && (
                <div className="actions">
                    <div>
                        <TextButton
                            icon={minus}
                            alt="Diminuir quantidade."
                            onClick={() => { setQuantity(handleQuantity(quantity, -1)); }}
                        />
                        <span>
                            {quantity.toString().padStart(2, 0)}
                        </span>
                        <TextButton
                            icon={plus}
                            alt="Aumentar quantidade."
                            onClick={() => { setQuantity(handleQuantity(quantity, 1)); }}

                        />
                    </div>
                    <Button
                        className="button"
                        $bgcolor="TOMATO_100"
                        icon={""}
                        title="incluir"
                        onClick={addItem}
                    />
                </div>
            )}
        </Container>
    );
}
