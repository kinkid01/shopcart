import { useState } from "react";
import { useEffect } from "react";
import { useCart } from "../context/CartContext"
export const ProductCard = ({product}) => {
    const {cartList ,addToCart,removeFromCart } = useCart();

    const [isInCart, setIsInCart] = useState(false);

    const {id, name, price, image} = product;

    useEffect(() => {
      const productIsInCart = cartList.find(cartItem => cartItem.id === id);

      if(productIsInCart){
        setIsInCart(true);
      }else {
        setIsInCart(false); 
      }
    },[cartList,id]);

  return (
    <div className="mt-10 pt-3 max-w-sm border rounded p-3 shadow-lg ">
          <img className="pb-2 rounded " src={image} alt={name} />
          <p className="font-bold">{name}</p>
        <div className="flex flex-row justify-between ">
            <p className="font-bold">${price}</p>
            {isInCart ? (<button onClick={()=> removeFromCart(product)} className=" bg-red-800 p-1 rounded text-white">Remove</button>) : <button onClick={()=> addToCart(product)} className=" bg-slate-700 p-1 rounded text-white">Add to Cart</button>}
            
        </div>
    

    </div>
  )
}
