import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import ProjectImage from '../../assets/home/projects/project1.svg'; 

// Import Swiper styles (still needed for functionality)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectsSlider = ({ projects = [] }) => {
  // Sample projects data if not provided as props
  const defaultProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      image: ProjectImage,
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure banking application with biometric authentication",
      image: "/images/projects/banking.jpg",
      technologies: ["React Native", "Firebase", "Redux"]
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "ML-powered tool for automated content creation",
      image: "/images/projects/ai-generator.jpg",
      technologies: ["Python", "TensorFlow", "AWS"]
    },
  ];

  const displayedProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <div className="w-full app-max-width mx-auto py-8 px-4">
      
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
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
          className="pb-14" // Add padding bottom for pagination
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
    <div className="">
      <div className="w-full">
        <img 
          src={ProjectImage} 
          alt={project.title} 
          className="w-full h-56 object-cover"
        />
      </div>
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
      </div>
    </div>
  );
}


export default ProjectsSlider;