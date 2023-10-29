import { Container, Menu, OrderBag, OrderButton, Search, SignOut } from "./styles";
import { Brand } from "../Brand";
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import menuIcon from "../../assets/menu.svg";
import orderBag from "../../assets/order_bag.svg";
import signOutIcon from "../../assets/sign_out.svg";
import searchIcon from "../../assets/search_icon.svg";
import { useAuth } from "../../hooks/auth";

export function Header() {
    const { signOut } = useAuth();
    return (
        <Container>
            <Menu>
                <img src={menuIcon} alt="Ícone para exibir menu." />
            </Menu>
            <Brand />
            <Search>
                <SearchInput
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
