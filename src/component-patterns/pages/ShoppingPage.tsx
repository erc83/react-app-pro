import { 
  ProductCard,  // aqui vienen las en propiedades los componentes ProductCard.Image, ProductCard.Title, ProductCard.Buttons 
  ProductButtons,  
  ProductImage, 
  ProductTitle  
} from "../components/ProductCard"

// si esta vacio el {} product, typescript necesita que se envie las propiedades id, title
const product =  {      
  id: "1",
  title: 'Coffe Mug - Card',
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
          <ProductCard product={ product}>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />    
          </ProductCard>
          
          <ProductCard product={ product}>
              <ProductImage />
              <ProductTitle title={ 'Cambiando el titulo' } />
              <ProductButtons />    
          </ProductCard>
        </div>
    </div>
  )
}
