import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  console.log("children", children);
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      {/* <Footer />  */}
    </div>
  );
};

export default Layout;
