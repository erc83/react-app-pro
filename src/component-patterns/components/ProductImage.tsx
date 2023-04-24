
import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import styles from '../style/styles.module.css'
import { ProductContext } from "./ProductCard";  // para importarlo se tiene que exportar desde el archivo


export const ProductImage = ( {img = ""} ) => {  

    const { product } = useContext( ProductContext )  

    let imgToShow: string;

    if ( img ) {
        imgToShow = img; 
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <>
            <img className={ styles.productImg } src={ imgToShow } alt="Coffe mug" /> 
        </>
    )
}