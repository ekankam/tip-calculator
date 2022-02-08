import React from 'react'

const TipAmountDisplay = ({ label, amount }) => {
    return (
        <div className="tip-amount">
            <div className="label-box">
                <p>{label}</p>
                <span>/ person</span>
            </div>
            <span className="amount">&#36; {amount}</span>
        </div>
    )
}

export default TipAmountDisplay
