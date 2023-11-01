import { Container } from "./styles.js";
import dishImage from "../../assets/ravanello_200.png";
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";
import favorite from "../../assets/hearth.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import { handleZeros } from "../../utils/string.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleQuantity } from "../../utils/item.js";

export function Card({ data }) {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    function handleDetails(id) {
        navigate(`/dishes/${id}`);
    };

    // function handleQuantity(qt) {
    //     if (quantity > 1)
    //         setQuantity(prevState => prevState + qt);

    //     if (quantity === 1 && qt > 0)
    //         setQuantity(prevState => prevState + qt);
    // };

    return (
        <Container>
            <div className="favorite"><img src={favorite} alt="" /></div>
            <img src={dishImage} alt="" onClick={() => { handleDetails(data.id) }} />
            <h2 onClick={() => { handleDetails(data.id) }}>{data.title} &gt;</h2>
            <p onClick={() => { handleDetails(data.id) }}>{data.description}</p>
            <h3 onClick={() => { handleDetails(data.id) }}>R$ {handleZeros(data.price)}</h3>
            <div className="actions">
                <div>
                    <TextButton
                        icon={minus}
                        alt="Diminuir quantidade."
                        onClick={() => { setQuantity(handleQuantity(quantity, -1)) }}
                        onMouseDown={() => { setQuantity(handleQuantity(quantity, -1)) }}
                    />
                    <span>
                        {quantity.toString().padStart(2, 0)}
                    </span>
                    <TextButton
                        icon={plus}
                        alt="Aumentar quantidade."
                        onClick={() => { setQuantity(handleQuantity(quantity, 1)) }}
                    />
                </div>
                <Button className="button" icon={''} title="incluir" />
            </div>
        </Container>
    );
};
