import React from "react";

function Product(props) {
    return (
    <>
         <article>
            <span>{props.label}</span>
            <img src={props.image}
             alt={props.name}/>
            <p>{props.name}</p>
            <h4>&euro; {props.price},-</h4>
        </article>
    </>
    )
}

export default Product;