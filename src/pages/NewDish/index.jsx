import { Header } from "../../components/Header";
import { BackTextButton } from "../../components/BackTextButton";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { InputFile } from "../../components/InputFile";
import { InputSelect } from "../../components/InputSelect";
import { InputTag } from "../../components/InputTag";
import { InputTextarea } from "../../components/InputTextarea";
import { useState } from "react";
import { api } from "../../services/api";
import upload from "../../assets/upload.svg";
import downArrow from "../../assets/down_arrow.svg";

import { Container, Form, Tags } from "./styles";

export function NewDish() {
    const [dishImage, setDishImage] = useState(null);
    const [dishName, setDishName] = useState("");
    const [dishCategory, setDishCategory] = useState("");
    const [dishPrice, setDishPrice] = useState();
    const [dishDescription, setDishDescription] = useState("");
    const [dishIngredients, setDishIngredients] = useState([]);
    const [newTag, setNewTag] = useState("");

    const handleDishImage = () => {
        console.log("alterar arquivo escolhido");
        // setDishImage(e.target.files[0]);
        // console.log(e.target.files[0]);
    };

    const handleCategoryChange = (e) => {
        console.log(e.target.value);
        setDishCategory(e.target.value);
    };

    const handleAddIngredient = () => {
        setDishIngredients(prevState => [...prevState, newTag]);
        setNewTag("");
    };

    const handleRemoveIngredient = (deleted) => {
        setDishIngredients(prevState =>
            prevState.filter(ingredient => ingredient !== deleted));
    };

    const handleAddDish = () => {
        // if (!dishImage) return alert("Escolha uma imagem.");
        if (!dishName) return alert("Preencha o nome do Prato.");
        if (!dishCategory) return alert("Seleciona uma categoria.");
        if (!dishPrice) return alert("Insira um valor para o item.");
        if (!dishDescription) return alert("Preencha com a descrição.");

        handleNewDish();
    };

    const handleNewDish = async () => {
        console.log(dishImage, dishName, dishCategory, dishPrice, dishDescription, dishIngredients);
        await api.post("/dishes", {
            "title": dishName,
            "category": dishCategory,
            "description": dishDescription,
            "price": dishPrice,
            "ingredients": dishIngredients,
            "image": {
                "title": "teste_img",
                "filename": "filename_teste_img"
            }
        });
    };

    const options = [
        {
            id: 1,
            value: "refeicoes",
            label: "Refeições"
        },
        {
            id: 2,
            value: "sobremesas",
            label: "Sobremesas"
        },
        {
            id: 3,
            value: "bebidas",
            label: "Bebidas"
        }
    ];

    return (
        <Container>
            <Header />
            <div className="backTextButton">
                <BackTextButton />
            </div>
            <Form>
                <h2>Novo Prato</h2>
                <div>
                    <InputFile
                        label="Imagem do prato"
                        text={dishImage ? dishImage : "Selecione imagem"}
                        id="input_file"
                        icon={upload}
                        type="file"
                        onChange={() => { handleDishImage; }}
                    />
                </div>
                <div>
                    <Input
                        label="Nome"
                        value={dishName}
                        autoComplete="dishName"
                        placeholder="Ex.: Salada Ceasar"
                        type="text"
                        onChange={e => setDishName(e.target.value)}
                    />
                </div>
                <div>
                    <InputSelect
                        autoComplete="dishCategory"
                        label="Categoria"
                        icon={downArrow}
                        type="select"
                        value={dishCategory}
                        options={options}
                        onChange={handleCategoryChange}
                    />
                </div>
                <div> {/* Ingredients */}
                    <h3 id="ingredients" >Ingredientes</h3>
                    <Tags>
                        {
                            dishIngredients.map((ingredient, index) => (
                                <InputTag
                                    key={String(index)}
                                    isNew={false}
                                    value={ingredient}
                                    onClick={() =>
                                        handleRemoveIngredient(ingredient)}
                                />
                            ))
                        }
                        <InputTag
                            isNew={true}
                            placeholder="Adicionar"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddIngredient}
                        />
                    </Tags>
                </div>
                <div>
                    <Input
                        label="Preço"
                        value={dishPrice}
                        autoComplete="dishPrice"
                        placeholder="R$ 00,00"
                        type="text"
                        onChange={e => setDishPrice(e.target.value)}
                    />
                </div>
                <div>
                    <InputTextarea
                        label="Descrição"
                        autoComplete="dishDescription"
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        type="textarea"
                        onChange={e => setDishDescription(e.target.value)}
                    />
                </div>
                <Button
                    id="button"
                    title="Salvar"
                    alternateButtonColor={true}
                    onClick={handleAddDish}
                />
            </Form>
            <Footer />
        </Container>
    );
}