import { Container } from "./styles";

export function Tag({ title, ...rest }) {
    return (
        <Container>
            <span>{title}</span>
        </Container>
    )
};
