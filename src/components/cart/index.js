import React, { useState } from "react"



function Cart({cart}) {

    return <div className="">
            В корзине: {cart.length} товара / 
        </div>;
}

export default React.memo(Cart)