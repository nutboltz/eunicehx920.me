export type Project = {
  title: string;
  repo?: string;
  description?: string;
};

export type WebAppProject = Project & {
  demo?: string;
  thumbnail: string;
  tags: string[];
};

export type ToolProject = Project & {
  external: string;
  techs: string[];
};
