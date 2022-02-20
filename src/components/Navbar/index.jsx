import React, { useState } from "react";


function LargeNav() {
  return (
    <>
      <div className="container">
          <div className="logo">
            <img
              src="https://unicus.one/wp-content/uploads/2022/02/Unicus-logo.png"
              alt="Unicus"
            ></img>
          </div>
          <div className="nav">
            <ul>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
              <li>About</li>
          </ul>
          
        <div>
          <input type="button" value="Enter App"/>
        </div>
        </div>
      </div>
      <hr />
    </>
  );
}
function Navbar() {
  return (
    <nav className="new">
      <LargeNav />
    </nav>
  );
}

export default Navbar;
