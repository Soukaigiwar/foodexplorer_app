import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { OrderCard } from "../../components/OrderCard";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import qrcode from "../../assets/qrcode.svg";
import pixIcon from "../../assets/pix_icon.svg";
import creditIcon from "../../assets/credit_icon.svg";
import orderIcon from "../../assets/order_bag.svg";


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
                                <img src={pixIcon} alt="Logo pagamento Pix" />
                                <span>pix</span>
                            </div>
                            <div className="credit">
                                <img src={creditIcon} alt="Logo pagamento Crédito" />
                                <span>cartão</span>
                            </div>
                        </div>
                        <div className="payment_content">
                            <div className="payment_pix_area">
                                <img src={qrcode} alt="qrcode" />
                            </div>
                            <div className="payment_credit_area">
                                <div>
                                    <div>
                                        <label htmlFor="credit_card_number">Número do Cartão</label>
                                        <Input
                                            className="input_card_number"
                                            type="number"
                                            placeholder="0000 0000 0000 0000"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="credit_card_expire">Validade</label>
                                        <Input
                                            className="input_expire_date"
                                            type="date"
                                            placeholder="04/25"
                                        />
                                        <label htmlFor="credit_card_cvc">CVC</label>

                                        <Input
                                            className="input_cvc"
                                            type="number"
                                            placeholder="181"
                                        />
                                    </div>
                                    <Button
                                        icon={orderIcon}
                                        title="Finalizar Pagamento"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Container>
    );
};
