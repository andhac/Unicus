import React from "react";

function HomePage() {
  return (
    <>
      <div className="home_container">
        <div className="home_container_left">
          <h5 className="first">Unlocking The Potential Of Web 3.0 Economy</h5>
          <span className="second">
            Worlds first Multi Chain WaaS (Web3 as a Service) Platform for
            Metaverse, Gaming, and NFT Economy
          </span>
          <h6>
            {" "}
            A 360 degree ‘mild code’ solution for Gaming, Metaverse or NFT
            projects to integrate all their Web 3.0 needs in click of few
            buttons.
          </h6>
        </div>
        <div className="home_container_right">
          <img
            src="https://unicus.one/wp-content/uploads/2022/02/unicus-banner.png"
            title="unicus banner"
            alt="unicus banner"
          />
        </div>
        
      <div className="home_footer">
        <ul>
          <li>
            <img src="https://unicus.one/wp-content/uploads/2022/02/polygon-matic-logo-768x768.png" alt="unicus" />
          </li>
          <li>
            <img src="https://unicus.one/wp-content/uploads/2022/02/binance-coin-bnb-logo-768x768.png" alt="" />
          </li>
          <li>
            <img className="eth_icon"src="https://unicus.one/wp-content/uploads/2022/02/Ethereum-Logo.wine_-768x512.png" alt="" />
          </li>
          <li>
            <img src="https://unicus.one/wp-content/uploads/2022/02/MetaMask_Fox.svg-768x768.png" alt="" />
          </li>
          <li>
            <img src="https://unicus.one/wp-content/uploads/2022/02/coinbase.png" alt="" />
          </li>
          <li>
            <img src="https://unicus.one/wp-content/uploads/2022/02/com.myetherwallet.mewwallet_1.png" alt="" />
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default HomePage;
