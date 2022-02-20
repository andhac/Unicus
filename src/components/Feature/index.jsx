import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { FaAnchor } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { FaVrCardboard } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

function feature() {
  return (
    <>
      <div className="feature_container">
        <h2>Features & Components</h2>
        <h1>UnicusOne Web 3.0 Ecosystem</h1>
        <p>
          UnicusOne comes with some of the most advanced features for the Web
          3.0 Economy
        </p>
        <div className="cardHolder">
          <div class="cutom bg-transparent shadow-lg rounded-lg">
            <div>
              <h3 className="cardIcon">
                <FaAsterisk />
              </h3>
              <p>NFT Marketplace</p>
              <p>A multi-chain NFT Marketplace supporting both ERC 721 and 1155 standards and a variety of asset classes, supporting payments through both credit cards and cryptocurrencies</p>
            </div>
          </div>
          <div class="cutom bg-transparent shadow-lg rounded-lg">
            <div>
              <h3 className="cardIcon">
                <FaAnchor />
              </h3>
              <p>
              Widget Based Solution
              </p>
              <p>UnicusOne widgets will allow any developer to integrate Web 3.0 utilities to their Web 2.0 application hassle-free, within 15 minutes</p>
            </div>
          </div>
          <div class="cutom bg-transparent shadow-lg rounded-lg">
            <div>
              <h3 className="cardIcon">
                <FaStoreAlt />
              </h3>
              <p>
              Whitelabel NFT Storefronts
              </p>
              <p>An option for partners to Instantly build their own NFT Marketplace instantly using UnicusOne's NFT infrastructure</p>
            </div>
          </div>
          <div class="cutom bg-transparent shadow-lg rounded-lg">
            <div>
              <h3 className="cardIcon">
                <FaVrCardboard />
              </h3>
              <p>
              Seamless to Metaverse
              </p>
              <p>We offer seamless integration with UnicusOne Web 3.0 modules like Generative Art Engine, Whitelisting & Airdrops, NFT Reveal, and Token Swap for Metaverse and Gaming Projects</p>
            </div>
          </div>
          <div class="cutom bg-transparent shadow-lg rounded-lg">
            <div>
              <h3 className="cardIcon">
                <FaUserCog />
              </h3>
              <p>
              Partner APIs and SDKs
              </p>
              <p>Easy to use APIs and SDKs for partners that convert digital asset platforms to NFT marketplaces</p>
            </div>
          </div>
          <div class="cutom bg-transparent shadow-lg rounded-lg">
            <div>
              <h3 className="cardIcon">
                <FaDollarSign />
              </h3>
              <p >
              Web 3.0 Payment Gateway
              </p>
              <p>This module of ours can quickly integrate support of Web3.0 wallets for crypto payments to support and Web2.0 eCommerce Platform</p>
            </div>
          </div>
        </div>
      <p>Work in Progress...</p>
      </div>
    </>
  );
}

export default feature;
