import React, { useEffect, useRef } from 'react';
import { Tag, Globe, Truck, CheckCircle, ShieldCheck, Crown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Facilities.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';

const Facilities = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const facilitiesDataFixed = [
    {
      icon: Tag,
      title: t('facilities.cards.premium.title'),
      desc: t('facilities.cards.premium.desc')
    },
    {
      icon: Globe,
      title: t('facilities.cards.ethical.title'),
      desc: t('facilities.cards.ethical.desc')
    },
    {
      icon: Crown,
      title: t('facilities.cards.design.title'),
      desc: t('facilities.cards.design.desc')
    },
    {
      icon: Truck,
      title: t('facilities.cards.reach.title'),
      desc: t('facilities.cards.reach.desc')
    },
    {
      icon: CheckCircle,
      title: t('facilities.cards.quality.title'),
      desc: t('facilities.cards.quality.desc')
    },
    {
      icon: ShieldCheck,
      title: t('facilities.cards.royal.title'),
      desc: t('facilities.cards.royal.desc')
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered Entry Animation
      gsap.fromTo(cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%"
          }
        }
      );
    }, sectionRef);

    // Initialize Vanilla Tilt
    // We only apply it if the ref exists
    const validCards = cardsRef.current.filter(el => el !== null);
    VanillaTilt.init(validCards, {
      max: 10,        // Max tilt amount
      speed: 400,     // Speed of the enter/exit transition
      glare: true,    // Add a glare effect
      "max-glare": 0.2,
      scale: 1.05     // Slight zoom
    });

    return () => {
      ctx.revert();
      // Destroy tilt instances
      validCards.forEach(el => el.vanillaTilt && el.vanillaTilt.destroy());
    };
  }, []);

  return (
    <section id="facilities" className="facilities-container" ref={sectionRef}>
      <div className="container py-4">
        <div className="text-center mb-4">
          <h2 className="display-4 fw-bold font-heading" style={{ color: '#800000' }}>{t('facilities.title')}</h2>
          <div className="d-flex justify-content-center mt-3">
            <div className="bg-warning" style={{ width: '60px', height: '3px' }}></div>
          </div>
        </div>

        <div className="row g-3">
          {facilitiesDataFixed.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="col-md-6 col-lg-4 ">
                <div
                  className="magic-card h-100 p-3" // Added p-3 here explicitly if not handled by CSS, or assuming magic-card has padding we want to override/reduce?
                  ref={el => cardsRef.current[index] = el}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="mb-2 text-warning" style={{ transform: 'translateZ(20px)' }}>
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h4 className="fw-bold mb-2" style={{ transform: 'translateZ(20px)' }}>{item.title}</h4>
                  <p className="small mb-0 opacity-75" style={{ transform: 'translateZ(20px)' }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Facilities;