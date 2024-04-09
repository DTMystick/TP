import React from "react";

const Logout = ({onClick}) => {
    return (
        <div>
            <h1>Deconnecte toi</h1>
            <button onClick={onClick}>Log out</button>
        </div>
    )
}

export default Logout
