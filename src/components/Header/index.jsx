import { Container, MenuIcon, OrderBag, OrderButton, Search, SignOut } from "./styles";
import { Brand } from "../Brand";
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { Menu } from "../Menu";

import menuIcon from "../../assets/menu.svg";
import orderBag from "../../assets/order_bag.svg";
import signOutIcon from "../../assets/sign_out.svg";
import searchIcon from "../../assets/search_icon.svg";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function Header() {
    const { signOut } = useAuth();
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
            <OrderBag>
                <img
                    src={orderBag}
                    alt="Ícone para exibir quantidade de itens no pedido."
                />
                <span>0</span>
            </OrderBag>
            <OrderButton>
                <Button icon={orderBag} title="Pedidos (0)" />
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
