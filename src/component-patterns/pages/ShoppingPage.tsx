import { ProductCard } from "../components/ProductCard"

// si esta vacio el {} product, typescript necesita que se envie las propiedades id, title
const product =  {      
  id: "1",
  title: 'Coffe Mug - Card',
  title1: 'Coffe Mug - Card',        // tambien lo recibe porque necesita minimo id, title
  img: './coffee-mug.png'
}


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
          <ProductCard product={ product} />
        </div>

    </div>
  )
}
