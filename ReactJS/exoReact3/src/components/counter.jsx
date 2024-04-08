import React, {useState} from "react";

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const incr = () => {
//         setCount(prevCount => prevCount + 1);
//     };
    
//     console.log(count);

//     return (
//         <div>
//             <p>Le compteur est à : {count}</p>
//             <button onClick={incr}>Incr</button>
//         </div>
//     );
// };

const Counter = ({count, incrCount}) => {
    return (
        <div>
            <p>Le compteur est à : {count}</p>
            <button onClick={incrCount}>Incr</button>
        </div>
    );
};

export default Counter;