import { Container } from "./styles";
import { useState } from "react";

export function Button({ title, icon: Icon, alternateButtonColor = false, ...rest }) {
    const [buttonFaceColor, setButtonFaceColor] = useState(alternateButtonColor);

    return (
        <Container type="button" alternateButtonColor={buttonFaceColor} {...rest}>
            {Icon && <img src={Icon} />}
            {title}
        </Container>
    );
}
