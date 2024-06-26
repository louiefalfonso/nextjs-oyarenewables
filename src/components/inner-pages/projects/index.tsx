import Breadcrumb from '@/components/common/breadcrumb/breadcrumb'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import React from 'react'
import ProjectGridArea from './ProjectGridArea'
import SubscribeArea from '@/components/home/SubscribeArea'

const ProjectPage = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb top_title="Projects" title="Projects" />
        <ProjectGridArea/>
        <SubscribeArea/>
      </main>
      <Footer />
    </>
  );
}

export default ProjectPage