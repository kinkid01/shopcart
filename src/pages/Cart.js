import { useTitle } from "../hooks/useTitle"
import { CardCart } from "../components"
import { useCart } from "../context/CartContext"
export const Cart = () => {
  const { total, cartList} = useCart();
  useTitle("Cart");

  return (
    <main>
      <section>
        <h1 className=" text-center text-lg font-bold pt-10">Cart Items:{cartList.length} / ${total}</h1>
        {cartList.map((product) => (
          <CardCart key={product.id} product={product}/>
        ))}
      </section>
    </main>
  ) 
} 
