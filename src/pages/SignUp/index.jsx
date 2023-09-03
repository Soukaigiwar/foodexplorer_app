import { Container, Header, Form } from "./styles";
import logo from "../../assets/poligon.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
    return (
        <Container>
            <Header>
                <img src={logo} alt="logomarca do food explorer" />
                <h1>food explorer</h1>
            </Header>
            <Form>
                <h2>Crie sua conta</h2>
                <div>
                    <Input
                        id="text_name"
                        label="Seu nome"
                        autoComplete="name"
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                    />
                </div>
                <div>
                    <Input
                        id="text_email"
                        label="Email"
                        autoComplete="e-mail"
                        placeholder="E-mail"
                        type="email"
                    />
                </div>
                <div>
                    <Input
                        id="text_password"
                        label="Senha"
                        autoComplete="password"
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                    />
                </div>
                <Button title="Criar Conta" />
                <a href="/">Já tenho uma conta</a>
            </Form>
        </Container>
    );
};
