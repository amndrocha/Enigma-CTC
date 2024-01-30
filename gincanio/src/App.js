import { NavLink, Outlet, RouterProvider, createBrowserRouter, useNavigate, useParams } from "react-router-dom";
import { Page } from "./Page";
import { Instrucoes } from "./Instrucoes";
import { Dark } from "./Dark";


function  App() {
    
    const Navbar = () =>{
        return(
            <div className="navbar">
                <NavLink className={ ( {isActive} ) => isActive ? "navbar_item-clicked" : "navbar_item"} to='/'> Mapa</NavLink>
                <NavLink className={ ( {isActive} ) => isActive ? "navbar_item-clicked" : "navbar_item"} to='/instrucoes'> Instruções</NavLink>
                <NavLink className={ ( {isActive} ) => isActive ? "navbar_item-clicked" : "navbar_item"} to='/dark'> Dark mode</NavLink>
            </div>
        )
    }
    
    const HeaderLayout = () => {
        return(
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        )
    }    
    
    const router = createBrowserRouter([
        {
            element:
            <div>
                <HeaderLayout/>
            </div>,
            children: [
                {path: '/',element:<Page/>},
                {path: '/instrucoes',element:<Instrucoes/>},
                {path: '/dark',element:<Dark/>},
            ]
           }
    ])
    
    return (    
      <div>
        <RouterProvider router={router}/>
      </div>  
    );
}
export default App;
