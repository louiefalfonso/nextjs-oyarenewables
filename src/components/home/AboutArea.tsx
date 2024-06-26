"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import about_thumb from "@/assets/images/about/about-thumb.jpg";
import about_shape from "@/assets/images/about/about-shape.png";


const AboutArea = () => {
  
  return (
    <>
      <div className={`about-section`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="wow slideInLeft">
                <div className="about-thumb">
                  <Image
                    src={about_thumb}
                    style={{ height: "auto" }}
                    alt="image-title"
                  />
                  <div className="about-counter">
                    <div className="about-counter-text">
                      <div className="about-numbar">
                        <h4 className="counter">29</h4>
                        <span>+</span>
                      </div>
                      <div className="about-text">
                        <h5>Years Exprience</h5>
                      </div>
                    </div>
                  </div>
                  <div className="about-counter-two d-flex align-items-center ">
                    <div className="about-counter-img">
                      <Image src={about_shape} alt="image-title" />
                    </div>
                    <div className="about-number-two">
                      <h4 className="counter">2900</h4>
                      <span>+</span>
                      <h5>Satisfied Clients</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-section-title">
                <div className="about-section-sub-title wow slideInUp">
                  <h4>Our Introductton</h4>
                </div>
                <div className="about-section-main-title wow slideInRight">
                  <h2>We're Developing Future Solar Solutions </h2>
                </div>
              </div>
              {/* <!-- tab --> */}
              <div className="tab">
                <div className="tab-content">
                  <div>
                    <div className="tabs_item">
                      <div className="tabs-items-content">
                        <div className="about-content-discription wow slideInLeft">
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            aperiam, eaquecy epsa abillo inventore veritatis
                            architecto beatae
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="about-list wow slideInLeft">
                              <ul>
                                <li>
                                  <i className="bi bi-chevron-double-right"></i>
                                  Community Solar For Everyone
                                </li>
                                <li>
                                  <i className="bi bi-chevron-double-right"></i>
                                  Commercial Solar Solutions
                                </li>
                                <li>
                                  <i className="bi bi-chevron-double-right"></i>
                                  Renewable Energy Technology
                                </li>
                                <li>
                                  <i className="bi bi-chevron-double-right"></i>
                                  EV Charging Solutions
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="about-list wow slideInRight">
                              <ul>
                                <li>
                                  <i className="bi bi-chevron-double-right"></i>
                                  Community Solar Options
                                </li>
                                <li>
                                  <i className="bi bi-chevron-double-right"></i>
                                  Renewable Energy Credits
                                </li>
                                <li>
                                  <i className="bi bi-chevron-double-right"></i>
                                  Community Solar for Business
                                </li>
                                <li>
                                  <i className="bi bi-chevron-double-right"></i>
                                  Energy as a Service
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="solar-btn about wow slideInDown">
                            <Link href="/services">
                            Our Services <i className="bi bi-arrow-right"></i>
                            </Link>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
