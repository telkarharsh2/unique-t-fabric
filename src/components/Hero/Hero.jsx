import React from 'react';

HEAD
import video1 from '../../assets/videos/first.mp4';
import video1 from '../../assets/videos/Hero3.mp4';
cae16c2ec661e7eaa92078fc80ee448b2600a8d2

const Hero = () => {
  return (
    <section id="home" className="position-relative vh-100 overflow-hidden bg-white">

      {/* Hero Carousel */}
      <div id="heroCarousel" className="carousel slide carousel-fade h-100" data-bs-ride="carousel">

        {/* Indicators REMOVED */}

        <div className="carousel-inner h-100">

          {/* Slide 1 - Video 1 */}
          <div className="carousel-item active h-100">
            <div className="w-100 h-100 position-relative">
              <video
                src={video1}
                autoPlay
                muted
                loop
                playsInline
                className="d-block w-100 h-100 object-fit-cover"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100"
                style={{ background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6))' }}></div>
            </div>
          </div>
        </div>

      </div>

      {/* Content Overlay REMOVED as requested */}
    </section>
  );
};

export default Hero;