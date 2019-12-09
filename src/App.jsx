import React, { useState } from 'react';
import "./styles/style.scss";
import shopping_basket from './shopping_basket.png';
import favorite_black from './photo/favorite_black.png';
import photo_1 from './photo/photo_1.jpg';
import photo_2 from './photo/photo_2.jpg';
import photo_3 from './photo/photo_3.jpg';
import photo_4 from './photo/photo_4.jpg';
import photo_5 from './photo/photo_5.jpg';
import photo_6 from './photo/photo_6.jpg';
import photo_7 from './photo/photo_7.jpg';
import photo_8 from './photo/photo_8.jpg';
import photo_9 from './photo/photo_9.jpg';
import photo_10 from './photo/photo_10.jpg';
import photo_11 from './photo/photo_11.jpg';
import photo_12 from './photo/photo_12.jpg';
import photo_13 from './photo/photo_13.jpg';
import photo_14 from './photo/photo_14.jpg';
import photo_15 from './photo/photo_15.jpg';
import { OrderPopup } from "./popup/order";
import { LoginPopup } from "./popup/login";
import { FavoritePopup } from "./popup/favorite";
import { BasketPopup } from "./popup/basket";
import { Page_1Popup } from "./page/page_1";



  const App = () => {
  const [orderPopupOpen, setOrderPopupOpen] = useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [favoritePopupOpen, setFavoritePopupOpen] = useState(false);
  const [basketPopupOpen, setBasketPopupOpen] = useState(false);
  const [page_1PopupOpen, setPage_1PopupOpen] = useState(false);
 
 
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
  const onPage_1PopupClose = () => {
    setPage_1PopupOpen(false);
  }
  
  return (
    <div>
        <div className="header">
        <h1>Metre İşi Kumaş</h1>
        <br/>
        </div>
        <img  className="icon" src={shopping_basket}  onClick={() => {setBasketPopupOpen(true)}}   alt="" width="25px" height="25px"/>
        <img  className="icon-1"src={favorite_black}  onClick={() => {setFavoritePopupOpen(true)}} alt="" width="25px" height="25px"/>
      
        <div className="right">
          <nav className="menu">
            <ul className="right-menu">
              <li onClick={() => {setOrderPopupOpen(true)}}>Sipariş Takibi</li>
              <li  onClick={() => {setLoginPopupOpen(true)}}>Giriş Yap</li>
            </ul>
          </nav>
          </div>
          {orderPopupOpen && <OrderPopup onClose={onOrderPopupClose}/>}
          {loginPopupOpen && <LoginPopup  onClose={onLoginPopupClose}/>}
          {favoritePopupOpen && <FavoritePopup  onClose={onFavoritePopupClose}/>}
          {basketPopupOpen && <BasketPopup  onClose={onBasketPopupClose}/>}
          {page_1PopupOpen && <Page_1Popup  onClose={onPage_1PopupClose}/>}
                                       
         
{/* 
        <div className="options">
        <form className="filterForm">
        <select className="filter_category">
						<option value="">Tüm Kumaşlar</option>
						
						<option value="abiye" selected="">ABİYE</option>
						
						<option value="armur">ARMÜR</option>
						
						<option value="astar">ASTAR</option>
						
						<option value="baliksirti">BALIKSIRTI</option>
						
						<option value="bezayagi">BEZAYAĞI</option>
						
						<option value="brokar">BROKAR</option>
						
						<option value="buklet">BUKLET</option>
						
						<option value="cizgi-desen">ÇİZGİ DESEN</option>
						
						<option value="dantel">DANTEL</option>
						
						<option value="deri">DERİ</option>
						
						<option value="desenli">DESENLİ</option>
						
						<option value="ekose-desen">EKOSE DESEN</option>
						
						<option value="elbise-eteklik-kumas">ELBİSE-ETEKLİK KUMAŞ</option>
						
						<option value="emprime">EMPRİME</option>
						
						<option value="file">FİLE</option>
						
						<option value="gabardin">GABARDİN</option>
						
						<option value="jakar">JAKAR</option>
						
						<option value="kadife">KADİFE</option>
						
						<option value="kapitone">KAPİTONE</option>
						
						<option value="kasmir-kase">KAŞMİR-KAŞE</option>
						
						<option value="kazayagi">KAZAYAĞI</option>
						
						<option value="kece">KEÇE</option>
						
						<option value="keten">KETEN</option>
						
						<option value="kot">KOT</option>
						
						<option value="krep">KREP</option>
						
						<option value="likrali">LİKRALI</option>
						
						<option value="medine-ipegi-ferace">MEDİNE İPEĞİ-FERACE</option>
						
						<option value="orme">ÖRME</option>
						
						<option value="pamuk">PAMUK</option>
						
						<option value="penye">PENYE</option>
						
						<option value="potikare">PÖTİKARE</option>
						
						<option value="saten">SATEN</option>
						
						<option value="suet">SÜET</option>
						
						<option value="sifon">ŞİFON</option>
						
						<option value="tencel">TENCEL</option>
						
						<option value="tul">TÜL</option>
						
						<option value="viskon">VİSKON</option>
						
						<option value="yun">YÜN</option>
						
					</select>
          <select className="filter_color">
						<option value="">Tüm Renkler</option>
						<option value="siyah" selected="">SİYAH</option>
            <option value="gri" selected="">GRİ</option>
            <option value="pembe" selected="">PEMBE</option>
            <option value="yeşil" selected="">YEŞİL</option>
					</select>
          <select className="filter_season">
						<option value="">Tüm Sezonlar</option>
						<option value="yazlik" selected="">YAZLIK</option>
            <option value="kışlık" selected="">KIŞLIK</option>
					</select>
          <select className="filter_price">
						<option value="">Tüm Fiyatlar</option>
						<option value="25-50" selected="">25 - 50 TL</option>
					</select> 
        </form>  
        </div> */}
        
         <div className="card1">
         <img src={photo_1} alt=""width="230px"  height="230px"  onClick={() => {setPage_1PopupOpen(true)}}/>
         <ul>
         <li >
         <h1 className="card-header">KAPİTONE ŞİŞME</h1>
         <p className="line"><strike>20TL</strike>  15TL</p>
         </li>
         </ul> 
         </div>
        
         
          <div className="card2">
         <img src={photo_2} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">KAZAYAĞI MONTLUK</h1>
         <p className="line"><strike>40TL</strike>  32TL</p>
         </li>
         </ul> 
         </div>
       
        
         <div className="card3" >
         <img src={photo_3} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">KREP ETEKLİK</h1>
         <p className="line"><strike>10TL</strike> 8TL</p>
         </li>
         </ul> 
         </div>
         

         <div className="card4">
         <img src={photo_4} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">GABARDİN ÇİÇEKLİ</h1>
         <p className="line"><strike>20TL</strike> 15TL</p>
         </li>
         </ul> 
         </div>

        
         <div className="card5">
         <img src={photo_5} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">EKOSE CEKETLİK</h1>
         <p className="line"><strike>60TL</strike> 30TL</p>
         </li>
         </ul> 
         </div>


         <div className="card6">
         <img src={photo_6} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">ÇİZGİLİ KREP</h1>
         <p className="line"><strike>60TL</strike> 30TL</p>
         </li>
         </ul> 
         </div>

      
         <div className="card7">
         <img src={photo_7} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">PUANTİYELİ KREP</h1>
         <p className="line"><strike>60TL</strike> 30TL</p>
         </li>
         </ul> 
         </div>

      
         <div className="card8">
         <img src={photo_8} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">EKOSE KETEN</h1>
         <p className="line"><strike>60TL</strike> 30TL</p>
         </li>
         </ul> 
         </div>


         <div className="card9">
         <img src={photo_9} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">PAMUKLU KAŞE</h1>
         <p className="line"><strike>40TL</strike> 20TL</p>
         </li>
         </ul> 
         </div>
        

         <div className="card10">
         <img src={photo_10} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">ŞİŞME MONT</h1>
         <p className="line"><strike>35TL</strike> 10TL</p>
         </li>
         </ul> 
         </div>
        

         
         <div className="card11">
         <img src={photo_11} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">ŞİŞME MONT</h1>
         <p className="line"><strike>47TL</strike> 13TL</p>
         </li>
         </ul> 
         </div>
        

         <div className="card12">
         <img src={photo_12} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">PAMUKLU PENYE</h1>
         <p className="line"><strike>30TL</strike> 12TL</p>
         </li>
         </ul> 
         </div>
        

         <div className="card13">
         <img src={photo_13} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">PAMUKLU PENYE</h1>
         <p className="line"><strike>60TL</strike>30TL</p>
         </li>
         </ul> 
         </div>
        

         <div className="card14">
         <img src={photo_14} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">LİKRALI ELBİSELİK</h1>
         <p className="line"><strike>25TL</strike> 10TL</p>
         </li>
         </ul> 
         </div>



         <div className="card15">
         <img src={photo_15} alt="" width="230px"  height="230px" />
         <ul>
         <li>
         <h1 className="card-header">VİSKON KUMAŞ</h1>
         <p className="line"><strike>40TL</strike> 33TL</p>
         </li>
         </ul> 
         </div>

        
        
        
             </div>
  );
      }
    

export default App;
