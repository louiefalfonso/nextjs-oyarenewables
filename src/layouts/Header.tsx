"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import HeaderLogoTwo from "@/assets/images/logo2.png";
import HeaderLogo from "@/assets/images/oya-logo-white.png";
import NavMenu from "./NavMenu";
import { TeamSocialLinks } from "@/components/common/SocialLinks";
import UseSticky from "@/hooks/UseSticky";
import MobileMeneu from "./MobileMenu";

const Header = ({ style }: any) => {
  const { sticky } = UseSticky();
  return (
    <>
      <div className="solar-topbar-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9">
              <div className="solar-top-menu">
                <ul>
                  <li className="line">
                      <i className="bi bi-geo-alt"></i> 75 Central Street Floor
                      3 Boston, MA 02109
                  </li>
                  <li>
                      <i className="bi bi-telephone"></i> 1-844-443-1870
                  </li>
                  <li>
                      <i className="bi bi-envelope"></i> info@oyarenewables.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="solar-top-content-menu">
                <div className="solar-top-social-icon">
                  <ul>
                    <TeamSocialLinks />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`solar-header-section ${style ? "style-two" : ""} ${
          sticky ? "sticky-nav" : ""
        }`}
        id="sticky-header"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className={`logo ${style ? "style-two" : ""}`}>
                <Link href="/">
                  {style ? (
                    <Image src={HeaderLogo} alt="logo" />
                  ) : (
                    <Image src={HeaderLogo} alt="logo" />
                  )}
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="solar-menu">
                <NavMenu />
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="solar-search-button">
                <div className="solar-btn">
                  <Link href="/contact">
                    Get A Quote <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMeneu />
    </>
  );
};

export default Header;
