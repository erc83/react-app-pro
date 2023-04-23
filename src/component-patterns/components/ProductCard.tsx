import { ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct'  

import styles from '../style/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Props { 
    product: Product;
    children?: ReactElement | ReactElement[]   // ReactElement soporta solo un componente y ReactElement[] mas elementos
}

interface Product {
    id: string;
    title: string;
    img?: string;
}

// un string '' para un ternerio lo considera como que no tiene valor

// export const ProductImage = ( {img }: { img: string } ) => {   obliga a que tiene que venir la img
export const ProductImage = ( {img = ""} ) => {
    return (
        <img className={ styles.productImg } src={ img ? img : noImage } alt="Coffe mug" /> 
    )
}

// si viene mas de una propiedad, podemos crear una interfaz
export const ProductTitle = ( { title }:  { title:string}  ) => {   // se abliga que tiene que venir el titulo
    return (
        <span className={ styles.productDescription }>{ title }</span>
    )
}

interface ProductButtonsProps {
    increaseBy: (value: number) => void,
    counter: number
}
export const ProductButtons = ({ increaseBy, counter }: ProductButtonsProps) => {
    return(
        <div className={ styles.buttonsContainer }>
                <button 
                    className={ styles.buttonMinus }
                    onClick={ () => increaseBy( - 1) } 
                > - </button>

                <div className={ styles.countLabel }> { counter } </div>
                
                <button 
                    className={ styles.buttonAdd }
                    onClick={ () => increaseBy( +1 ) }
                > + </button>
            </div>
    );
}


// si recibo hijos coloco children
export const ProductCard = ({ children, product }: Props) => { // aqui entran las properties del padre se tiene que definir

    const { counter, increaseBy } = useProduct()

    return (
        <div className={ styles.productCard }>

            { children }

        {/* 
            <ProductImage img={ product.img } />
            
            <ProductTitle title={ product.title } />
            
            <ProductButtons increaseBy={ increaseBy } counter={ counter }   />
        */}
        </div>
  )
}

// aqui estamos añadiendo esta nueva propiedad  ProductCard que apunta a cada Componente
ProductCard.Title   = ProductTitle              // aqui estamos pasando el ProductTitl 
ProductCard.Image   = ProductImage
ProductCard.Buttons = ProductButtons




