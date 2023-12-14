import { Container } from "./styles";
import { useState, useEffect } from "react";
import logo from "../../assets/poligon.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Brand() {
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();
    const { role } = useAuth();

    useEffect(() => {
        setIsAdmin(() => {
            if (role && role === "admin") return true;
        });
    }, []);

    return (
        <Container onClick={() => navigate("/")}>
            <img src={logo} alt="logomarca do food explorer" />
            <h1>
                food explorer
                {isAdmin &&
                    <span>admin</span>
                }
            </h1>
        </Container>
    );
}
