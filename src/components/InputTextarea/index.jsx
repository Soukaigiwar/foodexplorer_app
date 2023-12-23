import { Container } from "./styles";

export function InputTextarea({ id, label, value, placeholder, ...rest }) {
    return (
        <Container >
            <label htmlFor={id}>{label}</label>
            <textarea {...rest} value={value} placeholder={placeholder} />
        </Container>
    );
}