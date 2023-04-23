import { futimesSync } from "fs"
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
          {/* <ProductCard product={ product} /> */}
          <ProductCard product={ product}>
              <ProductCard.Image />
              <ProductCard.Title title={ '' } />

              {/* di se intenta usar asi el componente se rompetodo */}
              <ProductCard.Buttons increaseBy={function (value:number): void {
                throw new Error("Function not implement")
              }}
              counter={0}
          />    
          </ProductCard>
          
          
          <ProductCard product={ product}>
              <ProductImage />
              <ProductTitle title={ '' } />

              {/* di se intenta usar asi el componente se rompetodo */}
              <ProductButtons increaseBy={function (value:number): void {
                throw new Error("Function not implement")
              }}
              counter={ 0 }
          />    
          </ProductCard>
        </div>
    </div>
  )
}
