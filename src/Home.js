// import React from "react";
// import "./Home.css";
// import Product from "./Product";
// import Image1 from "./Image1.png";

// const Home = () => {
//   return (
//     <div className="home">
//     <div>
//      <img src={Image1} alt="" className="home_image" />
//     </div>
     
//       <div className="home_row">
//         <Product
//           id="12321341"
//           title="Microsoft Surface"
//           price={1100.96}
//           rating={5}
//           image="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-RWGaM8-Surface-Pro-7-in-Laptop-Mode?scl=1"
//         />
//         <Product
//           id="49538094"
//           title="IFB 30 L Convection Microwave Oven"
//           price={239.0}
//           rating={4}
//           image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
//         />
//         <Product
//           id="49938094"
//           title="iPad Pro"
//           price={1239.0}
//           rating={4}
//           image="https://www.cnet.com/a/img/resize/abbcd189cd583467b6b1a78125c7c418b806d1ed/hub/2022/10/26/f011b628-3114-4e33-b146-434f13daa92f/ipad-pro-12-9-2022.jpg?auto=webp&fit=crop&height=900&width=1200"
//         />
//       </div>
//       <div className="home_row">
//         <Product
//           id="49838094"
//           title="Laptop"
//           price={1339.0}
//           rating={4}
//           image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
//         />
//       </div>
//       <div className="home_row">
//         <Product
//           id="49578094"
//           title="Washing Machine"
//           price={439.0}
//           rating={4}
//           image="https://storage.beko.co.uk/blomberg2018products/large/2Blomberg_WashingMachine_LWF28442G_Manhattan_FrontClosed.jpg"
//         />
//         <Product
//           id="49638094"
//           title="Smart TV"
//           price={1239.0}
//           rating={4}
//           image="https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/326ac5f6-6cea-11ea-b76b-e2581aee4843.jpg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt=""
            className="home__image"
          />

          <div className="home__row">
            <Product
              id="12321341"
              title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
            <Product
              id="49538094"
              title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="4903850"
              title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
              price={199.99}
              rating={3}
              image="https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/326ac5f6-6cea-11ea-b76b-e2581aee4843.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product
              id="3254354345"
              title="Washing machine - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://storage.beko.co.uk/blomberg2018products/large/2Blomberg_WashingMachine_LWF28442G_Manhattan_FrontClosed.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </div>
      </div>
    );
}

export default Home