import { LazyPage1, LazyPage2, LazyPage3 } from "../01_lazyload/pages";

interface Route {
    to: string;
    path: string;
    component: () => JSX.Element;     // el tipo de elemento se puede obtener al colocar el mouse en el Component 
    name: string;
}

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        component: LazyPage1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        component: LazyPage2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        component: LazyPage3,
        name: 'Lazy-3'
    },
]