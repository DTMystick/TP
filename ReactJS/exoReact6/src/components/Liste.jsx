import React from "react";
import { useEffect } from "react";

const Liste = () => {
    const products = [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ];
    useEffect ( () => {

        if (products.stocked == false) {

        }

        return (
            <>
                <table className="table table-striped">
                    <tbody>
                        {products.map((item, index) => (
                            <>
                                <tr key={index}>
                                <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr> 
                            </>
                        ))}
                        </tbody>
                </table>
            </>
        )

    }, [products.stocked]);
    
}

{/* <td className="bs-danger">{item.name}</td> */}

export default Liste