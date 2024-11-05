import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const BannerSection7 = () => {
  return (
    <section className="fz-6-banner fz-7-banner">
      <Swiper
        className="fz-7-banner-slider owl-carousel"
        slidesPerView={1}
        loop={true}
        autoplay={true}
        modules={[Autoplay]}
      >
        <SwiperSlide className="fz-6-banner-slide fz-7-banner-slide bg-default">
          <div className="container">
            <div className="row justify-content-center g-5">
              <div className="col-lg-6 col-md-8">
                <div className="fz-6-banner-txt">
                  <h1 className="fz-6-banner-title">Smart Digital Watch</h1>
                  <a href="#" className="fz-6-banner-btn fz-6-sub-banner-btn">
                    Shop Now
                  </a>
                </div>
              </div>

              <div className="col-lg-6 text-end">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-csBzUMC1AAJ13TefSIetzaAOF5qpyLSgA&s"
                  alt="product image"
                  className="fz-7-banner-img"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="fz-6-banner-slide fz-7-banner-slide bg-default">
          <div className="container">
            <div className="row justify-content-center g-5">
              <div className="col-lg-6 col-md-8">
                <div className="fz-6-banner-txt">
                  <h1 className="fz-6-banner-title">Smart Digital Watch</h1>
                  <a href="#" className="fz-6-banner-btn fz-6-sub-banner-btn">
                    Shop Now
                  </a>
                </div>
              </div>

              <div className="col-lg-6 text-end">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="product image"
                  className="fz-7-banner-img"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="fz-6-banner-slide fz-7-banner-slide bg-default">
          <div className="container">
            <div className="row justify-content-center g-5">
              <div className="col-lg-6 col-md-8">
                <div className="fz-6-banner-txt">
                  <h1 className="fz-6-banner-title">Smart Digital Watch</h1>
                  <a href="#" className="fz-6-banner-btn fz-6-sub-banner-btn">
                    Shop Now
                  </a>
                </div>
              </div>

              <div className="col-lg-6 text-end">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavs4dfsIgyhVV2TNFcVrLGT5gUmjQ3Hmn-A&s"
                  alt="product image"
                  className="fz-7-banner-img"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="container fz-7-banner-socials-container">
        <div className="fz-6-banner-socials">
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
          <h6>Follow us</h6>
        </div>
      </div>
    </section>
  );
};

export default BannerSection7;
