import { BrowserRouter, NavLink, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import logo from '../logo.svg';  
import { LazyPage1, LazyPage2, LazyPage3 } from "../01_lazyload/pages"; // usando el index.ts
/* import { LazyPage1 } from "../01_lazyload/pages/LazyPage1";
import { LazyPage2 } from "../01_lazyload/pages/LazyPage2";
import { LazyPage3 } from "../01_lazyload/pages/LazyPage3"; */



const Navigation = () => {
  return (
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
              <li>
                <NavLink to="/lazy1" className={ ( { isActive }) => isActive ? 'nav-active': '' } >LazyPage 1</NavLink>
              </li>
              <li>
                <NavLink to="/lazy2" className={ ( { isActive }) => isActive ? 'nav-active': '' } >LazyPage 2</NavLink>
              </li>
              <li>
                <NavLink to="/lazy3" className={ ( { isActive }) => isActive ? 'nav-active': '' } >LazyPage 3</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>

            <Route path="about" element={ <h1>About Page</h1>} />
            <Route path="users" element={ <h1>Users Page</h1>} />
            <Route path="lazy1" element={ <LazyPage1 />  }/>
            <Route path="lazy2" element={ <LazyPage2 /> } />
            <Route path="lazy3" element={ <LazyPage3 />} />

            <Route path="/" element={ <h1>Home Page</h1>} />
            
            <Route path="*" element={ <Navigate to="/" replace /> } />


          </Routes>

        </div>
    </BrowserRouter>
  )
}

export default Navigation