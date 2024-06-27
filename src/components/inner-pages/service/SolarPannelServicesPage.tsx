import React from "react";
import Image from "next/image";
import Link from "next/link";

import service_details_thumb_1 from "@/assets/images/resource/service-details.png";
import service_details_thumb_2 from "@/assets/images/resource/service-details2.png";
import service_details_thumb_3 from "@/assets/images/resource/service-details3.png";
import Accordion from "@/components/common/Accordion";

interface DataType {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
  title_2: string;
  help_title: string;
  help_info: string;
  help_info1: string;
  phone: string;
  email: string;
  location: string;
}

const service_details_content: DataType = {
  title: "Solar Pannel Services",
  sm_des_1:
    "Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  dolore magna ali Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irures dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat nonm proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor.",
  sm_des_2:
    "Sit amet, consectetur adipisoftwareit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Duis fvUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
  title_2: "This service overview Everyone",

  help_title: "Need Help?",
  help_info1:
    "At OYA Renewables, we’ve built our reputation as one of the leading solar companies and renewable energy power producers in North America. We bring distributed energy and smart long-term renewable energy solutions to local communities while empowering everyone with energy choice.",
  help_info:
    "Our primary focus as a business is providing widespread economic and environmental benefits through working closely with landowners, municipalities, utilities, and local communities at large to maximize the benefits for decades to come.",
  phone: "1-844-443-1870",
  email: "info@oyarenewables.com",
  location: "75 Central Street Floor 3 Boston, MA",
};
const {
  title,
  sm_des_1,
  sm_des_2,
  title_2,
  help_title,
  help_info,
  help_info1,
  phone,
  email,
  location,
} = service_details_content;

const SolarPannelServicesPage = () => {
  return (
    <>
      <div className="service-details-section">
        <div className="container">
          <div className="row">
            <div className="service-details-title">
              <h4>{title}</h4>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="service-details-thumb">
                <Image
                  src={service_details_thumb_1}
                  style={{ width: "100%", height: "auto" }}
                  alt="service-details"
                />
              </div>
              <div className="service-details-discription">
                <p>{sm_des_1}</p>
                <p>{sm_des_2}</p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="service-details-thumb-two">
                    <Image
                      src={service_details_thumb_2}
                      style={{ height: "auto" }}
                      alt="image-title"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service-details-thumb-two">
                    <Image
                      src={service_details_thumb_3}
                      style={{ height: "auto" }}
                      alt="image-title"
                    />
                  </div>
                </div>
              </div>
              <div className="service-details-title">
                <h4>{title_2}</h4>
              </div>
              <div className="service-details-discription">
                <p>{sm_des_1}</p>
              </div>
              <Accordion />
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <!-- widget search --> */}
              <div className="widget-help-box">
                <div className="widget-content">
                  <h4>{help_title}</h4>
                  <p>{help_info}</p>
                  <br />
                  <p>{help_info1}</p>
                  <div className="widget-info-social-link">
                    <ul>
                      <li>
                        <a href="/contact">
                          <i className="bi bi-telephone"></i>{" "}
                          <span>{phone}</span>
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          <i className="bi bi-envelope"></i>{" "}
                          <span>{email}</span>
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          <i className="bi bi-geo-alt"></i>{" "}
                          <span>{location}</span>
                        </a>
                      </li>
                    </ul>
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

export default SolarPannelServicesPage;
