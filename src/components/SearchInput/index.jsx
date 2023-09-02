import { Container } from "./styles";
import searchIcon from "../../assets/search_icon.svg";

export function SearchInput({ ...rest }) {
    return (
        <Container>
            <img src={searchIcon} />
            <input {...rest} />
        </Container>
    );
};
