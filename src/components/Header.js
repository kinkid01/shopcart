import {Link, NavLink } from "react-router-dom"
import Logo from "../assets/Logo.png"
import { useCart } from "../context/CartContext"

export const Header = () => {
  const {cartList} = useCart();
  return (
    <header className="mt-2 flex flex-row justify-between hover:cursor-pointer items-center border-b-2 border-gray-200">
        <Link className="flex items-center">
          <img className="h-12 rounded-2xl pb-1" src={Logo} alt="shop-logo" />
          <span className="px-2">ShopCart</span>
        </Link>
   <div className="space-x-4">
     <NavLink to="/" end>Home</NavLink>
     <NavLink to="/Cart">Cart</NavLink>
   </div>
       
        <Link to="/Cart">
          <span className=" font-bold"> Cart:{cartList.length}</span>
        </Link>
    </header>
  )
}
