import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "../images/pokedex.png";
  return (
    <nav>
      <div>
        <img alt="pokedex" src={logoImg} className="navbar-img" />
      </div>
      <div>{favoritePokemons.length} ❤️</div>
    </nav>
  );
};

export default Navbar;
