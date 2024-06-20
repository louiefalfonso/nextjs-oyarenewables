'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeaderLogoTwo from "../../public/assets/images/logo2.png"
import HeaderLogo from "../../public/assets/images/oya-logo-white.png";
import NavMenu from './NavMenu';
import { TeamSocialLinks } from '@/components/common/SocialLinks';
import UseSticky from '@/hooks/UseSticky';
import MobileMeneu from './MobileMenu';

const Header = ({ style }: any) => {

  const { sticky } = UseSticky()
  return (
    <>

      <div className="solar-topbar-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="solar-top-menu">
                <ul>
                  <li className="line"><a href="#"><i className="bi bi-geo-alt"></i> 12/7 new town, USA</a></li>
                  <li><a href="#"><i className="bi bi-telephone"></i> +199(980) 6915</a></li>
                  <li><a href="#"><i className="bi bi-envelope"></i> example@gmail.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
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

      <header className={`solar-header-section ${style ? 'style-two' : ''} ${sticky ? 'sticky-nav' : ''}`} id="sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6">
              <div className={`logo ${style ? 'style-two' : ''}`}>
                <Link href="/">
                  {style ? <Image src={HeaderLogoTwo} alt="logo" /> : <Image src={HeaderLogo} alt="logo" />}
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="solar-menu">
                <NavMenu />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="solar-search-button">
                
                <div className="solar-btn">
                  <Link href="/contact">Get A Quote <i className="bi bi-arrow-right"></i></Link>
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