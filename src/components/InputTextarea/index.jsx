import { Container } from "./styles";

export function InputTextarea({ id, label, value, ...rest }) {
    return (
        <Container >
            <label htmlFor={id}>{label}</label>
            <textarea {...rest} value={value} />
        </Container>
    );
}