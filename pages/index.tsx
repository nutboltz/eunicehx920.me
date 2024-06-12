import React from "react";
import { SocialLink } from "components/SocialLink";
import Image from "next/image";
import { SOCIALS } from "@/data/socials";

export default function GetStartedPage() {
  return (
    <>
      <section className="mb-5 ">
        <Image
          src={"/images/profilePic.jpg"}
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full cursor-pointer hover:grayscale mb-5"
        />
        <h1 className="text-2xl font-bold">Eunice Tan</h1>

        <div className="text-gray-700 dark:text-gray-300">
          <p className="mt-4">
            I&apos;m a fullstack product engineer with experience building 0-1
            products. I like building things that I believe are useful or
            interesting.
          </p>
          <p className="mt-4 mb-4">
            I have experience building and shipping end-to-end products in
            Fin-tech, SaaS and Consumer domains. I also have roots in Data
            Engineering and Data Infrastructure so whenever I&apos;m not
            building for a quick product iteration I do enjoy thinking about
            scalable systems and watching pipeline observability shine green.
            Currently, I&apos;m building AI solutions at &nbsp;
            <a
              href="https://www.joincape.ai/"
              target="_blank"
              className="border-b inline-block"
            >
              Cape
            </a>
            .
          </p>

          <p className="mt-4 mb-4">
            Personal interests include Food 🍣, &nbsp;Tea 🍵, &nbsp;Video Games
            🎮 and Virtual Reality / Mixed Reality 🥽.
            <span>
              {" "}
              Lately I&apos;ve been dabbling a little into plants 🌱 as well.
            </span>
          </p>

          <p className="mb-4">
            Feel free to hit me up me at&nbsp;
            <span className="font-semibold">eunicehx920@gmail.com</span>
            &nbsp;or reach out on any of my social handles.
          </p>
        </div>

        <div className="flex space-x-4 mb-2 mt-6">
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.label}
              aria-label={`Follow on ${social.label}`}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
      </section>

      <div className="my-8 w-full border-t border-gray-200 dark:border-gray-800" />
    </>
  );
}
