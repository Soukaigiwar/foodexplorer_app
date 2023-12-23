import { Header } from "../../components/Header";
import { BackTextButton } from "../../components/BackTextButton";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { InputFile } from "../../components/InputFile";
import { InputSelect } from "../../components/InputSelect";
import { InputTag } from "../../components/InputTag";
import { InputTextarea } from "../../components/InputTextarea";
import upload from "../../assets/upload.svg";
import downArrow from "../../assets/down_arrow.svg";

import { Container, Form, Tags } from "./styles";

export function NewDish() {
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

    const handleAddTag = () => {
        console.log("texto");
    };

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
                        text="Selecione imagem"
                        id="input_file"
                        icon={upload}
                        type="file"
                    />
                </div>
                <div>
                    <Input
                        label="Nome"
                        autoComplete="dishName"
                        placeholder="Ex.: Salada Ceasar"
                        type="text"
                    />
                </div>
                <div>
                    <InputSelect
                        autoComplete="dishCategory"
                        label="Categoria"
                        icon={downArrow}
                        type="select"
                        options={options}
                    />
                </div>
                <div>
                    <h3 id="ingredients" >Ingredientes</h3>
                    <Tags>
                        <InputTag
                            isNew={false}
                            value={"Pão Naan"}
                        />
                        <InputTag
                            isNew={false}
                            value={"Alface"}
                        />
                        <InputTag
                            isNew={false}
                            value={"Tomate Cereja"}
                        />
                        <InputTag
                            isNew={true}
                            placeholder="Adicionar"
                            onClick={handleAddTag}
                        />
                    </Tags>
                </div>
                <div>
                    <Input
                        label="Preço"
                        autoComplete="dishPrice"
                        placeholder="R$ 00,00"
                        type="text"
                    />
                </div>
                <div>
                    <InputTextarea
                        label="Descrição"
                        autoComplete="dishDescription"
                        defaultValue="Fale brevemente sobre o prato, seus ingredientes e composição"
                        type="textarea"
                    />
                </div>
                <Button id="button" title="Salvar"/>
            </Form>
            {/* <Form>
                <h2>Novo Prato</h2>

                <div>
                    <Input
                        id="dish_name"
                        label="Nome"
                        placeholder="Ex.: Salada Ceasar"
                        type="text"
                    />
                </div>
                <div>
                    <select
                        id="dish_category"
                        label="Categoria"
                        type="text"
                    >
                        <option value="refeicao">Refeição</option>
                        <option value="sobremesa">Sobremesa</option>
                        <option value="bebida">Bebidas</option>
                    </select>
                </div>
                <div>
                    <Input
                        id="dish_price"
                        label="Preço"
                        placeholder="R$ 00,00"
                        type="text"
                    />
                </div>
                <div>
                    <Input
                        id="dish_description"
                        label="Descrição"
                        rows={4}
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        type="textarea"
                    />
                </div>
                <Button title="Salvar Alterações" />
            </Form> */}
            <Footer />
        </Container>
    );
}