import React from "react";
import ServiceAreaItems from "./ServiceAreaItems";

const ServiceArea = () => {
  return (
    <>
      <div className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title wow slideInLeft">
                  <h4>Our Most Service</h4>
                </div>
                <div className="section-main-title wow slideInLeft">
                  <h2>Provide Solar Solution</h2>
                </div>
              </div>
            </div>
          </div>
          <ServiceAreaItems/>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
