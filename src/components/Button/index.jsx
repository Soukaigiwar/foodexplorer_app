import { Container } from "./styles";

export function Button({ title, bgcolor, icon: Icon, ...rest }) {

    return (
        <Container type="button" $bgcolor={bgcolor} {...rest}>
            {Icon && <img src={Icon} />}
            {title}
        </Container>
    );
}
