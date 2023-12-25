import React from 'react';
import { useSelector } from 'react-redux';
import { CartIcon } from '../HeroIcon';

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Shopping</h3>
        <CartIcon />
        <div className="nav-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
