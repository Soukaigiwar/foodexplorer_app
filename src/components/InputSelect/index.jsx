import { useState } from "react";
import { Container } from "./styles";

export function InputSelect({ label, id, options, onChange, ...rest }) {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedValue(value);
        onChange(value);
    };

    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <div
                onClick={() => {
                    const selectElement = document.getElementById(id);
                    if (selectElement) {
                        selectElement.click();
                    }
                }}
            >
                <select id={id} value={selectedValue} onChange={handleChange}>
                    <option value="">Selecione a Categoria</option>
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
