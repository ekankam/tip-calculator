import React, { useState } from 'react'
import TipControls from './TipControls'
import TipDisplayScreen from './TipDisplayScreen'

const Form = () => {
    const [inputState, setInputState] = useState({
        bill: '',
        numOfPeople: '',
    })
    console.log(inputState)

    const tipHandler = (tip) => {
        console.log(tip)
    }

    return (
        <form className="form">
            <TipControls
                inputState={inputState}
                setInputState={setInputState}
                tipHandler={tipHandler}
            />
            <TipDisplayScreen />
        </form>
    )
}

export default Form
