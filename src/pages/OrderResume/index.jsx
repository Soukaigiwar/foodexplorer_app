import { Container, Content } from "./styles";
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { OrderCard } from "../../components/OrderCard";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import qrcode from "../../assets/qrcode.svg";
import pixIcon from "../../assets/pix_icon.svg";
import clockIcon from "../../assets/clock.svg";
import forkIcon from "../../assets/fork.svg";
import creditIcon from "../../assets/credit_icon.svg";
import orderIcon from "../../assets/order_bag.svg";


export function OrderResume() {

    const [paymentMethod, setPaymentMethod] = useState('pix');
    const [paymentStatus, setPaymentStatus] = useState('delivered');



    return (
        <Container>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <Header />
                <Content method={paymentMethod} status={paymentStatus}>
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
                        <div className="payment_method" method={paymentMethod}>
                            <div>
                                <div
                                    className={`pix`}
                                    onClick={() => {
                                        setPaymentMethod('pix')
                                    }
                                    }
                                >
                                    <img src={pixIcon} alt="Logo pagamento Pix" />
                                    <span>pix</span>
                                </div>
                                <div
                                    className={`credit`}
                                    onClick={() => {
                                        setPaymentMethod('credit')
                                    }
                                    }
                                >
                                    <img src={creditIcon} alt="Logo pagamento Crédito" />
                                    <span>cartão</span>
                                </div>
                            </div>
                            <div className="payment_content">
                                <div className="payment_pix_area">
                                    <img src={qrcode} alt="qrcode" />
                                </div>
                                <form>
                                    <fieldset>
                                        <label htmlFor="credit_card_number">
                                            Número do Cartão
                                        </label>
                                        <Input
                                            className="input_wrapper"
                                            type="number"
                                            placeholder="0000 0000 0000 0000"
                                        />
                                    </fieldset>
                                    <fieldset>
                                        <div className="fieldset_wrapper">
                                            <div className="col-2">
                                                <div className="input_wrapper">
                                                    <label htmlFor="credit_card_expire">Validade</label>
                                                    <Input
                                                        type="date"
                                                        placeholder="04/25"
                                                        className="input_validate"
                                                    />
                                                </div>
                                                <div className="input_wrapper">
                                                    <label htmlFor="credit_card_cvc">CVC</label>
                                                    <Input
                                                        type="number"
                                                        placeholder="181"
                                                        className="input_cvc"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <Button
                                            icon={orderIcon}
                                            title="Finalizar Pagamento"
                                        />
                                    </fieldset>
                                </form>
                                <div className="waiting_payment_area">
                                    <img src={clockIcon} alt="relógio" />
                                    <p>Aguardando pagamento no caixa</p>
                                </div>
                                <div className="payment_done_area">
                                    <img src={clockIcon} alt="relógio" />
                                    <p>Pagamento aprovado!</p>
                                </div>
                                <div className="delivery_done_area">
                                    <img src={forkIcon} alt="relógio" />
                                    <p>Pedido entregue!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
                <Footer />
            </StyleSheetManager>
        </Container>
    );
};
