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

            
            
            //console.log(response);
            return response;
        }

        fetchOrders();
    }, []);
    return (
        <Container>
            <Header />
            <Content>
                <h2>Histórico de Pedidos</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Código</th>
                                <th>Detalhamento</th>
                                <th>Data e Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <img src={bullet_red} alt="Pendente" />
                                        <p>Pendente</p>
                                    </div>
                                </td>
                                <td>0000052</td>
                                <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                <td>20/05 às 18h00</td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <img src={bullet_yellow} alt="Pendente" />
                                        <p>Preparando</p>
                                    </div>
                                </td>
                                <td>00000003</td>
                                <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                <td>20/05 às 18h00</td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <img src={bullet_green} alt="Pendente" />
                                        <p>Entregue</p>
                                    </div>
                                </td>
                                <td>0000021</td>
                                <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                                <td>20/05 às 18h00</td>
                            </tr>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Content>
            <Footer />
        </Container>
    );
}