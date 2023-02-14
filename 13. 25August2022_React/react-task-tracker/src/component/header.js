// import PropTypes from "prop-types";
// const Header = (props) =>{
//     return(
//         <header>
//             <h1> Hello,{props.title}</h1>
//         </header>
//     );
// };
// Header.defaultProps={
//     title:"Track Tracker",
// };
// Header.propTypes={
//     title:PropTypes.string.isRequired,
// };
import React from "react";
import PropTypes from 'prop-types'
const Header = ({title})=>{
    return(
        <header>
        <h1 style={headingStyle}>Hello,{title}</h1>
        </header>
    )
}

const headingStyle={
    color:'darkcyan',
    backgroundColor:'lightblue',
    textAlign:'center'
}
Header.defaultProps = {
    title:'Task Tracker',
}
Header.propTypes={
    //<Header title={1}/> in app.js will show the warning in console.
    title:PropTypes.string.isRequired,
}
export default Header;