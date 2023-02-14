import React from 'react';
import Form from './Form';
import Test from './Test';
const App = () => {
    return(
        <div>
            <h1>This is App component, heading one</h1>
            <h2>This is App component, heading two</h2>
            <p>This is App component</p>
            <Form/>
            <Test/>
        </div>
    );
}

export default App;