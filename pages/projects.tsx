import React from "react";
import { useRouter } from "next/router";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import { ProjectCard } from "@/components/ProjectCard";
import { TOOLS, WEB_APPS } from "@/data/projects";
import { SocialLink } from "@/components/SocialLink";

export default function Projects() {
  const router = useRouter();

  return (
    <>
      <section>
        <h1 className="mb-4 text-2xl font-bold tracking-tighter">Web apps</h1>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 "
        >
          {WEB_APPS.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </section>

      <section className="py-10">
        <h1 className="mb-4 text-2xl font-bold tracking-tighter">Tools</h1>

        <div role="list" className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TOOLS.map((project, idx) => (
            <div
              key={idx}
              className="flex cursor-pointer flex-col
          space-y-4
          rounded-xl transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50 p-3"
            >
              <p>{project.title}</p>
              <p className="text-gray-500 dark:text-gray-400">
                {project.description}
              </p>

              <div className="flex space-x-2 self-end">
                <SocialLink
                  href={project.repo}
                  className="h-6 w-6 flex-none"
                  icon={IconBrandGithub}
                />
                <SocialLink
                  href={project.external}
                  className="h-6 w-6 flex-none"
                  icon={IconLink}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
