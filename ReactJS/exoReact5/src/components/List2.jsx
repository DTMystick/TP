import React from "react";

const List2 = () => {
    const arr = [
        {firstName: "John", lastName: "Doe"},
        {firstName: "Jane", lastName: "Doe"},
        {firstName: "Janice", lastName: "Joplin"}
    ]

    return (
        <ul>
            {arr.map((item, index) => (
                <li key={index}>
                    {item.firstName} {item.lastName}
                </li>
            ))}
        </ul>
    )
}

export default List2