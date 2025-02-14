import React from "react";

const projects = [
  { title: "React Portfolio", link: "#", image: "https://source.unsplash.com/random/400x300" },
  { title: "E-Commerce Website", link: "#", image: "https://source.unsplash.com/random/400x301" },
];

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="shadow-lg p-4 rounded-lg">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl mt-2">{project.title}</h3>
            <a href={project.link} className="text-blue-500">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
