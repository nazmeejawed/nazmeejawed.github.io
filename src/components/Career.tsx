import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Information Technology Application Developer</h4>
                <h5>JK Cement Ltd</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              April 2026 - June 2026. Internship developing and maintaining enterprise IT applications, optimizing business processes, and building internal tools for operational efficiency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>Cyberzero</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              July 2024 - November 2025. Part-time graphic designer responsible for creating compelling visual content, UI/UX designs, and marketing materials to enhance brand identity.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>Noida International University</h5>
              </div>
              <h3>EDU</h3>
            </div>
            <p>
              Studied Computer Science with a focus on software engineering, algorithms, and full-stack web and mobile application development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
