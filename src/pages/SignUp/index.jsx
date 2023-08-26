import { Container, Header, Form } from "./styles";
import logo from "../../assets/poligon.svg";
import { Input } from "../../components/input";

export function SignUp() {
    return (
        <Container>
            <Header>
                <img src={logo} alt="logomarca do food explorer" />
                <h1>food explorer</h1>
            </Header>
            <Form>
                <div>
                    <Input
                        id="text_name"
                        label="Nome"
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
                <button>Criar conta</button>
                <a href="/">Já tenho uma conta</a>
            </Form>
        </Container>
    );
};
