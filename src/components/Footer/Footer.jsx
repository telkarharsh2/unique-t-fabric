import React, { useState } from 'react';
import LegalModal from '../Modals/LegalModal';
import logoImg from '../../assets/images/withoutbg.png';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import TTI from '../../assets/images/tti.png';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPolicy, setCurrentPolicy] = useState('');
  const { t } = useTranslation();

  const handleLegalClick = (e, key) => {
    e.preventDefault();
    // Assuming the structure is footer.legalContent.[key]
    setCurrentPolicy({
      title: t(`footer.legalContent.${key}.title`),
      content: t(`footer.legalContent.${key}.content`)
    });
    setModalOpen(true);
  };

  const legalLinks = [
    { key: 'policies', label: t('footer.legal.policies') },
    { key: 'terms', label: t('footer.legal.terms') },
    { key: 'privacy', label: t('footer.legal.privacy') },
    { key: 'refund', label: t('footer.legal.refund') },
    { key: 'license', label: t('footer.legal.license') }
  ];

  return (
    <>
      <footer className="footer-section">
        <div className="footer-gradient-line"></div>

        <div className="container position-relative py-4" style={{ zIndex: 1 }}>
          <div className="row g-5 pt-4">

            {/* Brand & Address */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              {/* <h4 className="footer-brand-title text-uppercase">{t('footer.brandTitle')}</h4> */}
              <div className="footer-logo-container mb-3">
                <img
                  src={logoImg}
                  alt="Unique T Fabric"
                  className="img-fluid"
                  style={{ width: '190px', height: 'auto' }}
                />
                <p className="small text-secondary fst-italic">{t('footer.tagline')}</p>
              </div>
              <div className="d-flex gap-3 mb-4 pt-4">
                <div className="footer-icon-box flex-shrink-0 mt-1">
                  <MapPin size={18} />
                </div>
                <address className="text-secondary small fst-normal mb-0" style={{ lineHeight: '1.6' }}>
                  <strong className="text-dark d-block mb-1">{t('footer.address.line1')}</strong>
                  {t('footer.address.line2')}<br />
                  {t('footer.address.line3')}<br />
                  {t('footer.address.line4')}
                </address>
              </div>

              <div className="d-flex flex-column gap-3">
                <a href="tel:8069640559" className="footer-contact-item">
                  <div className="footer-icon-box">
                    <Phone size={18} />
                  </div>
                  <span>8069640559</span>
                </a>
                <a href="mailto:support@thynktech.ltd" className="footer-contact-item">
                  <div className="footer-icon-box">
                    <Mail size={18} />
                  </div>
                  <span>support@thynktech.ltd</span>
                </a>
                <a href="https://www.thynktech.ltd" target="_blank" rel="noreferrer" className="footer-contact-item">
                  <div className="footer-icon-box">
                    <Globe size={18} />
                  </div>
                  <span>www.thynktech.ltd</span>
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="col-lg-2 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <h6 className="text-dark mb-4 text-uppercase small opacity-75 fw-bold tracking-wider">{t('footer.explore.title')}</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li><a href="#home" className="footer-link small">{t('footer.explore.home')}</a></li>
                <li><a href="#about" className="footer-link small">{t('footer.explore.about')}</a></li>
                <li><a href="#facilities" className="footer-link small">{t('footer.explore.facilities')}</a></li>
                <li><a href="#whyUs" className="footer-link small">{t('footer.explore.whyUs')}</a></li>
                <li><a href="#mission" className="footer-link small">{t('footer.explore.getApp')}</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <h6 className="text-dark mb-4 text-uppercase small opacity-75 fw-bold tracking-wider">{t('footer.legal.title')}</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                {legalLinks.map(link => (
                  <li key={link.key}>
                    <button onClick={(e) => handleLegalClick(e, link.key)} className="btn btn-link p-0 footer-link small text-start border-0 text-decoration-none">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo/Newsletter Place */}
            <div className="col-lg-3 col-md-6 text-center text-lg-end" data-aos="fade-up" data-aos-delay="300">
              <div className="footer-logo-container mb-3">
                <a href="https://thynktech.ltd/">
                <img
                  src={TTI}
                  alt="Unique T Fabric"
                  className="img-fluid"
                  style={{ width: '300px', height: 'auto' }}
                />
                </a>
              </div>
            </div>

          </div>

          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <p className="text-secondary small mb-0 opacity-75">{t('footer.copyright')}</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="text-secondary small mb-0 opacity-50 d-flex align-items-center justify-content-center justify-content-md-end gap-2">
                  {t('footer.designedBy')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={currentPolicy.title}
        content={currentPolicy.content}
      />
    </>
  );
};
export default Footer;