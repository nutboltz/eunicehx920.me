import { Project } from "@/interfaces/projects";

export const PROJECTS: Project[] = [
  {
    title: "Trippin (FEMHack 2024)",
    repo: "https://github.com/nutboltz/tripto",
    external:
      "https://app.pitch.com/app/presentation/85ae2fac-ca2b-4aaf-b52b-7229b07a5387/c29e5781-6280-42ac-b08f-a5afdf72777b",
    demo: "https://passmanager.vercel.app/",
    thumbnail: "/projects/trippin/main.png",
    imageFolder: "/projects/trippin/",
    description:
      "We gather your group's travel inspiration and preferences from your social media platforms to create an optimized group travel itinerary.",
    tags: ["Hackathon", "AI"],
    techs: ["Next.js", "Prisma", "Docker"],
  },
  {
    title: "Astra (HackAIthon 2024 by Craft Ventures)",
    external: "https://youtu.be/_cwOTL23eT0",
    demo: "https://youtu.be/_cwOTL23eT0",
    thumbnail: "/hackathons/HackAIthon2024/hackaithon1.jpeg",
    imageFolder: "/hackathons/HackAIthon2024/",
    description:
      "AI agent that lives in your group chat and automatically handles scheduling restaurant reservations and calendar bookings",
    tags: ["Hackathon", "AI"],
    techs: [
      "Python",
      "Vapi AI",
      "OpenAI",
      "Telegram",
      "Google APIs",
      "playwright",
    ],
  },
];
