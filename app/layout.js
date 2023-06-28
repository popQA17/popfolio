'use client';

import { createContext } from 'react';
import './globals.css'
import { Caveat, Poppins } from 'next/font/google'
import { FaBootstrap } from 'react-icons/fa'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoPython, IoLogoReact } from 'react-icons/io5'
import { SiChakraui, SiFigma, SiFlask, SiFramer, SiGit, SiGithub, SiMongodb, SiNextdotjs, SiNodedotjs, SiNpm, SiPypi, SiTailwindcss } from "react-icons/si";

const caveat = Caveat({ subsets: ['latin'], weight: '700' })
const poppins = Poppins({ subsets: ['latin'], weight: "300" })
const avatarUrl =  "https://popapps.popqa17.repl.co/users/729975591406796840/avatar"

export const MainContext = createContext({})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Pop Plays - Portfolio</title>
        <link rel={'icon'} href={avatarUrl}/>
      </head>
      <body>
        <MainContext.Provider value={{
          caveat,
          poppins,
          avatarUrl,
          tech: [
            {
              name: "CSS",
              icon: IoLogoCss3
            },
            {
              name: "HTML",
              icon: IoLogoHtml5
            },
            {
              name: "Javascript",
              icon: IoLogoJavascript
            },
            {
              name: "React",
              icon: IoLogoReact
            },
            {
              name: "Python",
              icon: IoLogoPython
            },
            {
              name: "Bootstrap",
              icon: FaBootstrap
            },
            {
              name: "MongoDB",
              icon: SiMongodb
            },
            {
              name: "Flask",
              icon: SiFlask
            },
            {
              name: "Tailwind",
              icon: SiTailwindcss
            },
            {
              name: "NextJS",
              icon: SiNextdotjs
            },
            {
              name: "Chakra-UI",
              icon: SiChakraui
            },
            {
              name: "Figma",
              icon: SiFigma
            },
            {
              name: "Framer-Motion",
              icon: SiFramer
            },
            {
              name: "NPM",
              icon: SiNpm
            },
            {
              name: "Git",
              icon: SiGit
            },
            {
              name: "Github",
              icon: SiGithub
            },
            {
              name: "NodeJS",
              icon: SiNodedotjs
            },
            {
              name: "PYPI",
              icon: SiPypi
            },
          ],
          projects: [
          {
              name: "Auriel",
              image: "https://auriel.tk/AurielBanner.png",
              description: "The Simple and Powerful Polls & Giveaways bot",
              link: 'https://auriel.tk',
              role: "Creator"
          },
          {
              name: "FaithClient",
              image: "https://beta.faithclient.tk/background.png",
              description: "Beautiful. Aesthetic. Intuitive.",
              link: 'https://faithclient.tk',
              role: "Web Dev"
          },
          {
              name: "NightDusk",
              image: "https://nightdusk.tk/NightDuskBanner.png",
              description: "Support sites made simple",
              link: 'https://nightdusk.tk',
              role: "Creator"
          },
          {
              name: "OneLink",
              image: "https://link.pop-plays.live/OneLink.png",
              description: "Seamless Connection between Devices",
              link: 'https://link.pop-plays.live',
              role: "Creator"
          }
        ]
        }}>
          {children}
        </MainContext.Provider>
      </body>
    </html>
  )
}
