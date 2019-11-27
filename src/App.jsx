import React, { useState } from 'react';
import './App.css';
import Zoom from 'react-img-zoom';
import shopping_basket from './shopping_basket.png';
import photo_1 from './photo_1.jpg';
import photo_2 from './photo_2.jpg';
import photo_3 from './photo_3.jpg';
import photo_4 from './photo_4.jpg';
import photo_5 from './photo_5.jpg';
import { OrderPopup } from "./popup/order";
import { LoginPopup } from "./popup/login";

const App = () => {
  const [orderPopupOpen, setOrderPopupOpen] = useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);

  const onOrderPopupClose = () => {
    setOrderPopupOpen(false);
  }
  const onLoginPopupClose = () => {
    setLoginPopupOpen(false);
  }

  return (
    <div>
        <div className="header">
        <h1 className="fabric">Metre İşi Kumaş</h1>
        </div>
        <div className="right">
          <nav className="menu">
            <ul className="right-menu">
              <li onClick={() => {setOrderPopupOpen(true)}}>Sipariş Takibi</li>
              <li  onClick={() => {setLoginPopupOpen(true)}}>Giriş Yap</li>
            </ul>
          </nav>
          </div>
          {orderPopupOpen && <OrderPopup onClose={onOrderPopupClose} />}
          {loginPopupOpen && <LoginPopup  onClose={onLoginPopupClose} />}


          <div className="i-card">
          <a href={shopping_basket}></a>
          </div>

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
        </div>
        <div className="photo1">
        <Zoom img={photo_1}  zoomScale={4} width={250} height={250}/> 
        </div>

        <div className="photo2">
        <Zoom img={photo_2}  zoomScale={4} width={250}  height={250}/> 
        </div>
        
        <div className="photo3">  
        <Zoom img={photo_3}  zoomScale={4} width={250}  height={250}/>
        </div>

        <div className="photo4">  
        <Zoom img={photo_4}  zoomScale={4} width={250}  height={250}/> 
        </div>

        <div className="photo5"> 
        <Zoom img={photo_5}  zoomScale={4} width={250}  height={250} />  
        </div>  
        
        </div>
       
  );
}

export default App;
