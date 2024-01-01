import { Container } from "./styles";
//import { useState } from "react";

export function Button({ title, bgcolor, icon: Icon, ...rest }) {

    return (
        <Container type="button" $bgcolor={bgcolor} {...rest}>
            {Icon && <img src={Icon} />}
            {title}
        </Container>
    );
}
