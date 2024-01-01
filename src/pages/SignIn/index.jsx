import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { Container, Header, Form } from "./styles";
import logo from "../../assets/poligon.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();
    const navigate = useNavigate();

    function handleSignIn() {
        signIn({ email, password });
    }

    function handleKeyDown(e) {
        if (e.key === "Enter" && !password)
            document.getElementById("text_password").focus();

        if (e.key === "Enter" && password) handleSignIn();
    }

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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <Button
                    title="Entrar"
                    $bgcolor="TOMATO_100"
                    onClick={handleSignIn}
                />
                <a onClick={() => { navigate("/register"); }}>Criar uma conta</a>
            </Form>
        </Container>
    );
}
