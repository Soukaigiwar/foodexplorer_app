import { Header } from "../../components/Header";
import { BackTextButton } from "../../components/BackTextButton";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { InputFile } from "../../components/InputFile";
import { InputSelect } from "../../components/InputSelect";
import { InputTag } from "../../components/InputTag";
import { InputTextarea } from "../../components/InputTextarea";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import upload from "../../assets/upload.svg";
import downArrow from "../../assets/down_arrow.svg";
import { Container, Form, Tags, BackTextButtonArea } from "./styles";

export function EditDish() {
    const [dishImage, setDishImage] = useState();
    const [dishName, setDishName] = useState("");
    const [dishCategory, setDishCategory] = useState("");
    const [dishPrice, setDishPrice] = useState();
    const [dishDescription, setDishDescription] = useState("");
    const [dishIngredients, setDishIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const navigate = useNavigate();
    const params = useParams();

    const handleDishImage = (e) => {
        setDishImage(e.target.files[0]);
    };

    const handleCategoryChange = (e) => {
        setDishCategory(e.target.value);
    };

    const handleAddIngredient = () => {
        setDishIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    };

    const handleRemoveIngredient = (deleted) => {
        setDishIngredients(prevState =>
            prevState.filter(ingredient => ingredient !== deleted));
    };

    const handleUpdateDish = () => {
        if (!dishName) return alert("Preencha o nome do Prato.");
        if (!dishCategory) return alert("Seleciona uma categoria.");
        if (!dishPrice) return alert("Insira um valor para o item.");
        if (!dishDescription) return alert("Preencha com a descrição.");

        updateDish();
        navigate("/");
    };

    const handleRemoveDish = async () => {
        await api.delete(`/dishes/${params.id}`);
        navigate("/");
    };

    const options = [
        {
            id: 1,
            value: "Refeiçao",
            label: "Refeições"
        },
        {
            id: 2,
            value: "Sobremesas",
            label: "Sobremesas"
        },
        {
            id: 3,
            value: "Bebidas",
            label: "Bebidas"
        }
    ];

    const updateDish = async () => {
        const category = options.find(option => option.value === dishCategory);

        await api.put("/dishes", {
            "id": Number(params.id),
            "title": dishName,
            "category": category.id,
            "description": dishDescription,
            "price": dishPrice,
            "ingredients": dishIngredients
        });
        
        updateDishImage(params.id, dishImage);
    };


    const updateDishImage = async (dishId, dishImage) => {
        try {
            if (dishImage) {
                const fileUploadForm = new FormData();

                fileUploadForm.append("dish_image", dishImage);

                await api.patch(`/images/${dishId}`, fileUploadForm);
                return;
            }

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar a imagem.");
            }
        }
    };

    useEffect(() => {
        const fetchDishes = async () => {
            const id = params.id;

            if (id) {
                const { data } = await api.get(`/dishes/${id}`);
                const ingredients = data.ingredients.map(ingredient => ingredient.title);

                setDishName(data.title);
                setDishCategory(data.category);
                setDishIngredients(ingredients);
                setDishPrice(data.price);
                setDishDescription(data.description);
            }
        };

        fetchDishes();
    }, []);

    return (
        <Container>
            <Header />
            <BackTextButtonArea>
                <BackTextButton />
            </BackTextButtonArea>
            <Form>
                <h2>Editar prato</h2>
                <div className="input_area">
                    <div>
                        <InputFile
                            label="Imagem do prato"
                            text={dishImage ? dishImage.name : "Selecione imagem"}
                            id="input_file"
                            icon={upload}
                            type="file"
                            onChange={handleDishImage}
                        />
                    </div>
                    <div>
                        <Input
                            label="Nome"
                            defaultValue={dishName || ""}
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
                            defaultValue={dishCategory}
                            options={options}
                            onChange={handleCategoryChange}
                        />
                    </div>
                </div>
                <div className="tag_and_price_area"> {/* Ingredients */}
                    <div>
                        <h3 id="ingredients" >Ingredientes</h3>
                        <Tags>
                            {
                                dishIngredients.map((ingredient, index) => (
                                    <InputTag
                                        key={String(index)}
                                        isNew={0}
                                        defaultValue={ingredient || ""}
                                        onClick={() =>
                                            handleRemoveIngredient(ingredient)}
                                    />
                                ))
                            }
                            <InputTag
                                isNew={1}
                                placeholder="Adicionar"
                                onChange={e => setNewIngredient(e.target.value)}
                                defaultValue={newIngredient || ""}
                                onClick={handleAddIngredient}
                            />
                        </Tags>
                    </div>
                    <div>
                        <Input
                            label="Preço"
                            defaultValue={dishPrice}
                            autoComplete="dishPrice"
                            placeholder="R$ 00,00"
                            type="text"
                            onChange={e => setDishPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="description_area">
                    <div>
                        <InputTextarea
                            label="Descrição"
                            autoComplete="dishDescription"
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            type="textarea"
                            defaultValue={dishDescription || ""}
                            onChange={e => setDishDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="submit_area">
                    <Button
                        id="remove_button"
                        title="Excluir prato"
                        $bgcolor="BG_800"
                        onClick={handleRemoveDish}
                    />
                    <Button
                        id="button"
                        title="Salvar alterações"
                        $bgcolor="TOMATO_400"
                        onClick={handleUpdateDish}
                    />
                </div>
            </Form>
            <Footer />
        </Container>
    );
}