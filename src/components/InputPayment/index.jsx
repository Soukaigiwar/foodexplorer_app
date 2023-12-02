import { Container } from "./styles";
import { usePaymentInputs } from 'react-payment-inputs';

export function InputPayment({ label, id, ...rest }) {
    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

    return (
        <Container>
            {({ meta, getCardNumberProps, getExpiryDateProps, getCVCProps }) => (
                <div>
                    <input {...getCardNumberProps({ onChange: handleChangeCardNumber })} value={cardNumber} />
                    {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
                </div>
            )}
        </Container>
    );
};
