import { Container, Header, Form } from "./styles";
import logo from "../../assets/poligon.svg";
import { Input } from "../../components/input";

export function SignIn() {
    return (
        <Container>
            <Header>
                <img src={logo} alt="logomarca do food explorer" />
                <h1>food explorer</h1>
            </Header>
            <Form>
                <h2>Faça Login</h2>
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
                <button>Entrar</button>
                <a href="/register">Criar uma conta</a>
            </Form>
        </Container>
    );
};
