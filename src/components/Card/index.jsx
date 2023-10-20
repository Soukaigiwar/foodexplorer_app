import { Container } from "./styles.js";
import dishImage from "../../assets/ravanello_200.png";
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";
import favorite from "../../assets/hearth.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

export function Card() {
    return (
        <Container>
            <div className="favorite"><img src={favorite} alt="" /></div>
            <img src={dishImage} alt="" />
            <h2>Spaguetti Gambe</h2>
            <p>Massa fresca com camarões e pesto.</p>
            <h3>R$ 79,97</h3>
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
