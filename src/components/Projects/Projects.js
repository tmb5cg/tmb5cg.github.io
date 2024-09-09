import React from "react";
import { projects } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Projects.css";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <>
      <section id="projects" className="projects">
        <h2 className="projects__title">Projects</h2>
        <table className="projects__table">
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td className="">
                  <ProjectContainer project={project} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {/* <section className="section contact center" id="contact"></section> */}
    </>
  );
};

export default Projects;
