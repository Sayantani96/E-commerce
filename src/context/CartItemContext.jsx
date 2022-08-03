import React,{createContext, useState} from 'react'

const addCartItem=(cartItems,productToAdd)=>{
    const ItemExists=cartItems.find((cartItem)=>cartItem.id===productToAdd.id);

    if(ItemExists){
        return cartItems.map(cartItem=>
            cartItem.id===productToAdd.id?
            {...cartItem,qty:cartItem.qty+1}:
            cartItem
            )

    }

    return [...cartItems,{...productToAdd,qty:1}];

}

export const CartItemContext = createContext({
   isCartOpen:false,
   setIsCartOpen:()=>{},
   cartItems:[],
   setCartItems:()=>{},
   addItemToCart:()=>{}
})

export const CartProvider=({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false);
    const [cartItems,setCartItems]=useState([]);

    const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));


    const value={isCartOpen,setIsCartOpen,cartItems,addItemToCart};
    return(
        <CartItemContext.Provider value={value}>
        {children}
    </CartItemContext.Provider>
    )
   
}