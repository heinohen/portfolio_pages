import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const projectsData = [
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
        technologies: ["React", "Node.js", "Flask", "Jupyter-notebook", "Python"],
        githubLinks: ["https://github.com/heinohen/"],
    },
    {
        title: "Worked exercises on NLP courses from UTU (ongoing)",
        description: "My work done on weekly coding exercises for the courses: Introduction to human language technology, Deep learning in human language technology and textual data-analysis",
        technologies: ["Python", "Google colab", "Jupyter-notebook", "Hugging Face"],
        githubLinks: ["https://github.com/heinohen/tko_7095_i2hlt", "https://github.com/heinohen/TKO_8965_deep_learning_HLT", "https://github.com/heinohen/Textual-Data-Analysis"],
    },
];
const Projects = () => {
    return (_jsxs("section", { id: "projects", className: "section", children: [_jsx("h2", { children: "Projects" }), _jsx("div", { className: "projects-container", children: projectsData.map((project, index) => (_jsxs("div", { className: "project-card", children: [_jsxs("h3", { children: [`Project ${index + 1}: `, project.title] }), _jsxs("ul", { children: [_jsxs("li", { children: [_jsx("strong", { children: "Description:" }), project.description] }), _jsxs("li", { children: [_jsx("strong", { children: "Technologies:" }), " ", project.technologies.join(", ")] }), _jsxs("li", { children: [_jsx("strong", { children: "Links" }), ":", _jsxs("ul", { children: [_jsx("li", { children: project.githubLinks && (_jsx("div", { children: (project.githubLinks || []).map((link, i) => (_jsxs("span", { children: [_jsxs("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: ["GitHub ", i + 1] }), i < (project.githubLinks || []).length - 1 && ', '] }, i))) })) }), _jsx("li", { children: project.liveLink && (_jsx("a", { href: project.liveLink, target: "_blank", rel: "noopener noreferrer", children: "Live Demo" })) })] })] })] })] }, index))) })] }));
};
export default Projects;
