import { Container, Menu, OrderBag, OrderButton, Search, SignOut } from "./styles";
import { Brand } from "../Brand";
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import menuIcon from "../../assets/menu.svg";
import orderBag from "../../assets/order_bag.svg";
import signOut from "../../assets/sign_out.svg";

export function Header() {
    return (
        <Container>
            <Menu>
                <img src={menuIcon} alt="Ícone para exibir menu." />
            </Menu>
            <Brand />
            <Search>
                <SearchInput
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
                    src={signOut}
                    alt="Ícone para exibir quantidade de itens no pedido."
                />
                <span>0</span>
            </SignOut>
        </Container>
    )
};
