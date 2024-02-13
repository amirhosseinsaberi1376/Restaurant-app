import { useContext } from "react";

import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

const Header = () => {
  const cartctx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartctx.items.reduce((totalNumberofItems, item) => {
    return totalNumberofItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A logo which belongs to a restaurant" />
        <h1>Amir's Restaurant</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
