import React,{createContext} from 'react'
import { useReducer } from 'react';

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

//Creating Cart Context
export const CartItemContext = createContext({
   isCartOpen:false,
   setIsCartOpen:()=>{},
   cartItems:[],
//    setCartItems:()=>{},
   addItemToCart:()=>{},
   removeItemFromCart:()=>{},
   clearItemFromCart:()=>{},
   cartItemCount:0,
   cartItemTotal:0
})

//declaring intial state of the variables
const INITIAL_STATE={
    isCartOpen:false,
    cartItems:[],
    cartItemCount:0,
    cartItemTotal:0
}

const cartItemReducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case 'SET_CART_ITEMS':
             return{
                 ...state,
                 ...payload
                }
        case 'TOGGLE_CART_DROPDOWN':
            return{
                ...state,
                ...payload
            }
         default:
             throw new Error('Type not found');
    }
//     // return{
//     //     ...state,
//     //     cartItems:'',
//     //     cartCount:'',
//     //     cartTotal:'',
//     //     isCartOpen:false
//     // }
}



export const CartProvider=({children})=>{
    // const [isCartOpen,setIsCartOpen]=useState(false);
    // const [cartItems,setCartItems]=useState([]);

    const [{isCartOpen,cartItems,cartItemCount,cartItemTotal},dispatch]=useReducer(cartItemReducer,INITIAL_STATE);

    const updateCartReducer=(newCartItems)=>{
        const newCartTotal= newCartItems.reduce((total,item)=>
            total+(item.qty*item.price),
            0
        )
        const newCartCount= newCartItems.reduce((total,item)=>
            total+item.qty,
            0
        )
    dispatch(
        {
            type:'SET_CART_ITEMS',
            payload:{
                        cartItems:newCartItems,
                        cartItemTotal:newCartTotal,
                        cartItemCount:newCartCount 
                    }
        })
    }

    const setIsCartOpen=(bool)=>{
        dispatch({
            type:'TOGGLE_CART_DROPDOWN',
            payload:{
                isCartOpen:bool
            }
        })
    }
    const addItemToCart = (product) =>{
        const newCartItems=addCartItem(cartItems, product);
        updateCartReducer(newCartItems)
    }
    
    // addToCartAction(product);

    const  removeItemFromCart=(product)=>{
        const newCartItems=removeItem(cartItems,product);
        updateCartReducer(newCartItems)
    }
    const clearItemFromCart=(product)=>{
        const newCartItems=clearItem(cartItems,product);
        updateCartReducer(newCartItems)
    }

    const value={
                isCartOpen,
                cartItems,
                addItemToCart,
                removeItemFromCart,
                clearItemFromCart,
                setIsCartOpen,
                cartItemTotal,
                cartItemCount
    };
    return(
    <CartItemContext.Provider value={value}>
        {children}
    </CartItemContext.Provider>
    )
   
}