import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 auto">
              <div className="row">
                <div className="col-lg-6 pt-5 order-2 pt-lg-0 order-lg-1 justify-content-center">
                  <h1>
                    {props.name}
                    <p><strong className="brand-name">  E-Commerse</strong></p>
                  </h1>
                  <p>
                  <h2 classnName="my-3">
                    We are making websites and we are the team of telented students.
                  </h2>
                  </p>
                  <p>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                  </p>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Common img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
