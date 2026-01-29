import React, { useEffect, useRef } from 'react';
import { ShoppingBag, Users, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './WhyChooseUs.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const stats = [
    {
      number: "100+",
      title: t('whyUs.stats.fabrics.title'),
      desc: t('whyUs.stats.fabrics.desc'),
      icon: ShoppingBag
    },
    {
      number: "5k+",
      title: t('whyUs.stats.customers.title'),
      desc: t('whyUs.stats.customers.desc'),
      icon: Users
    },
    {
      number: "24/7",
      title: t('whyUs.stats.support.title'),
      desc: t('whyUs.stats.support.desc'),
      icon: Headphones
    }
  ];

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Staggered Entry for Stats
  //     gsap.fromTo(cardsRef.current,
  //       { y: 100, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 1,
  //         stagger: 0.2,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: "top 80%"
  //         }
  //       }
  //     );
  //   }, sectionRef);

  //   // Initialize Vanilla Tilt
  //   const validCards = cardsRef.current.filter(el => el !== null);
  //   VanillaTilt.init(validCards, {
  //     max: 15,
  //     speed: 400,
  //     glare: true,
  //     "max-glare": 0.1,
  //     scale: 1.05
  //   });

  //   return () => {
  //     ctx.revert();
  //     validCards.forEach(el => el.vanillaTilt && el.vanillaTilt.destroy());
  //   };
  // }, []);

  return (
    <section id="whyUs" className="py-5 bg-light text-center" ref={sectionRef}>
      <div className="container py-5">
        <h2 className="display-4 text-maroon mb-5 fw-bold font-heading">{t('whyUs.title')}</h2>

        <div className="row g-5">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="col-md-4" key={index}>
                <div
                  className="wcu-card h-100"
                  ref={el => cardsRef.current[index] = el}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="feature-icon-wrapper" style={{ transform: 'translateZ(30px)' }}>
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="h2 mb-2 fw-bold text-dark" style={{ transform: 'translateZ(20px)' }}>{item.number}</h3>
                  <h5 className="mb-3 text-gold text-uppercase letter-spacing-1" style={{ transform: 'translateZ(20px)' }}>{item.title}</h5>
                  <p className="text-muted small" style={{ transform: 'translateZ(20px)' }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;