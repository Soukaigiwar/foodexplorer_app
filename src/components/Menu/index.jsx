import { Container, Header, Content } from "./styles";
import { SearchInput } from "../SearchInput";
import searchIcon from "../../assets/search_icon.svg";
import closeIcon from "../../assets/close.svg";
import { Footer } from "../Footer";
import { useAuth } from "../../hooks/auth";

export function Menu({ toggleMenu, menuisvisible }) {
    const { signOut } = useAuth();
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
                    <p onClick={signOut}>Sair</p>
                </div>
            </Content>
            <Footer />
        </Container>

    );
}
