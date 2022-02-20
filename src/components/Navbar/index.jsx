import React from "react";


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
              <li><a href="#">About</a></li>
              <li><a href="#">For Creators</a></li>
              <li><a href="#">Token</a></li>
              <li><a href="#">Blog</a></li>
          </ul>
          
        <div>
          <input type="button" value="Enter App"/>
        </div>
        </div>
      </div>
      <hr className="navHR" />
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
