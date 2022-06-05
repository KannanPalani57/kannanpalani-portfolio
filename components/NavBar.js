import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  const [hamburgerStatus, setHamburgerStatus] = useState(false);
  const handleClick = () => {
    console.log(hamburgerStatus, "burger");
    setHamburgerStatus(!hamburgerStatus);
  };
  return (
    <div>
      <nav>
        <div className="hamburger" onClick={handleClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="header">
          <Link href="/" passHref>
            <h2 className="header-text">Kannan Palani</h2>
          </Link>
        </div>

        <ul className={`nav-links ${hamburgerStatus && "open"}`}>
          <li className={`${hamburgerStatus && "fade"}`} onClick={handleClick}>
            <Link href="/read-articles" passHref>
              <a
                className={`${
                  router.pathname == "/read-articles" ? "active" : ""
                }`}
              >
                Articles
              </a>
            </Link>
          </li>
          <li className={`${hamburgerStatus && "fade"}`} onClick={handleClick}>
            <Link href="/about" passHref>
              <a className={`${router.pathname == "/about" ? "active" : ""}`}>
                About
              </a>
            </Link>
          </li>

          <li className={`${hamburgerStatus && "fade"}`} onClick={handleClick}>
            <Link href="/contact" passHref>
              <a className={`${router.pathname == "/contact" ? "active" : ""}`}>
                Contact
              </a>
            </Link>
          </li>

          <li className={`${hamburgerStatus && "fade"}`} onClick={handleClick}>
            <Link href="/see-my-works" passHref>
              <a
                className={`${
                  router.pathname == "/see-my-works" ? "active" : ""
                }`}
              >
                See My Works!
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
