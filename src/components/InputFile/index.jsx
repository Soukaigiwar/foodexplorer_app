import { Container } from "./styles";

export function InputFile({ label, id, icon, ...rest }) {
    const uniqueId = "id" + Math.floor(Math.random() * 9999999);

    return (
        <Container>
            <label id={uniqueId} htmlFor={id}>{label}</label>
            <div
                onClick={() => document.getElementById( uniqueId ).click()}
            >
                <img src={icon} alt={label} />
                <input
                    id={id}
                    type="file"
                />
                <span>{rest.text}</span>
            </div>
        </Container>
    );
}
