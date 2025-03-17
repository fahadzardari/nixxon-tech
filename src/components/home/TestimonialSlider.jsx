import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import Avatar from "../../assets/home/testimonials/avatar1.png";
import Avatar2 from "../../assets/home/testimonials/avatar2.png";
import Star from "../../assets/home/testimonials/star.svg";

// Import Swiper styles (still needed for functionality)
import "swiper/css";
import "swiper/css/navigation";

const TestimonialSlider = ({ testimonials = [] }) => {
  // Sample testimonials data if not provided as props
  const defaultTestimonials = [
    {
      id: 1,
      quote:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Tamzyn French",
      company: "Agency Design",
      avatar: Avatar,
    },
    {
      id: 2,
      quote:
        "The team delivered exceptional results that exceeded our expectations. Their attention to detail and creative approach made all the difference.",
      name: "Michael Chen",
      company: "Tech Solutions Inc.",
      avatar: Avatar2,
    },
    {
      id: 3,
      quote:
        "Working with this team was a game-changer for our business. They understood our vision perfectly and brought it to life.",
      name: "Sarah Johnson",
      company: "Growth Marketing",
      avatar: Avatar,
    },
    {
      id: 4,
      quote:
        "Professional, responsive, and incredibly talented. They transformed our digital presence and helped us reach new customers.",
      name: "David Miller",
      company: "Innovative Startup",
      avatar: Avatar2,
    },
  ];

  const displayedTestimonials =
    testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <div className="max-w-[80vw] lg:max-w-[1280px] mx-auto py-8 px-4 lg:px-4">
      <div className="relative">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="px-2 sm:px-0"
        >
          {displayedTestimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="h-[260px] flex flex-col bg-white overflow-hidden md:p-4 md:mx-auto md:max-w-[400px]">
      <div className="flex-grow">
        <div className="mb-4 text-primary-blue flex flex-row space-x-1">
          <img src={Star.src} alt="Star" className="w-4 h-4" />
          <img src={Star.src} alt="Star" className="w-4 h-4" />
          <img src={Star.src} alt="Star" className="w-4 h-4" />
          <img src={Star.src} alt="Star" className="w-4 h-4" />
          <img src={Star.src} alt="Star" className="w-4 h-4" />
        </div>
        <p className="text-black text-base mb-4 line-clamp-4">
          {testimonial.quote}
        </p>
      </div>
      <div className="mt-auto flex items-center text-black">
        <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
          {testimonial.avatar && (
            <img
              src={testimonial.avatar.src}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="ml-3">
          <h4 className="text-base font-medium">{testimonial.name}</h4>
          <p className="text-xs">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
