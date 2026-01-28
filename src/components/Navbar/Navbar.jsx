import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Sparkles, Settings, UserCheck, Smartphone, Globe } from 'lucide-react';
import logoImg from '../../assets/images/withoutbg.png';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Unified Menu Items Configuration
  const menuItems = [
    { name: t('navbar.home'), icon: Home, href: '#home' },
    { name: t('navbar.about'), icon: Info, href: '#about' },
    { name: t('navbar.facilities'), icon: Sparkles, href: '#facilities' },
    { name: t('navbar.gallery'), icon: UserCheck, href: '#whyUs' }, // Why Us section
    { name: t('navbar.contact'), icon: Smartphone, href: '#mission' } // Mobile App section
  ];

  const languages = [
    { code: 'en', label: 'English', iconChar: 'En' },
    { code: 'hi', label: 'हिंदी', iconChar: 'अ' },
    { code: 'mr', label: 'मराठी', iconChar: 'म' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
    setMobileMenuOpen(false);
  };

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <>
      {/* Floating Language Switcher (Top Right - Visible on all screens) */}
      <button
        className="fixed-lang-btn"
        onClick={() => setLangOpen(true)}
        title={t('navbar.language')}
      >
        <div className="icon-box-inner text-maroon">
          <Globe size={28} strokeWidth={1.5} />
        </div>
      </button>

      {/* Desktop Vertical Dock (Left Side) */}
      <div className="d-none d-lg-block">
        <nav className="glass-navbar">
          {/* Nav Items */}
          <div className="d-flex flex-column justify-content-around h-100 py-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-icon-link"
                title={item.name}
              >
                <div className="icon-box-inner">
                  <item.icon size={22} />
                </div>
                <span className="text-label">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Language Switcher Removed from Sidebar (Moved to Top Right) */}
        </nav>
      </div>

      {/* Language Modal */}
      {langOpen && (
        <div className="lang-modal-overlay" onClick={() => setLangOpen(false)}>
          <div className="lang-modal-content" onClick={e => e.stopPropagation()}>
            <button className="btn-close-modal" onClick={() => setLangOpen(false)}>
              <X size={24} />
            </button>

            <div className="lang-modal-header">
              <h3>Select Language</h3>
            </div>

            <div className="lang-options-grid">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className={`lang-card ${i18n.language === lang.code ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  <div className="lang-card-icon">
                    {lang.iconChar}
                  </div>
                  <span className="lang-card-label">{lang.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Top Bar (Wrapper) */}
      <div className="d-lg-none mobile-wrapper position-fixed" style={{ zIndex: 1000 }}>
        <nav className="glass-navbar">
          {/* Toggler */}
          <button
            className="btn border-0 p-0 text-dark"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
        {/* Mobile Menu Popover (custom) */}
        <div className={`mobile-popover ${mobileMenuOpen ? 'show' : ''}`}>
          <div className="mobile-popover-body">
            <ul className="mobile-nav-list">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.href}>
                  <a
                    href={item.href}
                    className="nav-icon-link d-flex align-items-center justify-content-between"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="icon-box-inner">
                      <item.icon size={22} />
                    </div>
                    <span className="text-label">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;