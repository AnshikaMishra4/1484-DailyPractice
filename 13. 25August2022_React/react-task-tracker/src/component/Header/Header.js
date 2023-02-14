import React from "react";
import PropTypes from 'prop-types';
import "./Header.css";
import {Button} from "./Button";
const Header = ({title}) => {
    const onClick=(e)=>{
        console.log('Click',e);
    }
    return (
        <header className='header'>
            <h1>Hello, {title}</h1>
            <Button onClick={onClick} color='green' text='Hello'></Button>
            <Button onClick={onClick} color='blue' text='Hello'></Button>
            <Button onClick={onClick} color='red' text='Hello'></Button>
            <Button onClick={onClick}/>
            {/* <button className='btn'>Add</button> */}
            {/* <h2 className="h2Head">H2 Heading</h2>
            <h3 id="h3Head">H3 Heading</h3> */}
        </header>
    );
}
const headingStyle={
    color:"darkcyan",
    backgroundColor:'lightblue',
    textAlign:'center',
}
Header.defaultProps = {
    title:'Task Tracker',
}
Header.propTypes={
    //<Header title={1}/> in app.js will show the warning in console.
    title:PropTypes.string.isRequired,
}
export default Header;