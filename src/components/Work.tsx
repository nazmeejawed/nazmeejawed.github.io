import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const boxes = gsap.utils.toArray(".work-box");
    boxes.forEach((box: any) => {
      gsap.from(box, {
        scrollTrigger: {
          trigger: box,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            { 
              name: "Business Website", category: "Full Stack Web App", tools: "Node.js, Express, PostgreSQL, Next.js", image: "/images/project_business.png",
              description: "A comprehensive full-stack web application tailored for businesses. It features a robust backend architecture for seamless data management and a highly responsive, SEO-optimized frontend." 
            },
            { 
              name: "Study Planner App", category: "Cross-platform Mobile", tools: "Flutter, Dart, SQLite, Firebase", image: "/images/project_planner.png",
              description: "An intuitive mobile application designed to help students efficiently organize their academic schedules. It leverages cloud synchronization and local storage to ensure tasks are always accessible."
            },
            { 
              name: "Cement Catalogue", category: "Mobile App", tools: "Flutter, Dart, PDF Viewer", image: "/images/project_cement.png",
              description: "A digital catalogue mobile app built for JK Cement. It provides users with a custom PDF viewing experience and intuitive navigation to seamlessly browse through various cement products on the go."
            },
            { 
              name: "Weather App", category: "Mobile App", tools: "Android Studio, Java/Kotlin, REST API", image: "/images/project_weather.png",
              description: "A native Android application that delivers real-time weather forecasts and updates. It consumes external REST APIs to fetch accurate meteorological data and displays it in a clean, user-friendly UI."
            },
            { 
              name: "WhatsApp Clone", category: "Real-time Mobile App", tools: "Flutter, Firebase, REST APIs", image: "/images/project_chat.png",
              description: "A real-time messaging application mimicking core functionalities of WhatsApp. It utilizes Firebase for instant messaging, secure user authentication, and reliable real-time database management."
            },
            { 
              name: "Note App", category: "Mobile App", tools: "Flutter, Dart, SQLite", image: "/images/project_notes.png",
              description: "A lightweight and efficient note-taking application designed for on-the-go productivity. It relies on a local SQLite database for fast, offline storage, ensuring notes are safely kept on the device."
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <h4 style={{ marginTop: '20px' }}>Description</h4>
                <p style={{ lineHeight: '1.5' }}>{project.description}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
