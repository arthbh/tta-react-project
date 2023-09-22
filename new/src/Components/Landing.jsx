import React from 'react'
import "./Landing.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
  return (
    <>
<div className="layout">
      <div className="container">
        <div className="row head">
          <div className="col-md-3 Head">
            <p>LOREM IPSUM</p>
          </div>
          <div className="col-md-9 Link">
            <a href="/" className="link">LINK1</a>
          </div>
        </div>

        <div className="row center">
          <div className="col-md-6 content">
            <p>
              THIS IS SOME CONTENT ALIGNED IN THS CENTER VERTICALLY AND HORIZONTALLY
            </p>
          </div>
          <div className="col-md-6 content"></div>
        </div>

        <div className="row footer">
          <div className="col-md-12 Footer">
            <p>
              THIS IS THE FOOTER CONTENT WHICH IS ALIGNED
              <br />
              <span className="left">LEFT</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing;