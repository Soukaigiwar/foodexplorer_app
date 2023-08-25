import { Container, Header, Form } from "./styles";
import logo from "../../assets/poligon.svg";

export function SignIn() {
    return (
        <Container>
            <Header>
                <img src={logo} alt="logomarca do food explorer" />
                <h1>food explorer</h1>
            </Header>
            <Form>
                <div>
                <label htmlFor="text_email">Email</label>
                <input
                    type="email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    />
                </div>
                <div>
                <label htmlFor="text_password">Senha</label>
                <input
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
