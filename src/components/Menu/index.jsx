import { Container, Header, Content } from "./styles";
import { SearchInput } from "../SearchInput";
import searchIcon from "../../assets/search_icon.svg";
import closeIcon from "../../assets/close.svg";
import { Footer } from "../Footer";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRole } from "../../hooks/role";

export function Menu({ toggleMenu, menuisvisible }) {
    const { signOut } = useAuth();
    const navigate = useNavigate();
    const { isAdmin } = useRole();
    const [isAdminRole, setIsAdminRole] = useState(false);

    const handleSignOut = () => {
        navigate("/");
        signOut();
    };

    const handleLinkToOrderSummary = () => {
        toggleMenu();
        navigate("/order_history");
    };

    const handleAddNewDish = () => {
        navigate("/add_new_dish");
    };

    useEffect(() => {
        const checkIfUserRoleIsAdmin = async () => {
            const result = await isAdmin();
            setIsAdminRole(result);
        };
    
        checkIfUserRoleIsAdmin();
    }, []);

    return (
        <Container $menuisvisible={menuisvisible.toString()}>
            <Header>
                <button onClick={toggleMenu}>
                    <img src={closeIcon} />
                    <p>Menu</p>
                </button>
            </Header>
            <Content>
                <SearchInput
                    id="search_in_menu"
                    icon={searchIcon}
                    alt="Lupa"
                    placeholder="Busque por pratos ou ingredientes"
                />
                <div>
                    {isAdminRole ? (
                        <>
                            <p onClick={() => { handleAddNewDish(); }}>
                                Novo Prato
                            </p>
                            <p onClick={() => { handleSignOut(); }}>
                                Sair
                            </p>
                        </>
                    ) : (
                        <>
                            <p onClick={() => { handleLinkToOrderSummary(); }}>
                            Histórico de pedidos
                            </p>
                            <p onClick={() => { handleSignOut(); }}>
                            Sair
                            </p>
                        </>
                    )}
                </div>
            </Content>
            <Footer />
        </Container>

    );
}
