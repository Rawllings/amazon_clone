import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      {/* LOGO  */}
      <img
        className="header__logo"
        src="https://www.pngfind.com/pngs/m/56-565024_amazon-logo-png-amazon-png-transparent-png.png "
        alt="Amazon-logo"
      />

      {/* SEARCHBAR  */}
      <div className="header__search ">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* CHILDREN */}
      <div className="header__nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo  header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
