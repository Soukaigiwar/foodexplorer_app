/* eslint-disable no-unused-vars */
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Container, Content } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import bullet_red from "../../assets/bullet_red.svg";
import bullet_yellow from "../../assets/bullet_yellow.svg";
import bullet_green from "../../assets/bullet_green.svg";

export function OrderSummary() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            const {data} = await api.get("/orders/all");

            setOrders(data);

            //{"order_id": 1, "title": "Spaguetti Gambe", "quantity": 1, "status": "pending"}
            // console.log(data);
            return data;
        }

        fetchOrders();
    }, []);
    return (
        <Container>
            <Header />
            <Content>
                <h2><span>Histórico de </span>Pedidos</h2>
                <div id="item_list">
                    {(orders && orders.length > 0) ?? (
                        <div id="head">
                            <div id="head_status">Status</div>
                            <div id="head_codigo">Código</div>
                            <div id="head_detalhamento">Detalhamento</div>
                            <div id="head_data_hora">Data e Hora</div>
                        </div>
                    )}
                    {orders && orders.length > 0 ? (
                        orders.map((order, index) => (
                            <div key={String(index)}>
                                <div className="lines" >
                                    <div className="status">
                                        <img src={
                                            order.status === "pendent" ? bullet_red :
                                                order.status === "processing" ? bullet_yellow :
                                                    bullet_green
                                        } alt={order.status} />
                                        <p>{
                                            order.status === "delivered" ? "Entregue" :
                                                order.status === "processing" ? "Processando" :
                                                    order.status === "pendent" ? "Cancelado" : "Cancelado"
                                        }</p>
                                    </div>
                                    <div className="codigo">
                                        <p>{String(order.order_id).padStart(8, "0")}</p>
                                    </div>
                                    <div className="detalhamento">
                                        <p>
                                            {order.items.map((item, index) => (
                                                <span key={String(index)}>
                                                    {item.quantity} x {item.title}{index !== order.items.length - 1 ? ", " : ""}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                    <div className="data_hora">
                                        <p>{order.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h3>Nenhum pedido.</h3>
                    )}

                    {/* 
                    <tr>
                        <td>
                            <div>
                                <img src={bullet_green} alt="Pendente" />
                                <p>Entregue</p>
                            </div>
                        </td>
                        <td>0000006</td>
                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                        <td>20/05 às 18h00</td>
                    </tr> */}
                </div>
            </Content>
            <Footer />
        </Container>
    );
}