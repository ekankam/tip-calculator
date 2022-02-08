import React from 'react'
import Button from './Button'
import TipAmountDisplay from './TipAmountDisplay'

const TipDisplayScreen = ({
    formState,
    setFormState,
    calculateTipHandler,
    tipPerPerson,
    amountPerPerson,
    clearFormState,
}) => {
    const buttonText = amountPerPerson && tipPerPerson

    const onSubmission = () => {
        calculateTipHandler()
        setFormState({ ...formState, isSubmit: true })

        if (amountPerPerson && tipPerPerson) {
            clearFormState()
        }
    }
    return (
        <div className="tip-display">
            <div>
                <TipAmountDisplay
                    label="Tip Amount"
                    amount={tipPerPerson || '0.00'}
                />
                <TipAmountDisplay
                    label="Total"
                    amount={amountPerPerson || '0.00'}
                />
            </div>
            <Button
                className="display-btn"
                type="submit"
                buttonText={buttonText ? 'Reset' : 'Calculate'}
                onClick={() => onSubmission()}
            />
        </div>
    )
}

export default TipDisplayScreen
