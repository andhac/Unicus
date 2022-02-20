import React, { Component } from "react";
import { Route } from "react-router-dom";

//Layout
import HomeLayout from "../layouts/HomePage.layout";

function HomelayoutHoc({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <HomeLayout>
            <Component {...props} /> 
          </HomeLayout>
        )}
      />
    </>
  );
}

export default HomelayoutHoc;
