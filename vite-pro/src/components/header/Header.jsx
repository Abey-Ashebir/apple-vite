import logo from "../../images/icons/logo.png";
import search from "../../images/icons/search-icon.png";
import cart from "../../images/icons/cart.png";

function Header() {
  return (
    <div>
      <header className="header-wrapper">
        <div className="internal-wrapper">
          <div className="header-links-wrapper">
            <ul>
              <li className="logo-link">
                <a href="/">
                  <img src={logo}></img>
                </a>
              </li>
              <li>
                <a href="/mac/">Mac</a>
              </li>
              <li>
                <a href="#">iphone</a>
              </li>
              <li>
                <a href="#">ipad</a>
              </li>
              <li>
                <a href="#">watch</a>
              </li>
              <li>
                <a href="#">tv</a>
              </li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li className="search-link">
                <a href="/search/">
                  <img src={search}></img>
                </a>
              </li>
              <li className="cart-link">
                <a href="/cart/">
                  <img src={cart}></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
