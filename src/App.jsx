import { useEffect, useState } from 'react'
function injectJavascript(src) {
  var po = document.createElement('script');
  po.type = 'text/javascript';
  po.async = false;
  po.src = src;

  document.querySelector("body").appendChild(po)
}

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      injectJavascript('./assets/js/jquery.js')
      injectJavascript('./assets/js/waypoints.js')
      injectJavascript('./assets/js/bootstrap.bundle.min.js')
      injectJavascript('./assets/js/swiper-bundle.js')
      injectJavascript('./assets/js/slick.js')
      injectJavascript('./assets/js/magnific-popup.js')
      injectJavascript('./assets/js/counterup.js')
      injectJavascript('./assets/js/nice-select.js')
      injectJavascript('./assets/js/meanmenu.js')
      injectJavascript('./assets/js/isotope-pkgd.js')
      injectJavascript('./assets/js/imagesloaded-pkgd.js')
      injectJavascript('./assets/js/ajax-form.js')
      injectJavascript('./assets/js/main.js')
    }, )
  })

  return (
<>
<header>
          {/* tp-header-area-start */}
          <div id="header-sticky" className="tp-header-area header-transparent header-space header-border">
            <div className="container-fluid">
              <div className="row g-0 align-items-center">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                  <div className="tp-logo">
                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-8 d-none d-lg-block">
                  <div className="tp-main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="hasdropdown"><a href="index.html">Home</a>
                          <ul className="submenu">
                            <li><a href="index.html">Home 1</a></li>
                            <li><a href="index-2.html">Home 02</a></li>
                            <li><a href="index-3.html">Home 03</a></li>
                          </ul>
                        </li>
                        <li className="hasdropdown"><a href="#">Pages</a>
                          <ul className="submenu">
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="price.html">Price</a></li>
                            <li><a href="faq.html">Faq</a></li>
                            <li><a href="contact.html">Contact</a></li>
                          </ul>
                        </li>
                        <li className="hasdropdown"><a href="service-details.html">Service</a>
                          <ul className="submenu">
                            <li><a href="service-details.html">Service</a></li>
                            <li><a href="service-details.html">Service Details</a></li>
                          </ul>
                        </li>
                        <li className="hasdropdown"><a href="portfolio-details.html">Portfolio</a>
                          <ul className="submenu">
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="portfolio-details.html">Portfolio Details</a></li>
                          </ul>
                        </li>
                        <li className="hasdropdown"><a href="blog-details.html">Blog</a>
                          <ul className="submenu">
                            <li><a href="blog.html">Blog Sidebar</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-3 col-lg-2 col-md-6 col-6">
                  <div className="tp-header-right d-flex align-items-center justify-content-end">
                    <div className="tp-header-info d-none d-xxl-block">
                      <a className="header-icon" href="#"><img src="assets/img/svg/header-icon.svg" alt="" /></a>
                      <a href="tel:0091590088">Call us : <span>+00 91 590 088 </span></a>
                    </div>
                    <div className="tp-header-button d-none d-md-block">
                      <a className="tp-btn" href="about-us.html">Get Started</a>
                    </div>
                    <div className="tp-toggle-bar d-lg-none">
                      <a className="tp-menu-bar" href="#"><i className="fas fa-bars" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tp-header-area-end */}
          {/* tp-offcanvus-area-start */}
          <div className="tp-offcanvas-area d-lg-none">
            <div className="tpoffcanvas" data-background="assets/img/slider/slider-shape-3-1.png">
              <div className="tpoffcanvas__close-btn">
                <button className="close-btn"><i className="fal fa-times" /></button>
              </div>
              <div className="tpoffcanvas__logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
              </div>
              <div className="tpoffcanvas-social">
                <div className="tpcanvas-wrapper">
                  <div className="mobile-menu" />
                  <div className="tpoffcanvas__content">
                    <span>Ready to work with us?</span>
                    <a href="mailto:Edeningmail@gmail.com">insurea@gmail.com</a>
                    <p className="d-none d-lg-block">Eidan theme comes with everything you need to create the perfect website for all your business
                      endeavors.</p>
                  </div>
                </div>
                <div className="tpoffcanvas__social">
                  <h4 className="offcan-social-title">Follow Us</h4>
                  <div className="social-icon">
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                    <a href="#"><i className="fab fa-facebook-square" /></a>
                    <a href="#"><i className="fab fa-dribbble" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body-overlay" />
          {/* tp-offcanvus-area-end */}
        </header>
        <main>
          {/* tp-slider-area-start */}
          <div className="tp-slider-area p-relative">
            <div className="tp-slider-active slider-arrow-style">
              <div className="tp-slider-item slider-height">
                <div className="slider-bg d-flex justify-content-center align-items-center" data-background="assets/img/slider/slider-bg.jpg">
                  <div className="tp-slider-content-box text-center z-index-3">
                    <h2 className="tp-slider-title">
                      Insurance that protect <br /> your family</h2>
                    <p>Only our company gives you aninvestment with your life insurance <br /> policy at no extracost.
                    </p>
                    <a className="tp-btn tp-hover-white" href="about-us.html">Get Started</a>
                    <a className="tp-btn-yellow tp-hover-white" href="contact.html">Contact us today</a>
                  </div>
                </div>
              </div>
              <div className="tp-slider-item slider-height">
                <div className="slider-bg d-flex justify-content-center align-items-center" data-background="assets/img/slider/slider-bg-2.jpg">
                  <div className="tp-slider-content-box text-center z-index-3">
                    <h2 className="tp-slider-title">
                      Insurance that protect <br /> your family</h2>
                    <p>Only our company gives you aninvestment with your life insurance <br /> policy at no extracost.
                    </p>
                    <a className="tp-btn tp-hover-white" href="about-us.html">Get Started</a>
                    <a className="tp-btn-yellow tp-hover-white" href="contact.html">Contact us today</a>
                  </div>
                </div>
              </div>
              <div className="tp-slider-item slider-height">
                <div className="slider-bg d-flex justify-content-center align-items-center" data-background="assets/img/slider/slider-bg-3.jpg">
                  <div className="tp-slider-content-box text-center z-index-3">
                    <h2 className="tp-slider-title">
                      Insurance that protect <br /> your family</h2>
                    <p>Only our company gives you aninvestment with your life insurance <br /> policy at no extracost.
                    </p>
                    <a className="tp-btn tp-hover-white" href="about-us.html">Get Started</a>
                    <a className="tp-btn-yellow tp-hover-white" href="contact.html">Contact us today</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-slider-bottom-shape">
              <img src="assets/img/slider/slider-shape-1.png" alt="" />
            </div>
          </div>
          {/* tp-slider-area-end */}
          {/* tp-brand-area-end */}
          <div className="tp-brand-area pt-130 pb-130">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="tp-brand-title text-center mb-70">
                    <h3 className="tp-brand-title">Trusted by some popular Brand</h3>
                  </div>
                </div>
              </div>
              <div className="tp-brand-slider-active d-flex align-items-center">
                <div className="tp-brand-item">
                  <img src="assets/img/brand/brand-1.png" alt="" />
                </div>
                <div className="tp-brand-item">
                  <img src="assets/img/brand/brand-2.png" alt="" />
                </div>
                <div className="tp-brand-item">
                  <img src="assets/img/brand/brand-1.png" alt="" />
                </div>
                <div className="tp-brand-item">
                  <img src="assets/img/brand/brand-4.png" alt="" />
                </div>
                <div className="tp-brand-item">
                  <img src="assets/img/brand/brand-5.png" alt="" />
                </div>
                <div className="tp-brand-item">
                  <img src="assets/img/brand/brand-6.png" alt="" />
                </div>
                <div className="tp-brand-item">
                  <img src="assets/img/brand/brand-5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* tp-brand-area-end */}
          {/* tp-about-area-start */}
          <div className="tp-about-area pb-130">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-about-thumb">
                    <img src="assets/img/about/about-big-1.png" alt="" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-about-section-box mb-40">
                    <h4 className="tp-section-subtitle">About us</h4>
                    <h3 className="tp-section-title pb-20">Change the way but <span><br /> life Insurance</span></h3>
                    <p className="paragraph-one">Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
                      claritatem insitamconse
                      quat.Exerci tation ullamcorper suscipit loborti excommodo habent claritatem insitamconse
                      quat.Exerci tationlobortis nisl aliquip ex ea commodo
                      n ullamcorper suscipit loborti excommodo</p>
                    <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse
                      quat.Exerci tation ullamcorper suscipit loborti </p>
                  </div>
                  <div className="tp-about-button-box d-flex align-items-center">
                    <a className="tp-btn tp-ab-button-one" href="about-us.html">About us</a>
                    <a className="tp-ab-play-button popup-video" href="https://www.youtube.com/watch?v=PfPP5ac_aQo"><i className="fas fa-play" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tp-about-area-end */}
          {/* tp-service-area-start */}
          <div className="tp-service-area black-bg pt-200 pb-200 z-index p-relative">
            <div className="tp-service-shape-1">
              <img src="assets/img/slider/02_Shape.png" alt="" />
            </div>
            <div className="tp-service-shape-2">
              <img src="assets/img/slider/03_Shape.png" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="tp-service-section text-center mb-60">
                    <h4 className="tp-section-subtitle">Our Services</h4>
                    <h3 className="tp-section-title text-white">Types of instive <span>insurance</span></h3>
                  </div>
                </div>
              </div>
              <div className="row gx-20">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tpservice mb-20 tp-sv-color-1">
                    <div className="tpservice__icon">
                      <a href="#"><i className="flaticon-protection" /></a>
                    </div>
                    <div className="tpservice__title">
                      <h4 className="tp-sv-title"><a href="service-details.html">Car Insurance </a></h4>
                    </div>
                    <div className="tpservice__circle">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tpservice mb-20 tp-sv-color-2">
                    <div className="tpservice__icon tpservice__icon-2">
                      <a href="#"><i className="flaticon-health-insurance" /></a>
                    </div>
                    <div className="tpservice__title">
                      <h4 className="tp-sv-title"><a href="service-details.html">Health Insurance</a> </h4>
                    </div>
                    <div className="tpservice__circle">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tpservice mb-20 tp-sv-color-3">
                    <div className="tpservice__icon tpservice__icon-3">
                      <a href="#"><i className="flaticon-healthy-life" /></a>
                    </div>
                    <div className="tpservice__title">
                      <h4 className="tp-sv-title"><a href="service-details.html">Life Insurance</a> </h4>
                    </div>
                    <div className="tpservice__circle">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tpservice mb-20 tp-sv-color-4">
                    <div className="tpservice__icon tpservice__icon-4">
                      <a href="#"><i className="flaticon-property" /></a>
                    </div>
                    <div className="tpservice__title">
                      <h4 className="tp-sv-title"><a href="service-details.html">Home Insurance</a> </h4>
                    </div>
                    <div className="tpservice__circle">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tpservice mb-20 tp-sv-color-5">
                    <div className="tpservice__icon tpservice__icon-5">
                      <a href="#"><i className="flaticon-insurance" /></a>
                    </div>
                    <div className="tpservice__title">
                      <h4 className="tp-sv-title"><a href="service-details.html">Old Insurance</a> </h4>
                    </div>
                    <div className="tpservice__circle">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tpservice mb-20 tp-sv-color-6">
                    <div className="tpservice__icon tpservice__icon-6">
                      <a href="#"><i className="flaticon-study" /></a>
                    </div>
                    <div className="tpservice__title">
                      <h4 className="tp-sv-title"><a href="service-details.html">Education Insurance </a></h4>
                    </div>
                    <div className="tpservice__circle">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tpservice mb-20 tp-sv-color-2">
                    <div className="tpservice__icon tpservice__icon-2">
                      <a href="#"><i className="flaticon-risk-management" /></a>
                    </div>
                    <div className="tpservice__title">
                      <h4 className="tp-sv-title"><a href="service-details.html">Child Insurance </a></h4>
                    </div>
                    <div className="tpservice__circle">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tpservice mb-20 tp-sv-color-1">
                    <div className="tpservice__icon tpservice__icon-1">
                      <a href="#"><i className="flaticon-family" /></a>
                    </div>
                    <div className="tpservice__title">
                      <h4 className="tp-sv-title"><a href="service-details.html">Wealth Protection</a></h4>
                    </div>
                    <div className="tpservice__circle">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tp-contact-area-start */}
            <div className="tp-contact-area pt-110">
              <div className="container">
                <div className="tp-contact-wrapper-box p-relative fix" data-background="assets/img/contact/contact-shape-2.png">
                  <div className="tp-contact-shape-1">
                    <img src="assets/img/contact/contact-shape-1.png" alt="" />
                  </div>
                  <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-12">
                      <h3 className="tp-contact-title z-index-3 text-xl-start">Want to Contact with us?</h3>
                    </div>
                    <div className="col-xl-7 col-lg-12">
                      <div className="tp-contact-wrapper z-index-3  d-flex justify-content-xl-end">
                        <div className="tp-contact-info">
                          <a className="contact-icon" href="#"><img src="assets/img/svg/header-icon.svg" alt="" /></a>
                          <a className="contact-color-2" href="tel:0091590088"><span>Call us :</span> +00 91 590 088</a>
                        </div>
                        <div className="tp-contact-info">
                          <a className="contact-icon" href="#"><img src="assets/img/svg/header-icon-2.svg" alt="" /></a>
                          <a className="contact-color-1" href="mailto:Info@webmail.com"><span>Mail Us :</span>
                            Info@webmail.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tp-contact-area-end */}
          </div>
          {/* tp-service-area-end */}
          {/* tp-case-area-start */}
          <div className="tp-case-area pt-130 pb-130">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="tp-case-section-box text-center mb-60">
                    <h4 className="tp-section-subtitle">Our Case Studies</h4>
                    <h3 className="tp-section-title">Our recent complate <br /><span>case studies</span></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-case-slider-box">
              <div className="tp-case-slider-active">
                <div className="tpcaseitem mix-blend-mode fix">
                  <div className="tpcaseitem__thumb fix">
                    <img src="assets/img/case/case-1.jpg" alt="" />
                  </div>
                  <div className="tpcaseitem__content">
                    <div className="tpcase-info p-relative">
                      <h4 className="tp-case-title"><a href="portfolio-details.html">Medical Insurance for <br /> Alextina</a> </h4>
                      <div className="tp-case-icon">
                        <a href="portfolio-details.html"><i className="fal fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tpcaseitem mix-blend-mode mt-30">
                  <div className="tpcaseitem__thumb fix">
                    <img src="assets/img/case/case-2.jpg" alt="" />
                  </div>
                  <div className="tpcaseitem__content">
                    <div className="tpcase-info p-relative">
                      <h4 className="tp-case-title"><a href="portfolio-details.html">Medical Insurance for <br /> Alextina</a> </h4>
                      <div className="tp-case-icon">
                        <a href="portfolio-details.html"><i className="fal fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tpcaseitem mix-blend-mode">
                  <div className="tpcaseitem__thumb fix">
                    <img src="assets/img/case/case-3.jpg" alt="" />
                  </div>
                  <div className="tpcaseitem__content">
                    <div className="tpcase-info p-relative">
                      <h4 className="tp-case-title"><a href="portfolio-details.html">Medical Insurance for <br /> Alextina</a> </h4>
                      <div className="tp-case-icon">
                        <a href="portfolio-details.html"><i className="fal fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tpcaseitem mix-blend-mode mt-30">
                  <div className="tpcaseitem__thumb fix">
                    <img src="assets/img/case/case-4.jpg" alt="" />
                  </div>
                  <div className="tpcaseitem__content">
                    <div className="tpcase-info p-relative">
                      <h4 className="tp-case-title"><a href="portfolio-details.html">Medical Insurance for <br /> Alextina</a> </h4>
                      <div className="tp-case-icon">
                        <a href="portfolio-details.html"><i className="fal fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tpcaseitem mix-blend-mode">
                  <div className="tpcaseitem__thumb fix">
                    <img src="assets/img/case/case-5.jpg" alt="" />
                  </div>
                  <div className="tpcaseitem__content">
                    <div className="tpcase-info p-relative">
                      <h4 className="tp-case-title"><a href="portfolio-details.html">Medical Insurance for <br /> Alextina</a> </h4>
                      <div className="tp-case-icon">
                        <a href="portfolio-details.html"><i className="fal fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tpcaseitem mix-blend-mode mt-30">
                  <div className="tpcaseitem__thumb fix">
                    <img src="assets/img/case/case-4.jpg" alt="" />
                  </div>
                  <div className="tpcaseitem__content">
                    <div className="tpcase-info p-relative">
                      <h4 className="tp-case-title"><a href="portfolio-details.html">Medical Insurance for <br /> Alextina</a> </h4>
                      <div className="tp-case-icon">
                        <a href="portfolio-details.html"><i className="fal fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tp-case-area-end */}
          {/* tp-insurance-area-start */}
          <div className="tp-insurance-area pb-130">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-insurance-section-box mb-50">
                    <h3 className="tp-section-title">Get an Insurance Quote <span>to get started!</span></h3>
                  </div>
                  <div className="tp-inurance-tab-section">
                    <nav>
                      <div className="nav tp-Insurance-tab " id="nav-tab" role="tablist">
                        <button className="nav-links active" id="nav-Home-tab" data-bs-toggle="tab" data-bs-target="#Home" type="button" role="tab" aria-controls="nav-Home-tab" aria-selected="true">
                          <span className="tpfeature">                  
                            <span className="tpfeature__item mb-15 d-flex justify-content-between align-items-center">
                              <span className="tpfeature__item-info d-flex align-items-center">
                                <i className="flaticon-property" />
                                <span className="tp-feature-title m-0">Home Insurance</span>
                              </span>
                              <span className="tpfeature__item-icon">
                                <i className="far fa-angle-right" />
                              </span>
                            </span>
                          </span>
                        </button>
                        <button className="nav-links" id="nav-Car-tab" data-bs-toggle="tab" data-bs-target="#Car" type="button" role="tab" aria-controls="nav-Car-tab" aria-selected="true"> 
                          <span className="tpfeature">                  
                            <span className="tpfeature__item mb-15 d-flex justify-content-between align-items-center">
                              <span className="tpfeature__item-info d-flex align-items-center">
                                <i className="flaticon-protection" />
                                <span className="tp-feature-title m-0">Car Insurance</span>
                              </span>
                              <span className="tpfeature__item-icon">
                                <i className="far fa-angle-right" />
                              </span>
                            </span>
                          </span>
                        </button>
                        <button className="nav-links" id="nav-Health-tab" data-bs-toggle="tab" data-bs-target="#Health" type="button" role="tab" aria-controls="nav-Health-tab" aria-selected="true"> 
                          <span className="tpfeature">                  
                            <span className="tpfeature__item mb-15 d-flex justify-content-between align-items-center">
                              <span className="tpfeature__item-info d-flex align-items-center">
                                <i className="flaticon-health-insurance" />
                                <span className="tp-feature-title m-0">Health Insurance</span>
                              </span>
                              <span className="tpfeature__item-icon">
                                <i className="far fa-angle-right" />
                              </span>
                            </span>
                          </span>
                        </button>
                        <button className="nav-links" id="nav-Education-tab" data-bs-toggle="tab" data-bs-target="#Education" type="button" role="tab" aria-controls="nav-Education-tab" aria-selected="true"> 
                          <span className="tpfeature">                  
                            <span className="tpfeature__item mb-15 d-flex justify-content-between align-items-center">
                              <span className="tpfeature__item-info d-flex align-items-center">
                                <i className="flaticon-study" />
                                <span className="tp-feature-title m-0">Education Insurance</span>
                              </span>
                              <span className="tpfeature__item-icon">
                                <i className="far fa-angle-right" />
                              </span>
                            </span>
                          </span>
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="Home" role="tabpanel" aria-labelledby="nav-Home-tab" tabIndex={0}>
                      <div className="tp-contact-form-wrapper">
                        <div className="contact-section-title-box">
                          <h4 className="tp-contact-sm-title">Home Insurance</h4>
                        </div>
                        <div className="contactform">
                          <form action="#">
                            <div className="contactform__input">
                              <input type="text" placeholder="Enter Name" />
                            </div>
                            <div className="contactform__input">
                              <input type="text" placeholder="Enter Mail" />
                            </div>
                            <div className="contactform__select">
                              <div className="tp-sp-icon">
                                <select>
                                  <option>Property Type</option>
                                  <option>Home Insurance</option>
                                  <option>Car Insurance</option>
                                  <option>Health Insurance</option>
                                </select>
                              </div>
                            </div>
                            <div className="contactform__textarea">
                              <textarea placeholder="Enter Message" defaultValue={""} />
                            </div>
                            <div className="contactform__button">
                              <button type="submit" className="tp-btn-yellow-similar w-100">Get a quote now</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="Car" role="tabpanel" aria-labelledby="nav-Car-tab" tabIndex={0}>
                      <div className="tp-contact-form-wrapper">
                        <div className="contact-section-title-box">
                          <h4 className="tp-contact-sm-title">Car Insurance</h4>
                        </div>
                        <div className="contactform">
                          <form action="#">
                            <div className="contactform__input">
                              <input type="text" placeholder="Enter Name" />
                            </div>
                            <div className="contactform__input">
                              <input type="text" placeholder="Enter Mail" />
                            </div>
                            <div className="contactform__select">
                              <div className="tp-sp-icon">
                                <select>
                                  <option>Property Type</option>
                                  <option>Home Insurance</option>
                                  <option>Car Insurance</option>
                                  <option>Health Insurance</option>
                                </select>
                              </div>
                            </div>
                            <div className="contactform__textarea">
                              <textarea placeholder="Enter Message" defaultValue={""} />
                            </div>
                            <div className="contactform__button">
                              <button type="submit" className="tp-btn-yellow-similar w-100">Get a quote now</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="Health" role="tabpanel" aria-labelledby="nav-Health-tab" tabIndex={0}>
                      <div className="tp-contact-form-wrapper">
                        <div className="contact-section-title-box">
                          <h4 className="tp-contact-sm-title">Health Insurance</h4>
                        </div>
                        <div className="contactform">
                          <form action="#">
                            <div className="contactform__input">
                              <input type="text" placeholder="Enter Name" />
                            </div>
                            <div className="contactform__input">
                              <input type="text" placeholder="Enter Mail" />
                            </div>
                            <div className="contactform__select">
                              <div className="tp-sp-icon">
                                <select>
                                  <option>Property Type</option>
                                  <option>Home Insurance</option>
                                  <option>Car Insurance</option>
                                  <option>Health Insurance</option>
                                </select>
                              </div>
                            </div>
                            <div className="contactform__textarea">
                              <textarea placeholder="Enter Message" defaultValue={""} />
                            </div>
                            <div className="contactform__button">
                              <button type="submit" className="tp-btn-yellow-similar w-100">Get a quote now</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="Education" role="tabpanel" aria-labelledby="nav-Education-tab" tabIndex={0}>
                      <div className="tp-contact-form-wrapper">
                        <div className="contact-section-title-box">
                          <h4 className="tp-contact-sm-title">Education Insurance</h4>
                        </div>
                        <div className="contactform">
                          <form action="#">
                            <div className="contactform__input">
                              <input type="text" placeholder="Enter Name" />
                            </div>
                            <div className="contactform__input">
                              <input type="text" placeholder="Enter Mail" />
                            </div>
                            <div className="contactform__select">
                              <div className="tp-sp-icon">
                                <select>
                                  <option>Property Type</option>
                                  <option>Home Insurance</option>
                                  <option>Car Insurance</option>
                                  <option>Health Insurance</option>
                                </select>
                              </div>
                            </div>
                            <div className="contactform__textarea">
                              <textarea placeholder="Enter Message" defaultValue={""} />
                            </div>
                            <div className="contactform__button">
                              <button type="submit" className="tp-btn-yellow-similar w-100">Get a quote now</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tp-insurance-area-end */}
          {/* tp-testimonial-area-start */}
          <div className="tp-testimonial-area black-bg pt-200 pb-200 p-relative">
            <div className="tp-service-shape-1">
              <img src="assets/img/slider/02_Shape.png" alt="" />
            </div>
            <div className="tp-service-shape-2">
              <img src="assets/img/slider/03_Shape.png" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-testimonial-section-box text-center mb-60">
                    <h4 className="tp-section-subtitle">Our Client Feedback</h4>
                    <h3 className="tp-section-title text-white">Client’s give us many <br /> <span>reviews for us.</span></h3>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider-active">
                <div className="tptestimonial">
                  <div className="tptestimonial__rating">
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <p>Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...
                      experience with him</p>
                  </div>
                  <div className="tptestimonial__info d-flex justify-content-between align-items-center">
                    <div className="tptestimonial__icon d-flex align-items-center">
                      <img className="mr-25" src="assets/img/testimonial/testi-1.png" alt="" />
                      <div className="tptestimonial__title">
                        <h4 className="tp-testi-heading">Esther Howard</h4>
                        <span>P. Desiger of (Amazon)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tptestimonial">
                  <div className="tptestimonial__rating">
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <p>Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...
                      experience with him</p>
                  </div>
                  <div className="tptestimonial__info d-flex justify-content-between align-items-center">
                    <div className="tptestimonial__icon d-flex align-items-center">
                      <img className="mr-25" src="assets/img/testimonial/testi-2.png" alt="" />
                      <div className="tptestimonial__title">
                        <h4 className="tp-testi-heading">Esther Howard</h4>
                        <span>P. Desiger of (Amazon)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tptestimonial">
                  <div className="tptestimonial__rating">
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <p>Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...
                      experience with him</p>
                  </div>
                  <div className="tptestimonial__info d-flex justify-content-between align-items-center">
                    <div className="tptestimonial__icon d-flex align-items-center">
                      <img className="mr-25" src="assets/img/testimonial/testi-3.png" alt="" />
                      <div className="tptestimonial__title">
                        <h4 className="tp-testi-heading">Esther Howard</h4>
                        <span>P. Desiger of (Amazon)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tptestimonial">
                  <div className="tptestimonial__rating">
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <p>Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...
                      experience with him</p>
                  </div>
                  <div className="tptestimonial__info d-flex justify-content-between align-items-center">
                    <div className="tptestimonial__icon d-flex align-items-center">
                      <img className="mr-25" src="assets/img/testimonial/testi-3.png" alt="" />
                      <div className="tptestimonial__title">
                        <h4 className="tp-testi-heading">Esther Howard</h4>
                        <span>P. Desiger of (Amazon)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tp-testimonial-area-end */}
          {/* tp-blog-area-start */}
          <div className="tp-blog-area pt-130 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="tp-blog-wrapper d-flex justify-content-between align-items-end mb-40">
                    <div className="tpblog-section-title-box">
                      <h4 className="tp-section-subtitle">Our Blog &amp; Article</h4>
                      <h3 className="tp-section-title">We are very happy <br /> <span>to share news</span></h3> 
                    </div>
                    <div className="tp-blog-button">
                      <a className="tp-btn" href="blog-details.html">See More Blog</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="tpblogitem mix-blend-mode mb-30">
                    <div className="tpblogitem__thumb fix">
                      <a href="blog-details.html"><img src="assets/img/blog/blog-1.jpg" alt="" /></a>
                    </div>
                    <div className="tpblogitem__tag">
                      <a className="tp-btn-grey" href="blog-details.html">Business</a>
                    </div>
                    <div className="tpblogitem__content">
                      <h3 className="tp-blog-title"><a href="blog-details.html">Strategy for Norway’s Peion to Fund <br /> Global.of the best town.</a></h3>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum The man, </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tpblogitem mix-blend-mode mb-30">
                    <div className="tpblogitem__thumb fix">
                      <a href="blog-details.html"><img src="assets/img/blog/blog-2.jpg" alt="" /></a>
                    </div>
                    <div className="tpblogitem__tag">
                      <a className="tp-btn-grey" href="blog-details.html">Insurance</a>
                    </div>
                    <div className="tpblogitem__content">
                      <h3 className="tp-blog-title"><a href="blog-details.html">Long established fact that a reader than <br /> trust a insurance company</a></h3>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum The man, </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tp-blog-area-end */}
          {/* tp-cta-area-start */}
          <div className="tp-cta-area pb-130">
            <div className="container">
              <div className="tp-cta-bg" data-background="assets/img/cta/Cta-bg.jpg" >
                <div className="tp-cta-wrapper z-index-4 d-flex justify-content-between align-items-center">
                  <div className="tp-cta-content">
                    <h4 className="tp-cta-title">Start or Track a Claim</h4>
                  </div>
                  <div className="tp-cta-button">
                    <a className="tp-btn tp-hover-white" href="contact.html">File a claim</a>
                    <a className="tp-btn-yellow tp-hover-white ml-20" href="contact.html">Track a claim</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tp-cta-area-end */}
        </main>
        <footer>
          {/* tp-footer-area-start */}
          <div className="tp-footer-area pt-200 black-bg p-relative">
            <div className="tp-footer-shape-1">
              <img src="assets/img/slider/06_Shape.png" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tpfooter d-flex justify-content-between align-items-center">
                    <div className="tpfooter__logo">
                      <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                    </div>
                    <div className="tpfooter__social">
                      <a href="#"><i className="fab fa-facebook-f" /></a>
                      <a href="#"><i className="fab fa-twitter" /></a>
                      <a href="#"><i className="fab fa-behance" /></a>
                      <a href="#"><i className="fab fa-youtube" /></a>
                      <a href="#"><i className="fab fa-linkedin" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-widget-space">
                <div className="row">
                  <div className="col-lg-2 col-md-4">
                    <div className="tp-footer-widget mb-30">
                      <div className="tp-footer-widget__title">
                        <h4 className="tp-footer-title">Our Company</h4>
                      </div>
                      <div className="tp-footer-widget__list">
                        <ul>
                          <li><a href="#">Our Story</a></li>
                          <li><a href="blog-details.html">News &amp; Blog</a></li>
                          <li><a href="#">Careers</a></li>
                          <li><a href="contact.html">Customer Support</a></li>
                          <li><a href="contact.html">Contact Us</a></li>
                          <li><a href="#">Website Accessibility</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4">
                    <div className="tp-footer-widget footer-space-2 mb-30">
                      <div className="tp-footer-widget__title">
                        <h4 className="tp-footer-title">Our Offer</h4>
                      </div>
                      <div className="tp-footer-widget__list">                             
                        <ul>
                          <li><a href="#">Auto Insurance</a></li>
                          <li><a href="#">Home Insurance</a></li>
                          <li><a href="#">Claims</a></li>
                          <li><a href="#">Agent Locator</a></li>
                          <li><a href="#">Express Access</a></li>
                          <li><a href="#">Money Back Policy</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="tp-footer-widget footer-space-3 mb-30">
                      <div className="tp-footer-widget__title">
                        <h4 className="tp-footer-title">COntact info</h4>
                      </div>
                      <div className="tp-footer-widget__list">                            
                        <ul>
                          <li><a href="#">Ta-134/A, Gulshan Badda</a></li>
                          <li><a href="tel:15569569365">(+880)155 69569 365</a></li>
                          <li><a href="mailto:support@theme_pure.com">support@theme_pure.com</a></li>
                          <li><a href="#">Office Hours: 8AM - 11PM</a></li>
                          <li><a href="#">Sunday - Wekend Day</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <div className="tp-footer-widget footer-space-4 mb-30">
                      <div className="tp-footer-widget__title">
                        <h4 className="tp-footer-title">News Latter</h4>
                      </div>
                      <div className="tp-footer-widget__input p-relative">
                        <form action="#">
                          <input type="email" placeholder="Enter mail" />
                          <button className="tp-btn-sm" type="submit">Subscribe</button>
                        </form>                            
                      </div>
                      <div className="tp-footer-widget__check-box">
                        <form action="#">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                              I agree that my submitted data is being collected and stored.
                            </label>
                          </div>
                        </form>                            
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-copyright-area black-bg pt-25 pb-60">
            <div className="container">
              <div className="col-xl-12">
                <div className="tp-copyright-wrapper d-flex justify-content-between">
                  <div className="tp-copyright-left">
                    <span>© 2022 Insurance website. All Rights Reserved.</span>
                  </div>
                  <div className="tp-copyright-right">
                    <button className="scroll-top scroll-to-target" data-target="html">
                      Scroll Top <i className="fal fa-arrow-up" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tp-footer-area-end */}
        </footer>

        <script src="assets/js/jquery.js"></script>
        <script src="assets/js/waypoints.js"></script>
        <script src="assets/js/bootstrap.bundle.min.js"></script>
        <script src="assets/js/swiper-bundle.js"></script>
        <script src="assets/js/slick.js"></script>
        <script src="assets/js/magnific-popup.js"></script>
        <script src="assets/js/counterup.js"></script>
        <script src="assets/js/wow.js"></script>
        <script src="assets/js/nice-select.js"></script>
        <script src="assets/js/meanmenu.js"></script>
        <script src="assets/js/isotope-pkgd.js"></script>
        <script src="assets/js/imagesloaded-pkgd.js"></script>
        <script src="assets/js/ajax-form.js"></script>
        <script src="assets/js/main.js"></script>

</>
  )
}

export default App
