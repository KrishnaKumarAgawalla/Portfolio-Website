import React from "react";
import { NavigationDots, SocialMedia } from "../Components";

const AppWrapper = (Components, idName, classNames) =>
  function HOC() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Components />

          <div className="copyright">
            <p className="p-text">{"@"+year+" Krishna"}</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
