import { Header } from "../../components/Header";
import { BackTextButton } from "../../components/BackTextButton";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";

export function NewDish() {
    return (
        <Container>
            <Header />
            <div className="backTextButton">
                <BackTextButton />
            </div>
            <Form>
                <h2>Novo Prato</h2>
                <div>
                    <Input
                        id="image"
                        label="Imagem do prato"
                        placeholder="Selecione imagem"
                        type="file"

                    />
                </div>
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
            </Form>
            <Footer />
        </Container>
    );
}