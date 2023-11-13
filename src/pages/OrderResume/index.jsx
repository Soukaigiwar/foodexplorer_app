import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { OrderCard } from "../../components/OrderCard";
import qrcode from "../../assets/qrcode.svg";


export function OrderResume() {

    return (
        <Container>
            <Header />
            <Content>
                <div className="item_list">
                    <h2>Meu Pedido</h2>
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <h3>Total: R$ 103,88</h3>
                </div>
                <div className="payment_area">
                    <h2>Pagamento</h2>
                    <div className="payment_method">
                        <div>
                            <div className="pix">
                                <p>pix</p>
                                <img src={qrcode} alt="qrcode" />
                            </div>
                            <div className="credit">cartão</div>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Container>
    );
};
