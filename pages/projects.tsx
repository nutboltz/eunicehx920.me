import React from "react";
import { useRouter } from "next/router";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function Projects() {

  return (
    <>
      <section>
        <h1 className="mb-4 text-2xl font-bold tracking-tighter">Hackathons</h1>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 "
        >
          {PROJECTS.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </section>
    </>
  );
}
