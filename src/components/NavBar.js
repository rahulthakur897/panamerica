import {useLocation} from "react-router-dom";

export function NavBar() {
  const location = useLocation();
  const activeMenu = location?.pathname;
  return (
    <header>
      <div id="header-menu">
        <img
          src={process.env.PUBLIC_URL + "assets/images/logo.png"}
          alt="logo"
        />
        <nav>
          <a href="/" className={activeMenu === "/" ? "active" : ""}>
            Home
          </a>
          <a href="/about" className={activeMenu === "/about" ? "active" : ""}>About Us</a>
          <a href="/services" className={activeMenu === "/services" ? "active" : ""}>Services</a>
          <a href="/careers" className={activeMenu === "/careers" ? "active" : ""}>Careers</a>
          <a href="/profiles" className={activeMenu === "/profiles" ? "active" : ""}>Profiles</a>
          <a href="/training" className={activeMenu === "/training" ? "active" : ""}>Training</a>
        </nav>
      </div>
    </header>
  );
}
