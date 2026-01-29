import React, { useEffect, useRef } from 'react';
import aboutVideo from '../../assets/logo/logo-animation.mp4';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutUs = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Parallax/Scale Effect for Video Container
      gsap.fromTo(videoRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "center center",
            scrub: 1
          }
        }
      );

      // 2. Text Reveal Effect (Staggered Children)
      const textElements = textRef.current.children;
      gsap.fromTo(textElements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-5 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container py-5">
        <div className="row align-items-center g-5">

          <div className="col-lg-6 position-relative">
            {/* Clean Video Container - No Frame, No Overlay */}
            <div className="rounded-4 overflow-hidden shadow-lg" ref={videoRef}>
              <video
                src={aboutVideo}
                className="object-fit-cover w-100 h-100 d-block"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={aboutVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="col-lg-6" ref={textRef}>
            <h6 className="text-warning text-uppercase letter-spacing-2 mb-2">{t('about.subtitle')}</h6>
            <h2 className="display-4 fw-bold mb-4 font-heading">{t('about.title')}</h2>

            <p className="lead text-muted mb-3" style={{ fontWeight: 500 }}>
              {t('about.desc')}
            </p>

            <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
              {t('about.desc2')}
            </p>

            <figure className="bg-light p-4 rounded-3 border-start border-4 border-warning mb-4">
              <blockquote className="blockquote mb-0">
                <p className="fs-6 fst-italic text-secondary">
                  "{t('about.quote')}"
                </p>
              </blockquote>
            </figure>

            <a href="https://thynktech.ltd" className="btn btn-dark btn-lg rounded-pill px-5 shadow-sm hover-scale">
              {t('about.button')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;