import React, { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "../assets/styles/Project.scss";

// Import images
import pharma1 from "../assets/images/pharma1.png";
import pharma2 from "../assets/images/pharma2.png";
import tabibi1 from "../assets/images/tabibi1.png";
import tabibi2 from "../assets/images/tabibi2.png";
import marsa1 from "../assets/images/marsa1.png";
import marsa2 from "../assets/images/marsa2.png";
import saph1 from "../assets/images/saph1.png";
import saph2 from "../assets/images/saph2.png";
import saph3 from "../assets/images/saph3.png";
import saph4 from "../assets/images/saph4.png";
import saph5 from "../assets/images/saph5.png";
import saph6 from "../assets/images/saph6.png";
import saph7 from "../assets/images/saph7.png";
import saph8 from "../assets/images/saph8.png";
import saph9 from "../assets/images/saph9.png";
import saph10 from "../assets/images/saph10.png";
import saph12 from "../assets/images/saph12.png";
import correcter1 from "../assets/images/correcter1.png";
import correcter2 from "../assets/images/correcter2.png";
import iot1 from "../assets/images/iot1.png";
import iot2 from "../assets/images/iot2.png";
import iot3 from "../assets/images/iot3.png";
import iot4 from "../assets/images/iot4.png";
import iot5 from "../assets/images/iot5.png";

interface ProjectType {
  title: string;
  description: string;
  images: string[];
  smallImages?: boolean;
}

const projects: ProjectType[] = [
  {
    title:
      "Development of a web application for geospatial visualization and user request analysis (End-of-Studies Internship)",
    description: "Saphir Innovation",
    images: [
      saph1,
      saph2,
      saph3,
      saph4,
      saph5,
      saph6,
      saph7,
      saph8,
      saph9,
      saph10,
      saph12,
    ],
  },
  {
    title: "Development of a web application for expense management (End-of-Studies Internship)",
    description: "Marsa Maroc",
    images: [marsa1, marsa2],
    smallImages: true,
  },
  {
    title: "Development of a web and mobile application 'TABIBI' for emergency management (Final Year Project)",
    description: "Higher School of Technology",
    images: [tabibi1, tabibi2],
  },
  {
    title: "Development of a web application for pharmacy management (Initiation Internship)",
    description: "Pharmacy Achbar",
    images: [pharma1, pharma2],
    smallImages: true,
  },
  {
    title: "Smart irrigation IoT system",
    description:
      "Smart irrigation system using ESP32, DHT11, and soil moisture sensors. Data is sent in real-time via Firebase and displayed in a Flutter mobile app with a chatbot that answers user questions based on environmental data.",
    images: [iot1, iot2, iot3, iot4, iot5],
  },
  {
    title: "Spell checker web application",
    description:
      "Web application for spelling correction developed using Flask (backend) and React.js (frontend). Features real-time text correction for French.",
    images: [correcter1, correcter2],
    smallImages: true,
  },
];

const Project: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentProjectImages, setCurrentProjectImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [useSmallImages, setUseSmallImages] = useState(false);

  useEffect(() => {
    // Hide lightbox loading spinner with CSS
    const style = document.createElement('style');
    style.innerHTML = `
      .ril-loading-circle {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    // Add or remove small image styles based on useSmallImages state
    const smallImageStyle = document.getElementById('small-image-style');
    
    if (isOpen && useSmallImages) {
      if (!smallImageStyle) {
        const style = document.createElement('style');
        style.id = 'small-image-style';
        style.innerHTML = `
          .react-image-lightbox .ril-image-current,
          .react-image-lightbox .ril-image-next,
          .react-image-lightbox .ril-image-prev {
            max-width: 30% !important;
            max-height: 50vh !important;
          }
        `;
        document.head.appendChild(style);
      }
    } else {
      if (smallImageStyle) {
        document.head.removeChild(smallImageStyle);
      }
    }
    
    return () => {
      const style = document.getElementById('small-image-style');
      if (style) {
        document.head.removeChild(style);
      }
    };
  }, [isOpen, useSmallImages]);

  const openLightbox = async (images: string[], smallImages: boolean = false) => {
    setIsLoading(true);
    setUseSmallImages(smallImages);
    
    // Wait for all images to load before opening lightbox
    const loadPromises = images.map((img) => {
      return new Promise<void>((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = () => reject();
        image.src = img;
      });
    });

    try {
      await Promise.all(loadPromises);
      // Small delay to ensure images are in cache
      await new Promise(resolve => setTimeout(resolve, 100));
      setCurrentProjectImages(images);
      setPhotoIndex(0);
      setIsOpen(true);
    } catch (error) {
      console.error("Failed to load images:", error);
      // Still open the lightbox even if some images fail
      setCurrentProjectImages(images);
      setPhotoIndex(0);
      setIsOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project" key={i}>
            <div
              onClick={() => openLightbox(project.images, project.smallImages)}
              style={{ cursor: "pointer", textAlign: "center", position: "relative" }}
            >
              <img src={project.images[0]} alt={project.title} className="slider-image" />
              {isLoading && (
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  fontSize: "18px"
                }}>
                  Loading...
                </div>
              )}
            </div>
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={currentProjectImages[photoIndex]}
          nextSrc={currentProjectImages[(photoIndex + 1) % currentProjectImages.length]}
          prevSrc={currentProjectImages[(photoIndex + currentProjectImages.length - 1) % currentProjectImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + currentProjectImages.length - 1) % currentProjectImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % currentProjectImages.length)
          }
        />
      )}
    </div>
  );
};

export default Project;