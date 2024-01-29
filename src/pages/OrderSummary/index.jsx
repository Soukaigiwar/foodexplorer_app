/* eslint-disable no-unused-vars */
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Container, Content } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";
import bullet_red from "../../assets/bullet_red.svg";
import bullet_yellow from "../../assets/bullet_yellow.svg";
import bullet_green from "../../assets/bullet_green.svg";

export function OrderSummary() {

    useEffect(() => {
        async function fetchOrders() {
            const response = await api.get("/orders/all");

            
            //{"order_id": 1, "title": "Spaguetti Gambe", "quantity": 1, "status": "pending"}
            console.log(response);
            return response;
        }

        fetchOrders();
    }, []);
    return (
        <Container>
            <Header />
            <Content>
                <h2><span>Histórico de </span>Pedidos</h2>
                <div id="item_list">
                    <div id="head">
                        <div id="head_status">Status</div>
                        <div id="head_codigo">Código</div>
                        <div id="head_detalhamento">Detalhamento</div>
                        <div id="head_data_hora">Data e Hora</div>
                    </div>
                    <div className="lines">
                        <div className="status">
                            <img src={bullet_red} alt="Pendente" />
                            <p>Entregue</p>
                        </div>
                        <div className="codigo">
                            <p>0000006</p>
                        </div>
                        <div className="detalhamento">
                            <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
                        </div>
                        <div className="data_hora">
                            <p>20/05 às 18h00</p>
                        </div>
                    </div>
                    <div className="lines">
                        <div className="status">
                            <img src={bullet_yellow} alt="Preparando" />
                            <p>Entregue</p>
                        </div>
                        <div className="codigo">
                            <p>0000006</p>
                        </div>
                        <div className="detalhamento">
                            <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
                        </div>
                        <div className="data_hora">
                            <p>20/05 às 18h00</p>
                        </div>
                    </div>
                    <div className="lines">
                        <div className="status">
                            <img src={bullet_green} alt="Entregue" />
                            <p>Entregue</p>
                        </div>
                        <div className="codigo">
                            <p>0000006</p>
                        </div>
                        <div className="detalhamento">
                            <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
                        </div>
                        <div className="data_hora">
                            <p>20/05 às 18h00</p>
                        </div>
                    </div>
                    <div className="lines">
                        <div className="status">
                            <img src={bullet_green} alt="Entregue" />
                            <p>Entregue</p>
                        </div>
                        <div className="codigo">
                            <p>0000006</p>
                        </div>
                        <div className="detalhamento">
                            <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
                        </div>
                        <div className="data_hora">
                            <p>20/05 às 18h00</p>
                        </div>
                    </div>

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