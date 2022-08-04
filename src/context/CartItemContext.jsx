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

const removeItem=(cartItems,product)=>{
    const itemToRemove=cartItems.find((cartItem)=>cartItem.id===product.id);
    if(itemToRemove.qty===1){
       return cartItems.filter(item=>item!==itemToRemove)
    }
    return cartItems.map((item)=>item.id===itemToRemove.id?
     {...item,qty:item.qty-1}:item)

}

const clearItem=(cartItems,product)=>{
    const itemToRemove=cartItems.find((cartItem)=>cartItem.id===product.id);
      
    return cartItems.filter(item=>item!==itemToRemove)
    

}

export const CartItemContext = createContext({
   isCartOpen:false,
   setIsCartOpen:()=>{},
   cartItems:[],
   setCartItems:()=>{},
   addItemToCart:()=>{},
   removeItemFromCart:()=>{},
   clearItemFromCart:()=>{},
})

export const CartProvider=({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false);
    const [cartItems,setCartItems]=useState([]);

    const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

    const  removeItemFromCart=(product)=>{
        setCartItems(removeItem(cartItems,product));
    }
    const clearItemFromCart=(product)=>{
        setCartItems(clearItem(cartItems,product));
    }

    const value={isCartOpen,setIsCartOpen,cartItems,addItemToCart,removeItemFromCart,clearItemFromCart};
    return(
        <CartItemContext.Provider value={value}>
        {children}
    </CartItemContext.Provider>
    )
   
}