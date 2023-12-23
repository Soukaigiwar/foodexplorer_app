import { Container } from "./styles";

export function InputSelect({ label, id, options, onChange, ...rest }) {
    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <div
                onClick={() => {
                    const selectElement = document.getElementById(id);
                    if (selectElement) {
                        selectElement.click();
                    }
                }
                }
                //document.getElementById(id).click()}
            >
                <select id={id} onChange={onChange}>
                    <option value="none">Selecione a Categoria</option>
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
