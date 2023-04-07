import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;      
    name: string;
}

const Lazy1 = lazy(() => import('../01_lazyload/pages/LazyPage1'));  
const Lazy2 = lazy(() => import('../01_lazyload/pages/LazyPage2'));  
const Lazy3 = lazy(() => import('../01_lazyload/pages/LazyPage3'));  

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        component: Lazy3,
        name: 'Lazy-3'
    },
]