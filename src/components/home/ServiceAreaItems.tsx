import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import service_img_1 from "@/assets/images/resource/service1.png";
import service_icon_1 from "@/assets/images/resource/service-icon1.png";

import service_img_2 from "@/assets/images/resource/service2.png";
import service_icon_2 from "@/assets/images/resource/service-icon2.png";

import service_img_3 from "@/assets/images/resource/service3.png";
import service_icon_3 from "@/assets/images/resource/service-icon3.png";

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
                    <Link href="/service-details">Solar Panels Services</Link>
                  </h4>
                  <p>
                    Suspendisse natoque elit in eget orci amet volutpat, est.
                    Integer mauris feugia.
                  </p>
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
                    <Link href="/service-details">Roof Solar Panels</Link>
                  </h4>
                  <p>
                    Suspendisse natoque elit in eget orci amet volutpat, est.
                    Integer mauris feugia.
                  </p>
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
                    <Link href="/service-details">Commercial Roofing</Link>
                  </h4>
                  <p>
                    Suspendisse natoque elit in eget orci amet volutpat, est.
                    Integer mauris feugia.
                  </p>
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