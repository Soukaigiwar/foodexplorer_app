import { Container, MenuIcon, OrderButton, Search, SignOut, OrderBag } from "./styles";
import { Brand } from "../Brand";
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { Menu } from "../Menu";
import { Cart } from "../Cart";

import menuIcon from "../../assets/menu.svg";
import orderBagIcon from "../../assets/order_bag.svg";
import signOutIcon from "../../assets/sign_out.svg";
import searchIcon from "../../assets/search_icon.svg";

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart.jsx";
import { useState } from "react";

export function Header() {
    const { signOut } = useAuth();
    const { getQuantity, showItem } = useCart();
    const [menuIsVisible, setmenuIsVisible] = useState(false);

    

    function toggleMenu() {
        setmenuIsVisible(!menuIsVisible);
    };

    

    return (
        <Container>
            <MenuIcon>
                <img src={menuIcon} alt="Ícone para exibir menu." onClick={toggleMenu} />
                {menuIsVisible && (
                    <Menu menuisvisible={menuIsVisible} toggleMenu={toggleMenu}/>
                )}
            </MenuIcon>
            <Brand />
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
                    onClick={() => { console.log(showItem()) }}
                />
            </OrderBag>
            <OrderButton>
                <Button
                    icon={orderBagIcon}
                    title={"Pedidos (" + getQuantity() + ")"}
                    onClick={() => { console.log(showItem()) }}
                />
            </OrderButton>
            <SignOut>
                <img
                    src={signOutIcon}
                    alt="Ícone para sair da aplicação."
                    onClick={signOut}
                />
            </SignOut>
        </Container>
    )
};
