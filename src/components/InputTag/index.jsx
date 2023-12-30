import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function InputTag({ isNew = true, title, onClick, ...rest }) {
    return (
        <Container isnew={isNew}>

            <div className="tags">
                <input
                    type="text"
                    title={title}
                    readOnly={!isNew}
                    {...rest}
                />
                <button
                    type="button"
                    onClick={onClick}
                    className={isNew ? "button-add" : "button-delete"}
                >
                    {isNew ? <FiPlus /> : <FiX />}
                </button>
            </div>

        </Container>
    );
}
