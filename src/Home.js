import React from 'react'
import './Home.css'
import Product from './Product'
import { Slide } from 'react-slideshow-image'
import shop_slider_img_1 from './Image/shop_slider_img_1.jpg'
import shop_slider_img_2 from './Image/shop_slider_img_2.jpg'
import shop_slider_img_3 from './Image/shop_slider_img_3.jpg'
import shop_slider_img_4 from './Image/shop_slider_img_4.jpg'
import 'react-slideshow-image/dist/styles.css'
const slideImages = [
    shop_slider_img_1,
    shop_slider_img_2,
    shop_slider_img_3,
    shop_slider_img_4
  ];
function Home(){
    return(
      <div className="Home">
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div style={{'backgroundImage' : `url(${slideImages[0]})`}}>
              <span>ShopEaZy</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span>ShopEaZy</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span>ShopEaZy</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                <span>ShopEaZy</span>
              </div>
            </div>
          </Slide>
        </div>
        <div className="home_row">
          <Product
            id="121314"
            title="OnePlus 108 cm (43 inches) Y Series Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)"
            price={"26,999.00"}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/812wg%2BpfXAL._SX679_.jpg"
          />
          <Product
            id="1"
            title="Apple 12.9-inch iPad Pro with Apple M1 chip (Wi-Fi, 128GB)"
            price={"41,490.00"}
            rating={5}
            image="https://m.media-amazon.com/images/I/815KnP2wjDS._AC_SX480_SY360_.jpg"
          />
          <Product
            id="2"
            title="TP-Link WiFi 6 AX1500 Archer AX10"
            price={"4,999.00"}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51QmN8uNkgL._SX522_.jpg"
          />
          <Product
            id="3"
            title="OnePlus 9 Pro 5G (Stellar Black, 8GB RAM, 128GB Storage)"
            price={"64,999.00"}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71E%2BAgYDKtL._SX679_.jpg"
          />
          <Product
            id="4"
            title="ASUS ROG Zephyrus Duo 15 15.6"
            price={"2,19,000.00"}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/8189czxRlUL._SX679_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="5"
            title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED"
            price={"84,599.00"}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SX679_.jpg"
          />
          <Product
            id="121314"
            title="PS4 1TB Slim Bundled with Spider-Man, GT Sport, Ratchet & Clank And PSN 3Month"
            price={"30,499.00"}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81cIK-WlKDL._SX679_.jpg"
          />
          <Product
            id="121314"
            title="realme Watch S  (Black Strap, Regular)"
            price={"4,999.00"}
            rating={4}
            image="https://rukminim1.flixcart.com/image/416/416/ki7qw7k0/smartwatch/e/p/b/rma207-android-realme-original-imafy2fxtuzghm5m.jpeg?q=70"
          />
          <Product
            id="121314"
            title="ASUS ROG Phone 5 (Black, 128 GB)  (8 GB RAM)"
            price={"49,999.00"}
            rating={4}
            image="https://rukminim1.flixcart.com/image/416/416/km2clu80/mobile/u/0/e/rog-phone-5-zs673ks-1a043in-asus-original-imagff5hhzttjs6s.jpeg?q=70"
          />
          <Product
            id="121314"
            title="APPLE iPhone 12 (Black, 64 GB)"
            price={"77,900.00"}
            rating={4}
            image="https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70"
          />
        </div>
    </div>
    )
} 
export default Home