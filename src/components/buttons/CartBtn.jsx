import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const CartBtn = () => {
  const state = useSelector((state) => state.addItem);
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <AiOutlineShoppingCart />({state.length})
      </NavLink>
    </>
  );
};

export default CartBtn;
