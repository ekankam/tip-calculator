import React from 'react'
import Button from './Button'
import TextInputField from './TextInputField'

const TipControls = ({ formState, setFormState, getButtonValue }) => {
    const { bill, people, custom } = formState

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    return (
        <div className="tip-group">
            {/* Bill input */}
            <TextInputField
                label="Bill"
                labelFor="bill"
                className={bill === '0' ? 'error-msg' : 'msg'}
                name="bill"
                type="text"
                placeholder="0"
                icon="dollar"
                iconAlt="Dollar sign"
                value={bill}
                onChange={onChangeHandler}
            />
            {/* Tip percentage */}
            <div className="tip-box">
                <p className="tip-box__header">Select Tip %</p>

                <div className="tip-box__btns">
                    <Button
                        className="tip-btn"
                        type="button"
                        buttonText="5%"
                        onClick={() => getButtonValue(0.05)}
                    />
                    <Button
                        className="tip-btn"
                        type="button"
                        buttonText="10%"
                        onClick={() => getButtonValue(0.1)}
                    />
                    <Button
                        className="tip-btn"
                        type="button"
                        buttonText="15%"
                        onClick={() => getButtonValue(0.15)}
                    />
                    <Button
                        className="tip-btn"
                        type="button"
                        buttonText="25%"
                        onClick={() => getButtonValue(0.25)}
                    />
                    <Button
                        className="tip-btn"
                        type="button"
                        buttonText="50%"
                        onClick={() => getButtonValue(0.5)}
                    />
                    <input
                        type="text"
                        name="custom"
                        placeholder="Custom"
                        className="custom-input"
                        value={custom}
                        onChange={onChangeHandler}
                    />
                </div>
            </div>
            {/* # of People input */}
            <TextInputField
                label="Number of People"
                labelFor="people"
                className={people === '0' ? 'error-msg' : 'msg'}
                name="people"
                type="text"
                placeholder="0"
                icon="person"
                iconAlt="person icon"
                value={people}
                onChange={onChangeHandler}
            />
        </div>
    )
}

export default TipControls
