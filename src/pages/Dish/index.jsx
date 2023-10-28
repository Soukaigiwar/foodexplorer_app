import { Header } from "../../components/Header";
import { BackTextButton } from "../../components/BackTextButton";
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";

import { Container, Content } from "./styles";
import ravanello_400 from "../../assets/ravanello_400.png"
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import orderBag from "../../assets/order_bag.svg";

export function Dish() {
    return (
        <Container>
            <Header />
            <BackTextButton />
            <Content>
                <div className="dish">
                    <div className="image">
                        <img src={ravanello_400} alt="Imagem do prato escolhido." />
                        {/* <img 
                            src={`${api.defaults.baseURL}/files/${dish.imgUrl}`} 
                            alt="Imagem do prato escolhido." /> 
                    */}
                    </div>
                    <div className="details">
                        <h2>Salada Ravanello</h2>

                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial. </p>

                        <div className="tags">
                            <Tag title="alface" />
                            <Tag title="cebola" />
                            <Tag title="pão naan" />
                            <Tag title="pepino" />
                            <Tag title="rabanete" />
                            <Tag title="tomate" />
                        </div>
                        <div className="actions">
                            <div>
                                <TextButton icon={minus} alt="Diminuir quantidade." />
                                <span>01</span>
                                <TextButton icon={plus} alt="Aumentar quantidade." />
                            </div>
                            <Button icon={orderBag} title="pedir ∙ R$ 25,00" />
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Container>
    )
}