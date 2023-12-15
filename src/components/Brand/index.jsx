import { Container } from "./styles";
import logo from "../../assets/poligon.svg";
import { useNavigate } from "react-router-dom";
import { useRole } from "../../hooks/role";
import { useState, useEffect } from "react";

export function Brand() {
    const [isAdminRole, setIsAdminRole] = useState(false);
    const { isAdmin } = useRole();

    const navigate = useNavigate();
    
    useEffect(() => {
        const checkIfUserRoleIsAdmin = async () => {
            const result = await isAdmin();
            setIsAdminRole(result);
        };
    
        checkIfUserRoleIsAdmin();
    }, []);


    return (
        <Container onClick={() => navigate("/")}>
            <img src={logo} alt="logomarca do food explorer" />
            <h1>
                food explorer
                {isAdminRole &&
                    <span>admin</span>
                }
            </h1>
        </Container>
    );
}
