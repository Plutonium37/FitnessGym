import { Outlet, Link } from "react-router-dom";
import ResponsiveNavbar from '../components/Navbar.jsx'
const Layout = () => {
    return (
        <>
            <ResponsiveNavbar></ResponsiveNavbar>
            <Outlet />
        </>
    )
};

export default Layout;