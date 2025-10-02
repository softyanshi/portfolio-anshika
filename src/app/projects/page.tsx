"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    
    id: 1,
    name: "AI SaaS LMS Application",
    description: `A SaaS Learning Management System allowing users to sign up, subscribe via Stripe, interact with AI-powered voice tutors, manage sessions/bookmarks, and create custom AI tutors.`,
    link: "https://saas-app-two-beryl.vercel.app/",
    images: [
      "/assets/projects-screenshots/saas-lms/11.png",
      "/assets/projects-screenshots/saas-lms/12.png",
      "/assets/projects-screenshots/saas-lms/13.png",
    ],
  },
  {
    id: 2,
    name: "Real Time Chat App",
    description: `A MERN stack real-time chat app with JWT authentication, Socket.io for messaging, Zustand for global state management, and TailwindCSS/Daisy UI for frontend styling. Features online user status, error handling, and responsive UI.`,
    link: "https://mern-chat-app-o6yp.onrender.com/",
    images: [
      "/assets/projects-screenshots/chat-app/11.png",
      "/assets/projects-screenshots/chat-app/12.png",
      "/assets/projects-screenshots/chat-app/13.png",
      
    ],
  },
  {
    id: 3,
    name: "Portfolio",
    description: `Welcome to my digital playground, where creativity meets code in the
            dopest way possible.`,
    link: "https://www.abhijitzende.com/",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png",
      "/assets/projects-screenshots/myportfolio/navbar.png",
      "/assets/projects-screenshots/myportfolio/projects.png",
      "/assets/projects-screenshots/myportfolio/project.png",
    ],
  },
  {
    id: 4,
    name: "Fintech Bank Application",
    description: `A financial SaaS platform built with Next.js, TypeScript, Appwrite, Plaid & Dwolla. Users can connect multiple bank accounts, see real-time transactions, transfer funds, and manage finances with advanced security.`,
    link: "https://banking-two-beta.vercel.app/",
    images: [
      "/assets/projects-screenshots/fintech-bank/1.png",
      "/assets/projects-screenshots/fintech-bank/2.png",
      "/assets/projects-screenshots/fintech-bank/3.png",
      "/assets/projects-screenshots/fintech-bank/4.png",
      "/assets/projects-screenshots/fintech-bank/5.png",
      "/assets/projects-screenshots/fintech-bank/6.png",
      "/assets/projects-screenshots/fintech-bank/7.png"

    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
