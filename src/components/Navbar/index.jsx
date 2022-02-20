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
              <li><a href="https://unicus-demo.netlify.app/#">About</a></li>
              <li><a href="https://unicus-demo.netlify.app/#">For Creators</a></li>
              <li><a href="https://unicus-demo.netlify.app/#">Token</a></li>
              <li><a href="https://unicus-demo.netlify.app/#">Blog</a></li>
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
