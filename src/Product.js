import React from "react"

function Product(props) {
    return (
        <div>
        <p>{props.name}</p>
        <p>{props.price} - {props.description}</p>
       </div>
    )
}

export default Product