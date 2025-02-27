
import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLinks?: string[];
  liveLink?: string;
}

const projectsData: Project[] = [
  {
    title: "Muffins or Dogs",
    description: "A full-stack web application built using React, Node.js and uses Flask for backend. It is deployed to fly.io, might take time to connect because of the free plan of the system. Contains computer vision model in the backend that predicts if the picture uploaded is of a muffin or a dog",
    technologies: ["React", "Node.js", "Flask", "Jupyter-notebook"],
    githubLinks: ["https://github.com/heinohen/muffindogs"],
    liveLink: "https://muffindogs.fly.dev/"
  },
  {
    title: "Customer project (ongoing)",
    description: "Capstone project for a logistics company to more accurately calculate freight costs. Project is ongoing, started January 2025. I act as a vice project leader for the project. No links available to public as it is for a customer.",
    technologies: ["React", "Node.js","Flask", "Jupyter-notebook","Python"],
    githubLinks: ["https://github.com/heinohen/"],
  },
  {
    title: "Worked exercises on NLP courses from UTU (ongoing)",
    description: "My work done on weekly coding exercises for the courses: Introduction to human language technology, Deep learning in human language technology and textual data-analysis",
    technologies: ["Python", "Google colab", "Jupyter-notebook", "Hugging Face"],
    githubLinks: ["https://github.com/heinohen/tko_7095_i2hlt","https://github.com/heinohen/TKO_8965_deep_learning_HLT", "https://github.com/heinohen/Textual-Data-Analysis"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{`Project ${index + 1}: `}{project.title}</h3>
            <ul>
              <li><strong>Description:</strong>{project.description}</li>
              <li><strong>Technologies:</strong> {project.technologies.join(", ")}</li>
              <li><strong>Links</strong>:
                <ul>
                <li>{project.githubLinks && (
                    <div>
                      {(project.githubLinks || []).map((link, i) => (
                        <span key={i}>
                          <a href={link} target="_blank" rel="noopener noreferrer">GitHub {i + 1}</a>{i < (project.githubLinks || []).length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                  )}</li>
                  <li>{project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>)}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
