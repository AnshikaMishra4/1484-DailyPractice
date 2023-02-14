const Login = (props) => {
    return(
        <header><h1>Login</h1>
            <h3>Username:{props.username}</h3>
            <h3>Password:{props.password}</h3>
        </header>
    );

}
export default Login;