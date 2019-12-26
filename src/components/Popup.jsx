import React, { useState } from 'react'
import { OrderPopup } from "../popup/order";
import { LoginPopup } from "../popup/login";
import { FavoritePopup } from "../popup/favorite";
import { BasketPopup } from "../popup/basket";
import shopping_basket from '../photo/shopping_basket.png';
import favorite_black from '../photo/favorite_black.png';



const Popup = () => {

  const [orderPopupOpen, setOrderPopupOpen] = useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [favoritePopupOpen, setFavoritePopupOpen] = useState(false);
  const [basketPopupOpen, setBasketPopupOpen] = useState(false);



  const onOrderPopupClose = () => {
    setOrderPopupOpen(false);
  }
  const onLoginPopupClose = () => {
    setLoginPopupOpen(false);
  }
  const onFavoritePopupClose = () => {
    setFavoritePopupOpen(false);
  }
  const onBasketPopupClose = () => {
    setBasketPopupOpen(false);
  }
  return (
    <div>
      <div className="header">
        <h1>Metrelerce Kumaş.Com</h1>
        <br />
        <nav >
          <ul className="menu">
            <li><img className="icon" src={shopping_basket} onClick={() => { setBasketPopupOpen(true) && setOrderPopupOpen(false) && setFavoritePopupOpen(false) && setLoginPopupOpen(false) }} alt="" /></li>
            <li><img className="icon-1" src={favorite_black} onClick={() => { setFavoritePopupOpen(true) && setBasketPopupOpen(false) && setOrderPopupOpen(false) && setLoginPopupOpen(false) }} alt="" /></li>
            <li className="order-menu" onClick={() => { setOrderPopupOpen(true) && setBasketPopupOpen(false) && setFavoritePopupOpen(false) && setLoginPopupOpen(false) }}>Sipariş Takibi</li>
            <li className="login-menu" onClick={() => { setLoginPopupOpen(true) && setFavoritePopupOpen(false) && setBasketPopupOpen(false) && setOrderPopupOpen(false) }}>Giriş Yap</li>
          </ul>
        </nav>
      </div>
      {orderPopupOpen && <OrderPopup onClose={onOrderPopupClose} />}
      {loginPopupOpen && <LoginPopup onClose={onLoginPopupClose} />}
      {favoritePopupOpen && <FavoritePopup onClose={onFavoritePopupClose} />}
      {basketPopupOpen && <BasketPopup onClose={onBasketPopupClose} />}
      <div>

      </div>

    </div>

  )
}
export default Popup;

