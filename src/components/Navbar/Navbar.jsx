import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
    const [open,setOpen] =useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' }
      ];
      
    return (
        <nav>
            <div className="md:hidden" onClick={()=> setOpen(!open)}>
                {
                    open === true ? <MdOutlineClose className="text-3xl"/> : <HiMenuAlt2 className="text-3xl  " /> 
                    
                }
                
                </div>
            <ul className="md:flex">
                {
                    routes.map(route => <Link 
                        key={route.id}
                        route={route}
                         ></Link>
                    )
                }
            </ul>
        </nav>
    );
};

export default Navbar;