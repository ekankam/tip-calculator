import React from 'react'
import Button from './Button'
import TextInputField from './TextInputField'

const TipControls = ({ inputState, setInputState, tipHandler }) => {
    return (
        <div className="tip-group">
            {/* Bill input */}
            <TextInputField
                label="Bill"
                labelFor="bill"
                type="text"
                placeholder="0"
                icon="dollar"
                iconAlt="Dollar sign"
                value={inputState.bill}
                onChange={(e) => setInputState(e.target.value)}
            />
            {/* Tip percentage */}
            <div className="tip-box">
                <p className="tip-box__header">Select Tip %</p>
                <div className="tip-box__btns">
                    <Button
                        className="tip-btn"
                        type="button"
                        buttonText="5%"
                        onClick={() => tipHandler(0.05)}
                    />
                    <Button
                        className="tip-btn"
                        type="button"
                        buttonText="10%"
                        onClick={() => tipHandler(0.1)}
                    />
                    <Button
                        className="tip-btn"
                        type="button"
                        buttonText="15%"
                        onClick={() => tipHandler(0.15)}
                    />
                    <Button
                        className="tip-btn"
                        type="button"
                        buttonText="25%"
                        onClick={() => tipHandler(0.25)}
                    />
                    <Button
                        className="tip-btn"
                        type="button"
                        buttonText="50%"
                        onClick={() => tipHandler(0.5)}
                    />
                    <input
                        type="text"
                        placeholder="Custom"
                        className="custom-input"
                    />
                </div>
            </div>
            {/* # of People input */}
            <TextInputField
                label="Number of People"
                labelFor="people"
                type="text"
                placeholder="0"
                icon="person"
                iconAlt="person icon"
                value={inputState.people}
                onChange={(e) => setInputState(e.target.value)}
            />
        </div>
    )
}

export default TipControls
