import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo,  } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Netflix Clone"
          des=" Netflix Clone is an amazing project by me and done individually
                It is about hosting movie posters etc!"
          src={projectOne}
        />
        <ProjectsCard
          title="Education-Website"
          des=" Education website is an amazing project by me it is
                all about showcasting education and information!"
          src={projectTwo}
        />
        
        
        
        
      </div>
    </section>
  );
}

export default Projects