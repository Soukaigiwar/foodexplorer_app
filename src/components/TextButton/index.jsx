import { Container } from "./styles";


export function TextButton({ title, icon, alt, ...rest }) {
    return (
        <Container type="button" {...rest}>
            <span><img src={icon} alt={alt} />{ title }</span>
        </Container>
    )
}