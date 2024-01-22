/* eslint-disable no-unused-vars */
import { Header } from "../../components/Header";
import { BackTextButton } from "../../components/BackTextButton";
import { Footer } from "../../components/Footer";

import { Container, Content } from "./styles";
import dishPlaceHolder from "../../assets/dish_place_holder.png";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Favorite() {
    const params = useParams();

    const [data, setData] = useState({});
    const dishImageUrl = data.image_filename
        ? `${api.defaults.baseURL}/files/${data.image_filename}`
        : dishPlaceHolder;

    useEffect(() => {
        async function fetchDish() {

            let response = await api.get(`/dishes/${params.id}`);

            const ingredient = (response.data.ingredients);

            setData(response.data);
        }

        fetchDish();
    }, []);

    return (
        <Container>
            <Header />
            <BackTextButton />
            <Content>
                <h2>Favorites</h2>
            </Content>
            <Footer />
        </Container>
    );
}