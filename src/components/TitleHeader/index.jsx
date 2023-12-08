import { Container } from "./styles.js";
import headerImage from "../../assets/header_img.png";

export function TitleHeader() {
    return (
        <Container>
            <div className="background">
                <img src={headerImage} alt="" />
                <div className="text">
                    <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
                
            </div>
        </Container>
    );
}
