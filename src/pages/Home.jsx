import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import logoImg from '../assets/images/withoutbg.png';
import Hero from '../components/Hero/Hero';
import Facilities from '../components/Facilities/Facilities';
import AboutUs from '../components/AboutUs/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import MissionObjectives from '../components/MissionObjectives/MissionObjectives';
import Footer from '../components/Footer/Footer';
import Skeleton from '../components/Shared/Skeleton';

const Home = ({ loading }) => {
  // Loading state moved to App.jsx for synchronization

  if (loading) {
    return (
      <div className="container-fluid p-0" style={{ overflowX: 'hidden' }}>
        {/* Navbar Skeleton */}
        <div className="d-flex justify-content-between align-items-center p-3 shadow-sm bg-white">
          <Skeleton type="rect" width="120px" height="40px" />
          <div className="d-flex gap-3">
            <Skeleton type="text" width="60px" />
            <Skeleton type="text" width="60px" />
            <Skeleton type="text" width="60px" />
          </div>
        </div>

        {/* Hero Skeleton (Matches Video Background) */}
        <div style={{ height: 'calc(100vh - 70px)', width: '100%' }} className="mb-5">
          <Skeleton type="rect" width="100%" height="100%" style={{ borderRadius: 0 }} />
        </div>

        {/* Facilities Skeleton */}
        <div className="container py-5">
          {/* Section Title */}
          <div className="d-flex flex-column align-items-center mb-5">
            <Skeleton type="text" width="300px" height="40px" className="mb-3" />
            <Skeleton type="rect" width="60px" height="3px" />
          </div>

          {/* Cards Grid */}
          <div className="row g-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="h-100 p-4 border rounded bg-white shadow-sm">
                  <Skeleton type="circle" width="40px" height="40px" className="mb-3" />
                  <Skeleton type="text" width="60%" height="24px" className="mb-3" />
                  <Skeleton type="text" width="100%" />
                  <Skeleton type="text" width="80%" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Us Skeleton */}
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <Skeleton type="rect" width="100%" height="400px" style={{ borderRadius: '1rem' }} />
            </div>
            <div className="col-lg-6">
              <Skeleton type="text" width="150px" height="20px" className="mb-3" />
              <Skeleton type="text" width="80%" height="40px" className="mb-4" />
              <Skeleton type="text" width="100%" height="16px" className="mb-2" />
              <Skeleton type="text" width="100%" height="16px" className="mb-2" />
              <Skeleton type="text" width="90%" height="16px" className="mb-4" />
              <Skeleton type="btn" />
            </div>
          </div>
        </div>

        {/* Why Choose Us Skeleton */}
        <div className="container py-5">
          <div className="text-center mb-5 d-flex flex-column align-items-center">
            <Skeleton type="text" width="400px" height="40px" />
          </div>
          <div className="row g-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="col-md-4">
                <div className="p-4 border rounded bg-light text-center d-flex flex-column align-items-center">
                  <Skeleton type="circle" width="50px" height="50px" className="mb-3" />
                  <Skeleton type="text" width="80px" height="30px" className="mb-2" />
                  <Skeleton type="text" width="120px" height="20px" className="mb-3" />
                  <Skeleton type="text" width="90%" height="14px" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission/App Skeleton */}
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <Skeleton type="rect" width="100px" height="30px" className="mb-4" style={{ borderRadius: '20px' }} />
              <Skeleton type="text" width="90%" height="40px" className="mb-3" />
              <Skeleton type="text" width="100%" height="16px" className="mb-2" />
              <Skeleton type="text" width="90%" height="16px" className="mb-4" />
              <div className="d-flex gap-3">
                <Skeleton type="rect" width="160px" height="60px" style={{ borderRadius: '12px' }} />
                <Skeleton type="rect" width="160px" height="60px" style={{ borderRadius: '12px' }} />
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <Skeleton type="rect" width="280px" height="550px" style={{ borderRadius: '40px' }} />
            </div>
          </div>
        </div>

        {/* Footer Skeleton */}
        <div className="bg-dark py-5 mt-5">
          <div className="container">
            <div className="row g-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="col-lg-3">
                  <Skeleton type="text" width="120px" height="24px" className="mb-4" style={{ opacity: 0.3 }} />
                  <Skeleton type="text" width="100%" height="14px" className="mb-2" style={{ opacity: 0.2 }} />
                  <Skeleton type="text" width="80%" height="14px" className="mb-2" style={{ opacity: 0.2 }} />
                  <Skeleton type="text" width="90%" height="14px" className="mb-2" style={{ opacity: 0.2 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Facilities />
      <AboutUs />
      <WhyChooseUs />
      <MissionObjectives />
      <Footer />
    </>
  );
};

export default Home;