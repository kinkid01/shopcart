import { useTitle } from "../hooks/useTitle"
import { ProductCard } from "../components"

export const Home = () => {
  useTitle("Home")


  const products = [
    {"id": 1, "name":"Silk skin", "price": 28, "image":"/assets/images/product 1001.jpg"},
    {"id": 2, "name":"Butter skin", "price": 150, "image":"/assets/images/product 1003.jpg"},
    {"id": 3, "name":"Sun Kissed", "price": 80, "image":"/assets/images/product 1004.jpg"},
    {"id": 4, "name":"Nude", "price": 50, "image":"/assets/images/product 1005.jpg"},
    {"id": 5, "name":"Honey", "price": 98, "image":"/assets/images/product 1006.jpg"},
    {"id": 6, "name":"Lip pulp", "price": 30, "image":"/assets/images/product 1002.jpg"},

  ]
  return (
<main>
 <section className="products grid grid-cols-3 gap-4 ">
  {products.map((product)=> ( 
  <ProductCard key={product.id} product={product}/>
  ))}
  </section>
</main>
  )
}
