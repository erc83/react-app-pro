import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01_lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;      
    name: string;
}

const LazyLayout = lazy(() => import( /*  webpackChunkName: "LazyLayout"*/  '../01_lazyload/layout/LazyLayout'));  


export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',    // aqui manejamos que tiene que pasar el path /lazyload/*
        component: LazyLayout,
        name: 'LazyLayout - Dashboard'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        component: NoLazy,
        name: 'Lazy-2'
    },
]