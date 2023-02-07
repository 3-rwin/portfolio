import "./housefinder.css";
import React from "react";

const housefinder = () => {
  return (
    <div class="main">
      <div class="house-finder">
        <div>
          <img src={require("./../img/housefinder_desktop.png")} alt="" />
          <p>Desktop Preview</p>
        </div>
        <div>
          <img src={require("./../img/housefinder_mobile.png")} alt="" />
          <p>Mobile Preview</p>
        </div>
      </div>
      <div className="default-button">
        <a href="/#projects">Terug</a>
      </div>
    </div>
  );
};

export default housefinder;
