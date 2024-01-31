import { NavLink, Outlet, RouterProvider, createBrowserRouter, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Page } from "./Page";
import { Instrucoes } from "./Instrucoes";
import { handleDark } from "./MapSlice";



function  App() {
    const dispatch = useDispatch();
    let dark = useSelector((state) => state.map.dark);
    
    const Navbar = () =>{
        return(
            <div className="navbar">
                <NavLink className={ ( {isActive} ) => isActive ? "navbar_item-clicked" : "navbar_item"} to='/'> Mapa</NavLink>
                <NavLink className={ ( {isActive} ) => isActive ? "navbar_item-clicked" : "navbar_item"} to='/instrucoes'> Instruções</NavLink>
                <NavLink className={ dark ? "navbar_item-clicked" : "navbar_item"} onClick={() => dispatch(handleDark())}> Dark mode</NavLink>
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
