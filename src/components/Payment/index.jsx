import { Container } from "./styles";
import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";

import qrcode from "../../assets/qrcode.svg";
import pixIcon from "../../assets/pix_icon.svg";
import clockIcon from "../../assets/clock.svg";
import forkIcon from "../../assets/fork.svg";
import creditIcon from "../../assets/credit_icon.svg";
import orderIcon from "../../assets/order_bag.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { api } from "../../services/api.js";
import { useNavigate } from "react-router-dom";

export function Payment({ method, items }) {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState();
    const [paymentIsVisible, setPaymentIsVisible] = useState(true);
    const [paymentMethod, setPaymentMethod] = useState("pix");
    const [paymentStatus, setPaymentStatus] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpireDate, setCardExpireDate] = useState(new Date());
    const [cardCvcNumber, setCardCvcNumber] = useState("");

    const navigate = useNavigate();

    const handlePayment = async (method = "pix") => {
        if (method && method === "pix") {
            await payWithPix();
        } else {
            if (!cardNumber)
                return alert("Preencha o número do Cartão de Crédito.");
            if (!cardCvcNumber)
                return alert("Preencha o código CVC do Cartão de Crédito.");
            await payWithCard();
        }

        handleNavigationToHome();
    };

    const payWithPix = async () => {
        const itemsWithPendingStatus = items.map((item) => ({
            ...item,
            status: "pending",
        }));

        await api.post("/orders", itemsWithPendingStatus);
        localStorage.setItem("@foodexplorer:status", "pending");
        setPaymentStatus("pending");
        setItems([]);
        setTotal();
        togglePaymentScreen();
    };

    const payWithCard = async () => {
        const itemsWithPaidStatus = items.map((item) => ({
            ...item,
            status: "paid",
        }));

        await api.post("/orders", itemsWithPaidStatus);
        localStorage.setItem("@foodexplorer:status", "paid");
        setPaymentStatus(localStorage.getItem("@foodexplorer:status"));
        setItems([]);
        setTotal();
        togglePaymentScreen();
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

    const handleNavigationToHome = () => {
        navigate("/");
    };

    const togglePaymentScreen = () => {
        setPaymentIsVisible(!paymentIsVisible);
    };

    return (
        <Container>
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
                            <img
                                src={creditIcon}
                                alt="Logo pagamento Crédito"
                            />
                            <span>cartão</span>
                        </div>
                    </div>
                    <div className="payment_content">
                        {paymentMethod === "pix" &&
                            paymentStatus === "processing" && (
                                <div className="payment_pix_area">
                                    <h3>teste</h3>
                                    <img
                                        id="qrcode"
                                        src={qrcode}
                                        alt="qrcode"
                                        onClick={() => {
                                            handlePayment("pix");
                                        }}
                                    />
                                </div>
                            )}

                        {paymentMethod === "credit" &&
                            paymentStatus === "processing" && (
                                <form>
                                    <fieldset>
                                        <label htmlFor="credit_card_number">
                                            Número do Cartão
                                        </label>

                                        <Input
                                            id={"20"}
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
                                                        selected={
                                                            cardExpireDate
                                                        }
                                                        showMonthYearPicker
                                                        dateFormat="MM/yyyy"
                                                        className="input_validate"
                                                        onChange={(date) =>
                                                            setCardExpireDate(
                                                                date
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="input_wrapper">
                                                    <label htmlFor="credit_card_cvc">
                                                        CVC
                                                    </label>
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
                                </form>
                            )}

                        {paymentStatus === "paid" && (
                            <div className="payment_done_area">
                                <img src={clockIcon} alt="relógio" />
                                <p>Pagamento aprovado!</p>
                            </div>
                        )}

                        {paymentStatus === "pending" && (
                            <div className="waiting_payment_area">
                                <img src={clockIcon} alt="relógio" />
                                <p>Aguardando pagamento no caixa</p>
                            </div>
                        )}

                        {paymentStatus === "delivered" && (
                            <div className="delivery_done_area">
                                <img src={forkIcon} alt="relógio" />
                                <p>Pedido entregue!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
}
