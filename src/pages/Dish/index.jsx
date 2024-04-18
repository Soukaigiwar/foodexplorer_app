/* eslint-disable no-unused-vars */
import { Header } from "../../components/Header";
import { BackTextButton } from "../../components/BackTextButton";
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";

import { Container, Content } from "./styles";
import dishPlaceHolder from "../../assets/dish_place_holder.png";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import orderBag from "../../assets/order_bag.svg";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { handleZeros } from "../../utils/string";
import { useCart } from "../../hooks/cart.jsx";
import { useRole } from "../../hooks/role";
import { useNavigate } from "react-router-dom";

export function Dish() {
    const params = useParams();
    const { addItemToCart } = useCart();

    const [isAdminRole, setIsAdminRole] = useState(false);

    const navigate = useNavigate();
    
    const { isAdmin } = useRole();
    const [data, setData] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [search, setSearch] = useState("");
    const [quantity, setQuantity] = useState(1);

    const dishImageUrl = data.image_filename
        ? `${api.defaults.baseURL}/files/${data.image_filename}`
        : dishPlaceHolder;

    function handleIncrement() {
        if (quantity < 20)
            setQuantity(quantity + 1);
    }

    function handleDecrement() {
        if (quantity > 1)
            setQuantity(quantity - 1);
    }
    
    function handleKeyDown(e) {
        
        if (e.key === "+" || e.key === "ArrowUp" || e.key === "ArrowRight")
            handleIncrement();

        if ((e.key === "-" || e.key === "ArrowDown" || e.key === "ArrowLeft") && quantity > 1)
            handleDecrement();
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
        async function fetchDish() {

            let response = await api.get(`/dishes/${params.id}`);

            if (search) {
                response = await api.get(`/dishes/${params.search}`);
            }

            const ingredient = (response.data.ingredients);

            setData(response.data);
            setIngredients(ingredient);
        }

        fetchDish();
    }, [search]);

    useEffect(() => {
        const checkIfUserRoleIsAdmin = async () => {
            const result = await isAdmin();
            setIsAdminRole(result);
        };
    
        checkIfUserRoleIsAdmin();
    }, []);

    return (
        <Container>
            <Header />
            <Content>
                <BackTextButton />
                <div className="dish">
                    <div className="image">
                        <img src={dishImageUrl} alt="Imagem do prato escolhido." />
                    </div>
                    <div className="details">
                        <h2>{data.title}</h2>

                        <p>{data.description}</p>

                        <div className="tags">
                            {
                                ingredients.map(ingredient => (
                                    <Tag
                                        key={String(ingredient.id)}
                                        title={ingredient.title}
                                    />
                                ))
                            }
                        </div>
                        <div className="actions">
                        {!isAdminRole ? (
                            <>
                                <div>
                                    <TextButton
                                        tabIndex="0"
                                        icon={minus}
                                        alt="Diminuir quantidade."
                                        onKeyDown={handleKeyDown}
                                        onClick={ handleDecrement }
                                    />
                                    <span>
                                        {quantity}
                                    </span>
                                    <TextButton
                                        tabIndex="1"
                                        icon={plus}
                                        alt="Aumentar quantidade."
                                        onKeyDown={handleKeyDown}
                                        onClick={ handleIncrement }
                                    />
                                </div>
                                <Button
                                    icon={orderBag}
                                    $bgcolor="TOMATO_100"
                                    title={`pedir ∙ R$ ${handleZeros(String(data.price * quantity))}`}
                                    onClick={ addItem }
                                />
                            </>
                        ) : (
                            <div>
                                <Button
                                    className="button"
                                    $bgcolor="TOMATO_100"
                                    icon={""}
                                    title="Editar prato"
                                    onClick={() => handleEditItem(data.id) }
                                />
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Container>
    );
}