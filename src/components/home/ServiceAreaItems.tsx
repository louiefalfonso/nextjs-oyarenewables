import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import service_img_1 from "@/assets/images/resource/service1.png";
import service_icon_1 from "@/assets/images/resource/service-icon1.png";

import service_img_2 from "@/assets/images/resource/service2.png";
import service_icon_2 from "@/assets/images/resource/service-icon2.png";

import service_img_3 from "@/assets/images/resource/service3.png";
import service_icon_3 from "@/assets/images/resource/service-icon3.png";

const service_content = {
  title1: "Solar Panels Services",
  sm_des1:
    "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat.",
  title2: "Roof Solar Panels",
  sm_des2:
    "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  title3: "Commercial Roofing",
  sm_des3:
    "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
};

const { title1, sm_des1, title2, sm_des2, title3, sm_des3 } = service_content;

const ServiceAreaItems = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className={`service-box wow animate__backInUp`}>
            <div className="service-thumb">
              <Image
                src={service_img_1}
                style={{ height: "auto" }}
                alt="image-title"
              />
              <div className="service-content">
                <div className="service-icon-thumb">
                  <Image src={service_icon_1} alt="image-title" />
                </div>
                <div className="service-text">
                  <h4>
                    <Link href="/service-details">{title1}</Link>
                  </h4>
                  <p>{sm_des1}</p>
                  <Link href="/service-details">
                    Read More <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className={`service-box wow animate__backInUp`}>
            <div className="service-thumb">
              <Image
                src={service_img_2}
                style={{ height: "auto" }}
                alt="image-title"
              />
              <div className="service-content">
                <div className="service-icon-thumb">
                  <Image src={service_icon_2} alt="image-title" />
                </div>
                <div className="service-text">
                  <h4>
                    <Link href="/service-details">{title2}</Link>
                  </h4>
                  <p>{sm_des2}</p>
                  <Link href="/service-details">
                    Read More <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className={`service-box wow animate__backInUp`}>
            <div className="service-thumb">
              <Image
                src={service_img_3}
                style={{ height: "auto" }}
                alt="image-title"
              />
              <div className="service-content">
                <div className="service-icon-thumb">
                  <Image src={service_icon_3} alt="image-title" />
                </div>
                <div className="service-text">
                  <h4>
                    <Link href="/service-details">{title3}</Link>
                  </h4>
                  <p>{sm_des3}</p>
                  <Link href="/service-details">
                    Read More <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceAreaItems