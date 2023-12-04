import React from "react";

function Cart(props) {
    const {cart, onRemoveFromCart} = props;
    return(
        <div className='shopping-cart'>
            <h2>Carrito de compras</h2>
            <ul>
                {cart.map((item,index)=>(
                    <li key = {index}>
                        {item.name} - {item.price}
                        <button onClick = {()=> onRemoveFromCart (index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${cart.reduce((total,item) => total + item.price, 0)}</h3>
        </div>
    )
}
export default Cart