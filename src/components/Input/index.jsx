import { Container } from "./styles";

export function Input({ label, id, ...rest }) {
    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...rest} />
        </Container>
    );
}
