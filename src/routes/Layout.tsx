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
        <div className="main-layout-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
