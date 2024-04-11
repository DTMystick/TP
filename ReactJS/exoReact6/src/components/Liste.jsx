import React from "react";
import { useEffect } from "react";
import RedText from "./RedText";

const Liste = () => {
    const products = [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ];

//     useEffect(() => {
// function Redtext(){
//     (!products.stocked) ? (<td className="bs-danger">{products.name}</td>) : (<td>{products.name}</td>)
// }        
//     }, [products.stocked]);
 
    return (
        <>
            <table className="table table-striped">
                <tbody>
                    {products.map((item, index) => (
                        <>
                            <tr key={index}>
                            <td className={item.stocked}>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </>
    
    )
    
}

{/* <td className="bs-danger">{item.name}</td> */ }

export default Liste