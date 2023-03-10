import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42"
          alt="/"
        />

        <div className="home__row">
          {/* 2 cards  */}
          <Product
            title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71ADCXd5NDL._AC_SX425_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          {/* 3 cards  */}
          <Product
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />

          <Product
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/55/552/5828/100/3/740778400/740778400_1_720x928.webp"
            rating={5}
          />
          <Product
            title="New Apple iPad Pro (12.9' inch, Wi-Fi, 128GB) - Silver (4th generation)"
            price={598.99}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-12-wifi-silver-2020?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1626721066000"
            rating={4}
          />
        </div>

        <div className="home__row">
          {/* 1 card  */}
          <Product
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
