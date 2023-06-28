'use client';

import { createContext } from 'react';
import './globals.css'
import { Caveat, Poppins } from 'next/font/google'
import { FaBootstrap } from 'react-icons/fa'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoPython, IoLogoReact } from 'react-icons/io5'
import { SiCanva, SiChakraui, SiFigma, SiFlask, SiFramer, SiGit, SiGithub, SiHashnode, SiMongodb, SiNextdotjs, SiNodedotjs, SiNpm, SiPypi, SiSwift, SiTailwindcss, SiVisualstudiocode, SiWindowsterminal } from "react-icons/si";

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
              icon: IoLogoCss3,
              link: "https://www.w3.org/Style/CSS/Overview.en.html",
            },
            {
              name: "HTML",
              icon: IoLogoHtml5,
              link: "https://www.w3.org/html/",
            },
            {
              name: "Javascript",
              icon: IoLogoJavascript,
              link: "https://v8.dev/",
            },
            {
              name: "React",
              icon: IoLogoReact,
              link: "https://react.dev/",
            },
            {
              name: "Python",
              icon: IoLogoPython,
              link: 'https://python.org'
            },
            {
              name: "Bootstrap",
              icon: FaBootstrap,
              link: "https://getbootstrap.com"
            },
            {
              name: "MongoDB",
              icon: SiMongodb,
              link: "https://mongodb.com"
            },
            {
              name: "Flask",
              icon: SiFlask,
              link: "https://flask.palletsprojects.com/en/2.3.x/"
            },
            {
              name: "Tailwind",
              icon: SiTailwindcss,
              link: "https://tailwindcss.com"
            },
            {
              name: "NextJS",
              icon: SiNextdotjs,
              link: 'https://nextjs.org'
            },
            {
              name: "Chakra-UI",
              icon: SiChakraui,
              link: 'https://chakra-ui.com',
            },
            {
              name: "Figma",
              icon: SiFigma,
              link: 'https://figma.com'
            },
            {
              name: "Framer-Motion",
              icon: SiFramer,
              link: 'https://www.framer.com/motion/'
            },
            {
              name: "NPM",
              icon: SiNpm,
              link: 'https://npmjs.org'
            },
            {
              name: "Git",
              icon: SiGit,
              link: 'https://git-scm.com'
            },
            {
              name: "Github",
              icon: SiGithub,
              link: 'https://github.com'
            },
            {
              name: "NodeJS",
              icon: SiNodedotjs,
              link: 'https://nodejs.org'
            },
            {
              name: "PYPI",
              icon: SiPypi,
              link: 'https://pypi.org'
            },
            {
              name: "Swift",
              icon: SiSwift,
              link: 'https://developer.apple.com/swift/'
            },
            {
              name: "Canva",
              icon: SiCanva,
              link: 'https://canva.com'
            },
            {
              name: "Hashnode",
              icon: SiHashnode,
              link: 'https://hashnode.com',
            },
            {
              name: "VisualStudioCode",
              icon: SiVisualstudiocode,
              link: 'https://https://code.visualstudio.com/'
            },
            {
              name: 'Raycast',
              icon: SiWindowsterminal,
              link: "https://raycast.com"
            }
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
          },
        ]
        }}>
          {children}
        </MainContext.Provider>
      </body>
    </html>
  )
}
