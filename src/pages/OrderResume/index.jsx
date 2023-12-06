import { Container, Content } from "./styles";
import { StyleSheetManager } from 'styled-components';
import { api } from "../../services/api.js";
import { handleZeros } from "../../utils/string";
import isPropValid from '@emotion/is-prop-valid';
import { useState, useEffect } from "react";
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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useCart } from "../../hooks/cart"


export function OrderResume() {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState();
    const [paymentMethod, setPaymentMethod] = useState('pix');
    const [paymentStatus, setPaymentStatus] = useState('waiting');
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpireDate, setCardExpireDate] = useState(new Date());
    const [cardCvcNumber, setCardCvcNumber] = useState('');
    const { loadCartFromBrowserCache, addItemToCart } = useCart();

    const handlePayment = async () => {
        if (!cardNumber) return alert("Preencha o número do Cartão de Crédito.");
        if (!cardCvcNumber) return alert("Preencha o código CVC do Cartão de Crédito.");

        await payWithCard();
    };

    const payWithCard = async () => {
        const itemsWithPaidStatus = items.map(item => ({
            ...item,
            status: "paid"
        }));
        await api.post("/orders", itemsWithPaidStatus);

        localStorage.removeItem("@foodexplorer:cart");
    };

    const handleCardNumber = (e) => {
        if (e.target.value.length <= 16) {
            setCardNumber(e.target.value);
        };
    };

    const handleCvc = (e) => {
        if (e.target.value.length <= 3) {
            setCardCvcNumber(e.target.value);
        };
    };

    useEffect(() => {
        async function fetchItems() {
            const cacheData = await loadCartFromBrowserCache();

            const response = await api.get(`/orders/last`);

            if (cacheData) {
                console.log("aqui 0");
                console.log(cacheData);
                setTotal(cacheData.reduce((sum, dish) => sum + (dish.price * dish.quantity), 0));
                setPaymentStatus("processing");
                setItems(cacheData);
            }

            if ((cacheData && response.data && response.data[0].status === "processing") || (cacheData && !response.data)) {
                console.log("aqui 1");
                setTotal(cacheData.reduce((sum, dish) => sum + (dish.price * dish.quantity), 0));
                setPaymentStatus("processing");
                setItems(cacheData);
            }

            if (!cacheData && response.data && response.data[0].status === "processing") {
                console.log("aqui 2");
                setTotal(response.data.reduce((sum, dish) => sum + (dish.price * dish.quantity), 0));
                setPaymentStatus("processing");
                //setItems(response.data);

                for (let item of response.data) {
                    addItemToCart(item);
                };
            };
        };

        fetchItems();
    }, [loadCartFromBrowserCache]);

    return (
        <Container>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <Header />
                <Content method={paymentMethod} status={paymentStatus}>
                    <div className="title">Meu Pedido</div>
                    <div className="item_list">
                        {
                            items && items.length > 0 ? (
                                items.map((item, index) => (
                                    <OrderCard
                                        key={String(index)}
                                        data={item}
                                    />
                                ))
                            ) : (
                                <h3>Carrinho vazio.</h3>
                            )
                        }
                    </div>
                    {
                        total ? (
                            <h3 className="total">Total: R$ {handleZeros(total)}</h3>
                        ) : ""
                    }

                    {
                        items && items.length > 0 ? (
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
                                                            <label htmlFor="credit_card_expire">Validade</label>
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
                                                    onClick={handlePayment}
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
                        ) : ""
                    }
                </Content>
                <Footer />
            </StyleSheetManager>
        </Container>
    );
};
