import { Container, MenuIcon, OrderButton, Search, SignOut, Options, OrderBag } from "./styles";
import { Brand } from "../Brand";
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { TextButton } from "../TextButton";
import { Menu } from "../Menu";

import menuIcon from "../../assets/menu.svg";
import orderBagIcon from "../../assets/order_bag.svg";
import signOutIcon from "../../assets/sign_out.svg";
import searchIcon from "../../assets/search_icon.svg";
import { useAuth } from "../../hooks/auth.jsx";
import { useCart } from "../../hooks/cart.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRole } from "../../hooks/role";

export function Header() {
    const [menuIsVisible, setmenuIsVisible] = useState(false);
    const [isAdminRole, setIsAdminRole] = useState(false);

    const { isAdmin } = useRole();
    const { signOut } = useAuth();
    const { getQuantity } = useCart();

    const navigate = useNavigate();

    function toggleMenu() {
        setmenuIsVisible(!menuIsVisible);
    }

    function handleOrder() {
        navigate("/order");
    }

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    function handleAddNewDish() {
        navigate("/add_new_dish");
    }

    useEffect(() => {
        const checkIfUserRoleIsAdmin = async () => {
            const result = await isAdmin();
            setIsAdminRole(result);
        };
    
        checkIfUserRoleIsAdmin();
    }, []);

    return (
        <Container>
            <MenuIcon>
                <img src={menuIcon} alt="Ícone para exibir menu." onClick={toggleMenu} />
                {menuIsVisible && (
                    <Menu menuisvisible={menuIsVisible} toggleMenu={toggleMenu}/>
                )}
            </MenuIcon>
            <Brand onClick={() => { navigate("/"); }} />
            <Search>
                <SearchInput
                    id="search"
                    name="search"
                    icon={searchIcon}
                    alt="Lupa"
                    placeholder="Busque por pratos ou ingredientes"
                />
            </Search>
            {isAdminRole ? (
                <OrderButton>
                    <Button
                        title={"Novo Prato"}
                        $bgcolor="TOMATO_100"
                        onClick={handleAddNewDish}
                    />
                </OrderButton>
            ) : (
                <>
                    <Options>
                        <TextButton
                            title={"Meus favoritos"}
                            onClick={() => { }}
                        />
                        <TextButton
                            title={"Histórico de pedidos"}
                            onClick={() => { }}
                        />
                    </Options>
                    <OrderBag>
                        <span>{getQuantity()}</span>
                        <Button
                            icon={orderBagIcon}
                            $bgcolor="TOMATO_100"
                            onClick={() => { navigate("/order"); }}
                        />
                    </OrderBag>
                    <OrderButton>
                        <Button
                            icon={orderBagIcon}
                            title={"Pedidos (" + getQuantity() + ")"}
                            $bgcolor="TOMATO_100" 
                            onClick={handleOrder}
                        />
                    </OrderButton>
                </>
            )}
            <SignOut>
                <img
                    src={signOutIcon}
                    alt="Ícone para sair da aplicação."
                    onClick={handleSignOut}
                />
            </SignOut>
        </Container>
    );
}
