import React, { useState } from 'react'
import TipControls from './TipControls'
import TipDisplayScreen from './TipDisplayScreen'

const TipBox = () => {
    const [formState, setFormState] = useState({
        bill: '',
        people: '',
        custom: '',
        tipButtonClicked: false,
        isSubmit: false,
    })

    const [tipPerPerson, setTipPerPerson] = useState('')
    const [amountPerPerson, setAmountPerPerson] = useState('')
    const [tipButtonValue, setTipButtonValue] = useState(0)

    const { bill, people, custom } = formState

    // get button tip value
    const getButtonValue = (value) => {
        setTipButtonValue(value)
        return value
    }

    // calculate tip and total
    const calculateTipHandler = () => {
        let perTip, totalTip, roundTip

        // if bill and people input field empty, do not submit form
        if (bill === '' || people === '') return

        if (bill !== '' && people !== '' && custom !== '') {
            perTip = (Number(bill) * Number(custom / 100)) / Number(people)
            totalTip = Number(bill) * Number(custom / 100)

            roundTip = Math.round(perTip * 100) / 100
            setTipPerPerson(roundTip)
        } else {
            perTip = (Number(bill) * Number(tipButtonValue)) / Number(people)
            totalTip = Number(bill) * Number(tipButtonValue)

            roundTip = Math.round(perTip * 100) / 100
            setTipPerPerson(roundTip)
            setFormState({ ...formState, tipButtonClicked: true })
        }

        // calculating total
        const total = Math.round(
            (((Number(bill) + totalTip) / Number(people)) * 100) / 100
        )
        setAmountPerPerson(total)
    }

    // clear formState
    const clearFormState = () => {
        setFormState({
            bill: '',
            people: '',
            custom: '',
            tipButtonClicked: false,
            isInputValid: false,
        })
        setAmountPerPerson('')
        setTipPerPerson('')
    }

    return (
        <div className="tip-box">
            <TipControls
                formState={formState}
                setFormState={setFormState}
                calculateTipHandler={calculateTipHandler}
                getButtonValue={getButtonValue}
            />
            <TipDisplayScreen
                formState={formState}
                setFormState={setFormState}
                calculateTipHandler={calculateTipHandler}
                tipPerPerson={tipPerPerson}
                amountPerPerson={amountPerPerson}
                clearFormState={clearFormState}
            />
        </div>
    )
}

export default TipBox
