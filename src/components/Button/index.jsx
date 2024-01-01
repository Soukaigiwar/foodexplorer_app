import { Container } from "./styles";
//import { useState } from "react";

export function Button({ title, icon: Icon, alternatebuttoncolor = false, ...rest }) {
    //const [buttonFaceColor, setButtonFaceColor] = useState(alternatebuttoncolor);

    return (
        <Container type="button" alternatebuttoncolor={alternatebuttoncolor} {...rest}>
            {Icon && <img src={Icon} />}
            {title}
        </Container>
    );
}
