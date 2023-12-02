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
    const [paymentStatus, setPaymentStatus] = useState('pay');
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpireDate, setCardExpireDate] = useState(new Date());
    const [cardCvcNumber, setCardCvcNumber] = useState('');
    const { loadCartFromBrowserCache } = useCart();

    console.log(loadCartFromBrowserCache());
    const [cache, setCache] = useState(null);

    const handlePayment = () => {
        if (!cardNumber) return alert("Preencha o número do Cartão de Crédito.");
        if (!cardCvcNumber) return alert("Preencha o código CVC do Cartão de Crédito.");

        const payData = {
            cardNumber,
            cardExpireDate,
            cardCvcNumber
        };
        console.log(payData);

        payWithCard();
    };

    const payWithCard = async () => {
        await api.post("/", [
                {
                    "dish_id": 88,
                    "price": 28.9,
                    "quantity": 1
                },
                {
                    "dish_id": 76,
                    "price": 3.9,
                    "quantity": 2
                }
        ]);
    }

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
            setCache(cacheData);

            if (cache) {
                console.log("tem");
            }
            const response = await api.get(`/orders/last`);

            if (!response.data) {
                setTotal(0);
                return;
            }

            setTotal(response.data.reduce((sum, dish) => sum + (dish.price * dish.quantity), 0));
            setItems(response.data);
            // status: pay, waiting, done, delivered
            setPaymentStatus(response.data[0].status);
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
                            items.map((item, index) => (
                                <OrderCard
                                    key={String(index)}
                                    data={item}
                                />
                            ))
                        }
                    </div>
                    <h3 className="total">Total: R$ {handleZeros(total)}</h3>
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
                </Content>
                <Footer />
            </StyleSheetManager>
        </Container>
    );
};
