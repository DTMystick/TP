import React from "react";

const List1 = () => {
    const arr = [1, 2, 3, 4, 5]

    return (
        <ul>
            {arr.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default List1