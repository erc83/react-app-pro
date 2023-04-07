import { Suspense } from "react";

import { BrowserRouter, NavLink, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";  

import logo from '../logo.svg';  


const Navigation = () => {
  return (
/*     <Suspense fallback={null}> */
    <Suspense fallback={<span>Loading...</span>}>

    <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={ logo } alt="React Logo" />

            <ul>
              <li>
                <NavLink to="/" className={ ( { isActive }) => isActive ? 'nav-active': '' } >Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={ ( { isActive }) => isActive ? 'nav-active': '' } >About</NavLink>
              </li>
              <li>
                <NavLink to="/users" className={ ( { isActive }) => isActive ? 'nav-active': '' } >Users</NavLink>
              </li>
              {
                routes.map( ({ to, name }) => (
                  <li key={ to }>
                    <NavLink to={ to }   className={ ( { isActive }) => isActive ? 'nav-active': '' } >{ name }</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            <Route path="about" element={ <h1>About Page</h1>} />
            <Route path="users" element={ <h1>Users Page</h1>} />
  
            {
              routes.map( ({ path, component: Component }) => ( 
                <Route key={ path } 
                path={ path }  
                element={ <Component />  }/>   
              ))
            }
            <Route path="/" element={ <h1>Home Page</h1>} />         
            <Route path="*" element={ <Navigate to={ routes[0].to } replace /> } />
          </Routes>
        </div>
    </BrowserRouter>
  </Suspense>
  )
}

export default Navigation