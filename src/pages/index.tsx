import React from "react";
import { useRouter } from "next/router";
import { SocialLink } from "@/src/components/SocialLink";
import { IconBrandX, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

export const SOCIALS = [
  {
      label: "X",
      href: "",
      icon: IconBrandX
  },
  {
      label: "GitHub",
      href: "",
      icon: IconBrandGithub
  },
  {
      label: "LinkedIn",
      href: "",
      icon: IconBrandLinkedin
  },
]

export default function GetStartedPage() {
  const router = useRouter();


  return <div>
        <h1 className="text-2xl font-bold">Eunice Tan</h1>

        <div className="text-gray-700 dark:text-gray-300">
          <p className="mt-4">
            I&apos;m a fullstack product engineer.
          </p>
        </div>

        <div className="flex space-x-4 mb-2 mt-4">
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.label}
              aria-label={`Follow on ${social.label}`}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
    </div>
}