import { ProductCard } from "../components/ProductCard"

export const ShoppingPage = () => {
  return (
    <div>
        ShoppingPage
        <hr />

        <div 
          style={{
            display:"flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          <ProductCard />
        </div>

    </div>
  )
}
