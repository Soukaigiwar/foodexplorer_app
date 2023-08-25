import { Container, Header, Form } from "./styles";
import logo from "../../assets/poligon.svg";

export function SignUp() {
    return (
        <Container>
            <Header>
                <img src={logo} alt="logomarca do food explorer" />
                <h1>food explorer</h1>
            </Header>
            <Form>
                <div>
                    <label htmlFor="text_name">Seu nome</label>
                    <input type="text" placeholder="Exemplo: Maria da Silva" />
                </div>

                <div>
                <label htmlFor="text_email">Email</label>
                <input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
                </div>
                    <label htmlFor="text_password">Senha</label>
                <div>
                    <input type="password" placeholder="No mínimo 6 caracteres" />
                </div>
                <button>Criar conta</button>
                <a href="/">Já tenho uma conta</a>
            </Form>
        </Container>
    );
};
