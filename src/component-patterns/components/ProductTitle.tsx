import { useContext } from "react";

import { ProductContext } from "./ProductCard";
import styles from '../style/styles.module.css'


export const ProductTitle = ( { title }:  { title?:string}  ) => {   
    
    const { product } = useContext( ProductContext )  
    
    let titleToShow: string;

    if ( title ) {
        titleToShow = title
    } else if( product.title ) {
        titleToShow = product.title
    } else {
        titleToShow = ''
    }

    return (
        <>
            <span className={ styles.productDescription }>{ titleToShow }</span> <br/>
            <span className={ styles.productDescription }>{ title ? title : product.title }</span>
        </>
    )
}