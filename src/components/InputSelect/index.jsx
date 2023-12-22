import { Container } from "./styles";

export function InputSelect({ label, id, options, ...rest }) {
    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <div
                onClick={() =>
                    document.getElementById(id).click()}
            >
                <select id={id}>
                    {
                        options.map(option => (
                            <option key={option.id} value={option.value}>{option.label}</option>
                        ))
                    }
                </select>
                <img src={rest.icon} alt={label} />
            </div>
        </Container>
    );
}
