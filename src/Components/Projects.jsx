import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import PNavbar from "./PNavbar";
import ScrollToTopButton from "./ScrollTopButton";
import { EllipsisVertical, Github } from "lucide-react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false); // State for scroll-to-top button
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const [selectedImage, setSelectedImage] = useState(null); //image zoom in/out
  //   const git = <Github />
  //   const git2 = <Github />

  // // Fetch projects
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://personal-backend-nine.vercel.app/api/projects") // api url
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Reverse the order of projects (reverse the array)
  //       const reversedProjects = data.reverse();
  //       setProjects(reversedProjects);
  //       setError(null); // Clear error state if successful
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching projects:", error);
  //       setError("Failed to load projects. Please try again later.");
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  //   useEffect(() => {
  //     setLoading(true);
  //     axios
  //       .get("https://personal-backend-nine.vercel.app/api/projects")
  //       .then((response) => {
  //         const reversedProjects = response.data.reverse();
  //         setProjects(reversedProjects);
  //         setError(null);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching projects:", error);
  //         const errorMessage =
  //           error.response?.data?.message ||
  //           error.message ||
  //           "Failed to load projects, try again later";
  //         toast.error(errorMessage);
  //         setError(errorMessage);
  //       })
  //       .finally(() => setLoading(false));
  //   }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get(
          "https://personal-backend-nine.vercel.app/api/projects"
        );
        setProjects(data.reverse());
        setError(null);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Failed to load projects";
        console.error("Fetch error:", errorMessage);
        toast.error(errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Scroll to a specific project
  const scrollToProject = (id) => {
    const projectElement = document.getElementById(id);
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: "smooth" });
      setShowDropdown(false); // Close dropdown after navigation
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-3 justify-center items-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        <p className="text-lg">Loading.....</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-50 text-red-500">{error}</div>;
  }

  // Check if the project has features or not
  const hasFeatures = projects.features && projects.features.length > 0;

  return (
    <div className="">
      <PNavbar />
      <div className="min-h-screen w-full md:w-[80%] mx-auto items-center justify-center py-12 px-4 overflow-x-hidden ">
        {/* Floating Scroll-to-Top Button */}
        <ScrollToTopButton />

        {/* Floating Sticky Navigation Button with Dropdown */}
        <div className="fixed top-1/2 left-8 hidden md:block z-10">
          <button
            onClick={toggleDropdown}
            className="p-2 backdrop-blur-md rounded-sm bg-neutral-700  text-white border-green-500 border hover:scale-105 hover:text-green-500 active:scale-90 duration-300  cursor-pointer transition-all"
          >
            Navigation
          </button>
          {showDropdown && (
            <div className="mt-2 rounded-lg shadow-lg  overflow-hidden w-max z-20 backdrop-blur-md bg-neutral-700/30 max-h-60 overflow-y-auto">
              {projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => scrollToProject(`project-${index}`)}
                  className="px-4 py-2 cursor-pointer hover:text-green-400 duration-300 transition-all"
                >
                  {project.title}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Projects Section */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 2 }}
          className="my-16 text-center text-4xl font-bold"
          id="projects"
        >
          Projects
        </motion.h2>
        <div className="max-w-5xl mx-auto w-full ">
          {projects.map((project, index) => (
            <div
              className="mb-10 flex flex-col lg:flex-row items-center border-b border-neutral-800 p-2 sm:border-hidden lg:items-start gap-6"
              key={index}
              id={`project-${index}`} // Unique ID for each project
            >
              {/* Project Image */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 2 }}
                className="flex-shrink-0 max-w-[300px] lg:w-1/3"
              >
                <div className="">
                  <img
                    src={project.image}
                    alt=""
                    key={index}
                    className="h-auto rounded-lg shadow-lg cursor-zoom-in"
                    onClick={() => {
                      setSelectedImage(project.image);
                    }}
                    title="click for full image"
                  />

                  {selectedImage && (
                    <div
                      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                      onClick={() => {
                        setSelectedImage(null);
                      }}
                    >
                      <div className="relative">
                        <img
                          src={selectedImage}
                          alt=""
                          className="max-w-full max-h-[90vh] rounded-2xl cursor-zoom-out"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 2 }}
                className="lg:w-2/3 "
              >
                <h6 className="mb-3 font-semibold text-xl">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubrepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:scale-105  duration-300 transition ease-in-out flex items-center gap-1"
                      title={project.title.length > 30 ? project.title : ""}
                    >
                      {project.title.length > 30
                        ? project.title.slice(0, 25) + "..."
                        : project.title}
                      <Github />
                    </a>

                    <span className="">
                      <EllipsisVertical />
                    </span>

                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:scale-105 duration-300 transition ease-in-out"
                    >
                      Live Demo🚀
                    </a>
                  </div>
                </h6>

                <p className="mb-4  text-justify">{project.description}</p>

                <div>
                  {hasFeatures && (
                    <p className="mb-2 text-neutral-700 text-justify">
                      <strong>Features:</strong> {project.features.join(", ")}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 p-1">
                  {" "}
                  {/* Added p-1 to match the gap */}
                  {project.technologies
                    .flatMap((tech) => tech.split(","))
                    .map((tech, index) => (
                      <span
                        className="inline-block rounded bg-gray-700 px-4 py-0.5 text-sm font-medium text-rose-400"
                        key={index}
                      >
                        {tech.trim()}
                      </span>
                    ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Projects;
