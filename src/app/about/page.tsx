import React from 'react'
import Wrapper from "@/layouts/Wrapper";
import AboutPage from '@/components/inner-pages/about';

export const metadata = {
  title:
    "About Renewable Energy Company - Clean Energy Solutions Next js Template",
  description:
    "The Solar Panel React Next js Project with modern and responsive design specifically created for websites related to solar energy and renewable energy solutions",
};



const About = () => {
  return (
    <>
      <Wrapper>
        <AboutPage />
      </Wrapper>
    </>
  );
}

export default About;