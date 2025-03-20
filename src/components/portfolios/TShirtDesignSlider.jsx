import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules"; // Removed Navigation
import Image1 from "../../assets/portfolios/t-shirt-design/1.png";
import Image2 from "../../assets/portfolios/t-shirt-design/2.png";
import Image3 from "../../assets/portfolios/t-shirt-design/3.png";
import Image4 from "../../assets/portfolios/t-shirt-design/4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const TShirtDesignSlider = ({ images = [] }) => {
  const defaultImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image1,
    Image2,
    Image3,
    Image4,
  ];

  const displayedImages = images.length > 0 ? images : defaultImages;

  return (
    <div className="py-12 w-full mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center">T-Shirt Design</h2>
      <p className="text-gray-500 text-center max-w-2xl mx-auto mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>

      {/* Swiper Slider */}
      <div className="relative mt-6">
        <Swiper
          modules={[A11y, Autoplay, Pagination]} // Removed Navigation
          spaceBetween={20}
          pagination={{ clickable: true }} // Ensure pagination is enabled
          // loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          freeMode={true}
          className="pb-10"
        >
          {displayedImages.map((image, index) => (
            <SwiperSlide key={index}>
              {/* <div className="w-full  flex items-center justify-center"> */}
              <img
                src={image.src}
                alt={`Logo ${index + 1}`}
                className="object-cover w-full h-[302px]"
              />
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TShirtDesignSlider;
