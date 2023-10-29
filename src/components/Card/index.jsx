import { Container } from "./styles.js";
import dishImage from "../../assets/ravanello_200.png";
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";
import favorite from "../../assets/hearth.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import { handleZeros } from "../../utils/string.js";

export function Card({ data }) {
    return (
        <Container>
            <div className="favorite"><img src={favorite} alt="" /></div>
            <a href="#"><img src={dishImage} alt="" /></a>
            <a href="#"><h2>{data.title} &gt;</h2></a>
            <p>{data.description}</p>
            <h3>R$ {handleZeros(data.price)}</h3>
            <div className="actions">
                <div>
                    <TextButton icon={minus} alt="Diminuir quantidade." />
                    <span>01</span>
                    <TextButton icon={plus} alt="Aumentar quantidade." />
                </div>
                <Button className="button" icon={''} title="incluir" />
            </div>
        </Container>
    );
};
