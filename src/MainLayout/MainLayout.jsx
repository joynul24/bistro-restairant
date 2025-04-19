import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navber/Navbar";

const MainLayout = () => {
  const location = useLocation()
  // console.log(location);
  const noHeaderFooter = location.pathname.includes('login')
  return (
    <div className="max-w-7xl mx-auto">
      <header>
        {noHeaderFooter || <Navbar></Navbar>}
      </header>
      <div className="min-h-[calc(100vh-292px)]">
        <Outlet></Outlet>
      </div>
      <footer>
        {noHeaderFooter || <Footer></Footer>}
      </footer>
    </div>
  );
};

export default MainLayout;
