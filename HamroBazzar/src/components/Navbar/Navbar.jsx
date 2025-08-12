import React, { useContext ,useState} from "react";
import "./Navbar.css";
import rocket from "../assets/rocket.png";
import star from "../assets/glowing-star.png";
import idButton from "../assets/id-button.png";
import memo from "../assets/memo.png";
import order from "../assets/basket.png";
import lock from "../assets/locked.png";
import LinkWithIcon from "../LinkWithIcon/LinkWithIcon";
import { NavLink, useNavigate } from "react-router-dom";
import userContext from "../../contexts/UserContext";
import cartContext from "../../contexts/CartContext";

const Navbar = () => {
  const user = useContext(userContext);
  const { cart, removeFromCart } = useContext(cartContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSummit = (e) => {
    e.preventDefault();
    if (search !== "") {
      navigate(`/products?search=${search.trim()}`);
    }
  };
  return (
    <nav className=" align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">HamroBazzar</h1>
        <form
          action=""
          className=" align_center navbar_form"
          onSubmit={handleSummit}
        >
          <input
            type="text"
            placeholder="Search product"
            className="navbar_search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            type="summit"
            className="search_buttton"
            
          >
            Search
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <LinkWithIcon title="Products" link="/products" emoji={star} />
        <LinkWithIcon title="Home" link="/" emoji={rocket} />
        {!user && (
          <>
            <LinkWithIcon title="Login" link="/login" emoji={idButton} />
            <LinkWithIcon title="Sign Up" link="/signup" emoji={memo} />
          </>
        )}
        {user && (
          <>
            <LinkWithIcon title="My Orders" link="/myorder" emoji={order} />

            <NavLink to="/cart" className="align_center">
              Cart <p className="align_center cart_counts">{cart.length}</p>
            </NavLink>
            <LinkWithIcon title="Logout" link="logout" emoji={lock} />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
