import { Container, MenuIcon, OrderButton, Search, SignOut, OrderBag } from "./styles";
import { Brand } from "../Brand";
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { Menu } from "../Menu";
import { Cart } from "../Cart";
import { api } from "../../services/api.js";

import menuIcon from "../../assets/menu.svg";
import orderBagIcon from "../../assets/order_bag.svg";
import signOutIcon from "../../assets/sign_out.svg";
import searchIcon from "../../assets/search_icon.svg";

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
    const { signOut } = useAuth();
    const { getQuantity } = useCart();
    const [menuIsVisible, setmenuIsVisible] = useState(false);
    
    const navigate = useNavigate();

    function toggleMenu() {
        setmenuIsVisible(!menuIsVisible);
    };

    function handleOrder() {

        navigate("/order");
    }

    function handleSignOut() {
        signOut();
        navigate(`/`);
    }

    return (
        <Container>
            <MenuIcon>
                <img src={menuIcon} alt="Ícone para exibir menu." onClick={toggleMenu} />
                {menuIsVisible && (
                    <Menu menuisvisible={menuIsVisible} toggleMenu={toggleMenu}/>
                )}
            </MenuIcon>
            <Brand onClick={() => { navigate("/") }} />
            <Search>
                <SearchInput
                    id="search"
                    name="search"
                    icon={searchIcon}
                    alt="Lupa"
                    placeholder="Busque por pratos ou ingredientes"
                />
            </Search>
            <Cart />
            <OrderBag>
                <span>{getQuantity()}</span>
                <Button
                    icon={orderBagIcon}
                    onClick={() => { navigate("/order") }}
                />
            </OrderBag>
            <OrderButton>
                <Button
                    icon={orderBagIcon}
                    title={"Pedidos (" + getQuantity() + ")"}
                    onClick={handleOrder}
                />
            </OrderButton>
            <SignOut>
                <img
                    src={signOutIcon}
                    alt="Ícone para sair da aplicação."
                    onClick={handleSignOut}
                />
            </SignOut>
        </Container>
    )
};
