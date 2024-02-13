import { Container, Content } from "./styles";
import { StyleSheetManager } from "styled-components";
import { api } from "../../services/api.js";
import { handleZeros } from "../../utils/string";
import isPropValid from "@emotion/is-prop-valid";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCart } from "../../hooks/cart.jsx";

export function OrderResume() {
    const {
        setNewOrderStatus,
        getCart,
        getOrderStatus,
        getTotal,
    } = useCart();

    const [paymentMethod, setPaymentMethod] = useState("pix");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpireDate, setCardExpireDate] = useState(new Date());
    const [cardCvcNumber, setCardCvcNumber] = useState("");
    const [paymentScreenVisible, setPaymentScreenVisible] = useState(true);
    const [listAreaVisible, setListAreaVisible] = useState(true);

    const handlePayment = async (method = "pix") => {
        const items = getCart();

        let orderData = {
            status: "processing",
            order: []
        };

        if (method && method === "pix") {
            setNewOrderStatus("pending");
            orderData.status = "pending";
        } else {
            if (!cardNumber) return alert("Preencha o número do Cartão de Crédito.");
            if (!cardCvcNumber)
                return alert("Preencha o código CVC do Cartão de Crédito.");

            setNewOrderStatus("paid");
            orderData.status = "paid";
        }

        items.forEach(item => {
            orderData.order.push({
                dish_id: item.dish_id,
                price: item.price,
                quantity: item.quantity,
            });
        });

        console.log("orderData: ", orderData);

        await api.post("/orders", orderData);
        
        localStorage.setItem("@foodexplorer:paymentStatus", orderData.status);
    };

    const handleCardNumber = (e) => {
        if (e.target.value.length <= 16) {
            setCardNumber(e.target.value);
        }
    };

    const handleCvc = (e) => {
        if (e.target.value.length <= 3) {
            setCardCvcNumber(e.target.value);
        }
    };

    const togglePaymentScreen = () => {
        setPaymentScreenVisible(true);
        setListAreaVisible(!listAreaVisible);
    };

    return (
        <Container>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <Header />
                <Content method={paymentMethod} status={getOrderStatus()}>
                    {listAreaVisible && (
                        <div className="item_list_area">
                            <h2>Meu Pedido</h2>
                            <div className="item_list">
                                {getCart() && getCart().length > 0 ? (
                                    
                                    getCart().map((item, index) => (
                                        
                                        <OrderCard key={String(index)} data={item} paymentStatus={getOrderStatus()} />
                                    ))
                                ) : (
                                    <h3>Carrinho vazio.</h3>
                                )}
                            </div>

                            {getTotal() && (
                                <div className="total">
                                    <h3>Total: R$ {handleZeros(getTotal())}</h3>
                                </div>
                            )}
                    

                            {getCart() && getCart().length > 0 && (
                                paymentScreenVisible && (
                                    <div className="next_button">
                                        <Button
                                            title="Avançar"
                                            $bgcolor="TOMATO_100" 
                                            onClick={togglePaymentScreen}
                                        />
                                    </div>
                                )
                            )}
                        
                        </div>
                    )}
                    {paymentScreenVisible && (
                        <div className="payment_method_area">
                            {getCart() && getCart().length > 0 && (
                                <div className="payment_area">
                                    <h2>Pagamento</h2>
                                    <div className="payment_method" method={paymentMethod}>
                                        <div>
                                            <div
                                                className={"pix"}
                                                onClick={() => {
                                                    setPaymentMethod("pix");
                                                }}
                                            >
                                                <img src={pixIcon} alt="Logo pagamento Pix" />
                                                <span>pix</span>
                                            </div>
                                            <div
                                                className={"credit"}
                                                onClick={() => {
                                                    setPaymentMethod("credit");
                                                }}
                                            >
                                                <img src={creditIcon} alt="Logo pagamento Crédito" />
                                                <span>cartão</span>
                                            </div>
                                        </div>
                                        <div className="payment_content">
                                            {paymentMethod === "pix" &&
                                        getOrderStatus() === "processing" &&
                                        (<div className="payment_pix_area">
                                            <img
                                                src={qrcode}
                                                alt="qrcode"
                                                onClick={() => {
                                                    handlePayment("pix");
                                                }}
                                            />
                                        </div>)
                                            }

                                            {paymentMethod === "credit" &&
                                            getOrderStatus() === "processing" &&
                                            (<form>
                                                <fieldset>
                                                    <label htmlFor="credit_card_number">
                                                        Número do Cartão
                                                    </label>

                                                    <Input
                                                        id={"card_number"}
                                                        placeholder="0000 0000 0000 0000"
                                                        maxLength={16}
                                                        onChange={handleCardNumber}
                                                    />
                                                </fieldset>
                                                <fieldset>
                                                    <div className="fieldset_wrapper">
                                                        <div className="col-2">
                                                            <div className="input_wrapper">
                                                                <label htmlFor="credit_card_expire">
                                                                    Validade
                                                                </label>
                                                                <DatePicker
                                                                    selected={cardExpireDate}
                                                                    showMonthYearPicker
                                                                    dateFormat="MM/yyyy"
                                                                    className="input_validate"
                                                                    onChange={(date) => setCardExpireDate(date)}
                                                                />
                                                            </div>
                                                            <div className="input_wrapper">
                                                                <label htmlFor="credit_card_cvc">CVC</label>
                                                                <Input
                                                                    type="text"
                                                                    placeholder="CVC"
                                                                    className="input_cvc"
                                                                    maxLength={3}
                                                                    onChange={handleCvc}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <fieldset>
                                                    <Button
                                                        icon={orderIcon}
                                                        title="Finalizar Pagamento"
                                                        $bgcolor="TOMATO_100" 
                                                        onClick={handlePayment}
                                                    />
                                                </fieldset>
                                            </form>)
                                            }

                                            {getOrderStatus() === "paid" && (
                                                <div className="payment_done_area">
                                                    <img src={clockIcon} alt="relógio" />
                                                    <p>Pagamento aprovado!</p>
                                                </div>
                                            )}

                                            {getOrderStatus() === "pending" && (
                                                <div className="waiting_payment_area">
                                                    <img src={clockIcon} alt="relógio" />
                                                    <p>Aguardando pagamento no caixa</p>
                                                </div>
                                            )}

                                            {getOrderStatus() === "delivered" && (
                                                <div className="delivery_done_area">
                                                    <img src={forkIcon} alt="relógio" />
                                                    <p>Pedido entregue!</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Content>
                <Footer />
            </StyleSheetManager>
        </Container>
    );
}
