import {  createContext } from 'react';
import { useProduct } from '../hooks/useProduct'  

import styles from '../style/styles.module.css'

import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces_product';
/* import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButton';
import { ProductTitle } from './ProductTitle'; */

/* import { ProductButtons, ProductTitle, ProductImage } from "./index"; */


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;  
/* termino Configuracion context*/


export const ProductCard = ({ children, product }: ProductCardProps) => { 

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ styles.productCard }>

                { children }

            </div>
        </Provider>
  )
}

/*   Sin uso aun
ProductCard.Title   = ProductTitle           
ProductCard.Image   = ProductImage
ProductCard.Buttons = ProductButtons
*/



