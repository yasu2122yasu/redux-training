import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/cart/CartSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, total } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物カゴ</h2>
          <h4 className="empty-cart">何も入っていません・・・</h4>
        </header>
      </section>
    );
  }

  return (
    <section>
      <header>
        <h2>買い物カゴ</h2>
      </header>
      <div>
        {/* CartItemを1つづつ取り出したものが表示されている */}
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
          //   1つづつ要素を取り出すのであれば、つぎのように書く。
          //   return <CartItem key={item.id} title ={item.title} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            合計 <span>{total}円</span>
          </h4>
        </div>
        {/* onClickButtonで全削除のdisptachを出している */}
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          全削除
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
