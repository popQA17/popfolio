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
              name: "Mongo DB",
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
              name: "Next.JS",
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
              name: "Node.js",
              icon: SiNodedotjs
            },
            {
              name: "PYPI",
              icon: SiPypi
            },
          ]
        }}>
          {children}
        </MainContext.Provider>
      </body>
    </html>
  )
}
