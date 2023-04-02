import { useCart } from "../context/CartContext"

export const CardCart = ({product}) => {
const { removeFromCart } = useCart();
  const {name, price, image} = product;
  return (
    <div className="flex flex-row justify-between items-center border shadow-lg p-3 mt-16 "> 
      <img className="h-20" src={image} alt={name} />
      <p text-lg>{name}</p>
      <p text-lg>${price}</p>
      <button onClick={()=> removeFromCart(product)} className=" bg-red-800 text-white p-1 rounded-md">Remove</button>
    </div>
  )
}