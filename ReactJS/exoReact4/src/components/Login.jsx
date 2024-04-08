import React from "react";

const Login = ({onClick}) => {
        const incr = () => {
        setCount(prevCount => true);
    };
    return (
        <button onClick={onClick}>Log in</button>
    )
}

export default Login