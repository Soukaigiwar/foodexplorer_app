import { Container } from "./styles";

export function SearchInput({ icon, alt, ...rest }) {
    return (
        <Container>
            <img src={icon} alt={alt} />
            <input {...rest} />
        </Container>
    );
}
