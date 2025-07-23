import "../css/Layout.css";
import { Outlet } from "react-router";
import CustomNavbar from "../components/CustomNavbar.tsx";
import Footer from "../components/Footer";
import "../css/Layout.css";

function Layout() {
  return (
    <>
      <div className="layout">
        <CustomNavbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
