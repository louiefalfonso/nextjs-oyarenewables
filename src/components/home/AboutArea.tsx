"use client";
import React, { useState } from "react";
import Image from "next/image";

import about_thumb from "@/assets/images/about/about-thumb.jpg";
import about_shape from "@/assets/images/about/about-shape.png";

interface DataType {
  tab_id: string;
  tab_name: string;
  sm_info: string;
  feature_list_1: string[];
  feature_list_2: string[];
}

const tab_data: DataType[] = [
  {
    tab_id: "home",
    tab_name: "About Us",
    sm_info:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam aperiam, eaquecy epsa abillo inventore veritatis architecto beatae",
    feature_list_1: [
      "Best Insurance Agency",
      "Trusted & Experience",
      "Key Managerial Persons",
    ],
    feature_list_2: [
      "Dedicated Support",
      "Board Composition",
      "Board Committees",
    ],
  },
  {
    tab_id: "profile",
    tab_name: "Mission",
    sm_info:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam aperiam, eaquecy epsa abillo inventore veritatis architecto beatae",
    feature_list_1: [
      "Key Managerial Persons",
      "Best Insurance Agency",
      "Trusted & Experience",
    ],
    feature_list_2: [
      "Board Composition",
      "Board Committees",
      "Dedicated Support",
    ],
  },
  {
    tab_id: "contact",
    tab_name: "Visiont",
    sm_info:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam aperiam, eaquecy epsa abillo inventore veritatis architecto beatae",
    feature_list_1: [
      "Trusted & Experience",
      "Best Insurance Agency",
      "Key Managerial Persons",
    ],
    feature_list_2: [
      "Board Committees",
      "Board Composition",
      "Dedicated Support",
    ],
  },
];

const AboutArea = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
