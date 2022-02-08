import React from 'react'
import Footer from './components/Footer'
import TipBox from './components/TipBox'

const App = () => {
    return (
        <div className="container">
            <h2 className="header">
                Spli <br /> tter
            </h2>

            <TipBox />
            <Footer />
        </div>
    )
}

export default App
