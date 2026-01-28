import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Smartphone, Bell, Package } from 'lucide-react';
import gsap from 'gsap';
import './ComingSoonModal.css';
import logoAnimation from '../../assets/logo/logo-animation.mp4';
import { useTranslation } from 'react-i18next';

const ComingSoonModal = ({ onClose }) => {
    const modalRef = useRef(null);
    const contentRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        // Entrance Animation
        const ctx = gsap.context(() => {
            gsap.fromTo(modalRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.4, ease: "power2.out" }
            );

            gsap.fromTo(contentRef.current,
                { scale: 0.8, opacity: 0, y: 20 },
                { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)", delay: 0.1 }
            );
        }, modalRef);

        return () => ctx.revert();
    }, []);

    const handleClose = () => {
        // Exit Animation
        const ctx = gsap.context(() => {
            gsap.to(contentRef.current, { scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.in" });
            gsap.to(modalRef.current, {
                opacity: 0,
                duration: 0.3,
                delay: 0.1,
                onComplete: onClose
            });
        }, modalRef);
    };

    const features = [
        { icon: Smartphone, title: t('comingSoon.features.native.title'), desc: t('comingSoon.features.native.desc') },
        { icon: Bell, title: t('comingSoon.features.notify.title'), desc: t('comingSoon.features.notify.desc') },
        { icon: Package, title: t('comingSoon.features.track.title'), desc: t('comingSoon.features.track.desc') }
    ];

    return createPortal(
        <div className="coming-soon-overlay" ref={modalRef} onClick={handleClose}>
            <div className="coming-soon-content" ref={contentRef} onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={handleClose}>
                    <X size={24} />
                </button>

                <div className="video-container">
                    <video
                        src={logoAnimation}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="logo-video"
                    />
                </div>

                <div className="text-center mt-3 w-100">
                    <h2 className="display-6 fw-bold text-maroon mb-2">{t('comingSoon.title')}</h2>
                    <p className="text-muted mb-4">{t('comingSoon.subtitle')}</p>

                    <div className="features-grid text-start">
                        {features.map((feature, index) => (
                            <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-light mb-2" key={index}>
                                <div className="text-maroon">
                                    <feature.icon size={24} />
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-0 text-dark">{feature.title}</h6>
                                    <small className="text-secondary">{feature.desc}</small>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="loading-bar mt-4">
                        <div className="loading-progress"></div>
                    </div>
                    <p className="small text-muted mt-2">{t('comingSoon.loading')}</p>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ComingSoonModal;
