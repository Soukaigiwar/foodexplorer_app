import { Container } from "./styles.js";
import dishImage from "../../assets/ravanello_200.png";
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

export function Card({ data }) {
    const [quantity, setQuantity] = useState(1);
    const [isAdminRole, setIsAdminRole] = useState(false);

    const { isAdmin } = useRole();
    const { addItemToCart } = useCart();
    
    const navigate = useNavigate();

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
                <img
                    src={isAdminRole ?
                        edit : favorite
                    } alt=""
                />
            </div>
            <img src={dishImage} alt="" onClick={() => { handleDetails(data.id); }} />
            <h2 onClick={() => { handleDetails(data.id); }}>{data.title} &gt;</h2>
            <p onClick={() => { handleDetails(data.id); }}>{data.description}</p>
            <h3 onClick={() => { handleDetails(data.id); }}>R$ {handleZeros(data.price)}</h3>
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
                    icon={""}
                    title="incluir"
                    onClick={ addItem }
                />
            </div>
        </Container>
    );
}
