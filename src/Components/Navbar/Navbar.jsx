import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#e1d4c7", textDecoration: "none" }}>
          <img src="https://res.cloudinary.com/dxtdwqtrz/image/upload/v1677526681/removal.ai__tmp-63fd068fac52c_x0n6cf.png" alt="" />
        </Link>

        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            Todas
          </Link>
          <Link to="/category/Ak-47" className={styles.navbarItem}>
            Ak-47
          </Link>
          <Link to="/category/M4A4" className={styles.navbarItem}>
            M4A4
          </Link>
          <Link to="/category/AWP" className={styles.navbarItem}>
            AWP
          </Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
