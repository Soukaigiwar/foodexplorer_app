import { Container } from "./styles";

export function Button({ title, icon, ...rest }) {
    return (
        <Container type="button" {...rest}>
            {icon ?? <img src={icon} />}
            {/* <img src={icon} /> */}
            {title}
        </Container>
    );
};
