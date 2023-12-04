import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

import { Container, Header, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import logo from "../../assets/poligon.svg";

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if (!name || !email || !password)
            return alert("Preencha todos os campos!");

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso.")
                navigate("/")
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível cadastrar.")

                }
            })
    };

    function handleKeyDown(event) {
        if (event.key === "Enter" && !email && !password)
            document.getElementById('text_email').focus();
        
        if (event.key === "Enter" && email && !password)
            document.getElementById('text_password').focus();

        if (event.key === "Enter" && email && password) handleSignUp();
    }

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
                        onChange={e => setName(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div>
                    <Input
                        id="text_email"
                        label="Email"
                        autoComplete="e-mail"
                        placeholder="E-mail"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div>
                    <Input
                        id="text_password"
                        label="Senha"
                        autoComplete="password"
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                        onChange={e => setPassword(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <Button title="Criar Conta" onClick={handleSignUp} />
                <a href="/">Já tenho uma conta</a>
            </Form>
        </Container>
    );
};
