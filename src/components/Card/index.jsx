import { Container } from "./styles.js";
import dishImage from "../../assets/ravanello_200.png"
import favorite from "../../assets/hearth.svg";

export function Card() {
    return (
        <Container>
            <img src={dishImage} alt="" />
            <h2>Spaguetti Gambe</h2>
            <p>Massa fresca com camarões e pesto.</p>
            <h3>R$ 79,97</h3>
            <div className="favorite"><img src={favorite} alt="" /></div>
        </Container>
    );
};
