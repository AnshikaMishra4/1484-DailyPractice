//import PropTypes from "prop-types";
const Header = (props) => {
    return(
        <header><h1>Registration</h1>
            <h3>Name:{props.Name}</h3>
            <h3>Age:{props.Age}</h3>
            <h3>Address:{props.Address}</h3>
            <h3>Username:{props.Usename}</h3>
            <h3>Password:{props.Password}</h3>
        </header>
    );

}
export default Header;