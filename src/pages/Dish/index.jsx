import { Header } from "../../components/Header";
import { BackTextButton } from "../../components/BackTextButton";
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";

import { Container, Content } from "./styles";
import ravanello_400 from "../../assets/ravanello_400.png"
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import orderBag from "../../assets/order_bag.svg";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { handleZeros } from "../../utils/string";

export function Dish() {
    const params = useParams();

    const [data, setData] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchDish() {

            let response = await api.get(`/dishes/${params.id}`);

            if (search) {
                response = await api.get(`/dishes/${params.search}`);
            }

            const ingredient = (response.data.ingredients);

            setData(response.data);
            setIngredients(ingredient);
        };

        fetchDish();
    }, [search]);

    return (
        <Container>
            <Header />
            <BackTextButton />
            <Content>
                <div className="dish">
                    <div className="image">
                        <img src={ravanello_400} alt="Imagem do prato escolhido." />
                        {/* <img 
                            src={`${api.defaults.baseURL}/files/${dish.imgUrl}`} 
                            alt="Imagem do prato escolhido." /> 
                    */}
                    </div>
                    <div className="details">
                        <h2>{data.title}</h2>

                        <p>{data.description}</p>

                        <div className="tags">
                            {
                                ingredients.map(ingredient => (
                                    <Tag
                                        key={String(ingredient.id)}
                                        title={ingredient.title}
                                    />
                                ))
                            }
                        </div>
                        <div className="actions">
                            <div>
                                <TextButton icon={minus} alt="Diminuir quantidade." />
                                <span>01</span>
                                <TextButton icon={plus} alt="Aumentar quantidade." />
                            </div>
                            <Button
                                icon={orderBag}
                                title={`pedir ∙ R$ ${handleZeros(String(data.price))}`} />
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
        </Container>
    )
}