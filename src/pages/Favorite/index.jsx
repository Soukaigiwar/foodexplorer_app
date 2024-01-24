/* eslint-disable no-unused-vars */
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FavoriteCard } from "../../components/FavoriteCard";

import { Container, Content } from "./styles";


export function Favorite() {
    const item = {
        image_filename: "dish_place_holder.png",
        title: "Salada Ravanello",
    }
    const item2 = {
        image_filename: "dish_place_holder.png",
        title: "Salada Radish",
    }
    const item3 = {
        image_filename: "dish_place_holder.png",
        title: "Dadinhos de amendoim",
    }
    const item4 = {
        image_filename: "dish_place_holder.png",
        title: "Pudim",
    }
    const item5 = {
        image_filename: "dish_place_holder.png",
        title: "Heineken 350ml",
    }

    const items = [];
    
        items.push(item);
        items.push(item2);
        items.push(item3);
        items.push(item4);
        items.push(item5);
    

    // items.map((item, index) => {
    //     console.log(index);
    // })
    return (
        <Container>
            <Header />
            <Content>
                <h2>Meus Favoritos</h2>
                <div className="cards">
                    {items && items.length > 0 ? (
                        items.map((item, index) => (
                            <div className="favorite_card" key={String(index)}>
                                <FavoriteCard
                                    data={item}
                                />
                            </div>
                        ))
                    ) : (
                        <h3>Carrinho vazio.</h3>
                    )}
                </div>
            </Content>
            <Footer />
        </Container>
    );
}