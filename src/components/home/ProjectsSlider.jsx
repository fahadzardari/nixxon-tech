import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import ProjectImage from "../../assets/home/projects/project1.svg";

// Import Swiper styles (still needed for functionality)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectsSlider = ({ projects = [] }) => {
  // Sample projects data if not provided as props
  const defaultProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
      image: ProjectImage,
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
      image: "/images/projects/banking.jpg",
      technologies: ["React Native", "Firebase", "Redux"],
    },
    {
      id: 3,
      title: "AI Content Generator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
      image: "/images/projects/ai-generator.jpg",
      technologies: ["Python", "TensorFlow", "AWS"],
    },
    {
      id: 4,
      title: "AI Content Generator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
      image: "/images/projects/ai-generator.jpg",
      technologies: ["Python", "TensorFlow", "AWS"],
    },
    {
      id: 4,
      title: "AI Content Generator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
      image: "/images/projects/ai-generator.jpg",
      technologies: ["Python", "TensorFlow", "AWS"],
    },
    {
      id: 4,
      title: "AI Content Generator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
      image: "/images/projects/ai-generator.jpg",
      technologies: ["Python", "TensorFlow", "AWS"],
    },
    {
      id: 4,
      title: "AI Content Generator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
      image: "/images/projects/ai-generator.jpg",
      technologies: ["Python", "TensorFlow", "AWS"],
    },
  ];

  const displayedProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <div className="app-max-width w-full mx-auto py-8 px-4 lg:px-4">
      <div className="relative">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
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
              slidesPerView: 4,
            },
          }}
          // className="pb-14" // Add padding bottom for pagination
        >
          {displayedProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="h-[420px] flex flex-col bg-white overflow-hidden ">
      <div className="w-full">
        <img
          src={ProjectImage.src}
          alt={project.title}
          className=" h-56 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-grow py-10 md:py-6">
        <h3 className="text-lg md:text-xl canvas:text-2xl mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-2 lg:mb-4 text-[10px] md:text-xs canvas:text-sm 2xl:text-base line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectsSlider;
