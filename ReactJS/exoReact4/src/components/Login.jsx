import React from "react";

const Login = ({onClick}) => {
    return (
        <div>
            <h1>Connecte toi</h1>
            <button onClick={onClick}>Log in</button>

        </div>
    )
}

export default Login