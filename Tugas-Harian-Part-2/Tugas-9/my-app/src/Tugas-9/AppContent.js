import React from 'react'
import '../App.css'
import FormContent from './FormContent'

class AppContent extends React.Component {
    render() {
        return (
            <header className="App-header">
                <div className="App-content">
                    <FormContent />
                </div>
            </header>
        )
    }
}

export default AppContent