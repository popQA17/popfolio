'use client';

import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { MainContext } from "./layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FaChevronRight, FaDiscord, FaGithub, FaPython, FaReact, FaRss, FaSwift } from 'react-icons/fa'
import $ from 'jquery'
import {motion } from 'framer-motion'
export default function Index(){
  const gridRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [sidebar, setSidebar] = useState(false)
  const [count, setCount] = useState(0)
  const app = useRef(null)
  const ctx = useContext(MainContext)
  const [loaded, setLoaded] = useState(false)
  const sections = [
    {
      name: "Introduction",
      id: "#ProfileIntroductory",
    },
    {
      name: 'Technologies',
      id: "#TechnologiesSection",
    },
    {
      name: 'Projects',
      id: "#ProjectsSection",
    },
    {
      name: 'Links',
      id: "#LinksSection",
    }
  ]
  const links = [
    {
      name: "Discord",
      description: "Ask me questions, project requests, or simply just have a chat",
      icon: FaDiscord,
      link: 'https://discord.com/users/729975591406796840'
    },
    {
      name: "Blog",
      description: "Keep up to date with regular posts on programming",
      icon: FaRss,
      link: 'https://blog.pop-plays.live'
    },
    {
      name: "Github",
      description: "Discover my contributions and repositories. Find this website on Github",
      icon: FaGithub,
      link: 'https://github.com/popqa17'
    }
  ]
  function jumpToSection(section){
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 800, function(){
      // window.location.hash = section;
    });
  }
  useEffect(() => {
    let ectx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      setLoaded(true)
      gsap.to('#profileImage', {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        // scrollTrigger: {
        //   trigger: "#ProfileIntroductory",
        //   start: "top top", // start the animation when the top of the box hits the center of the viewport
        //   end: 'bottom 80%',
        //   id: 'profileImage',
        //   scrub: true, // smooth animation
        // }
      });
      gsap.to("#profileName", {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '#ProfileIntroductory',
          start: "top top", // start the animation when the top of the box hits the center of the viewport
          end: 'bottom center',
          scrub: true, // smooth animation
          pin: true,
        },
        onComplete: ()=>{
          setCount(0)
          setSidebar(true)
        },
        onUpdate: (self) => {
          if (window.scrollY <= window.innerHeight){
            setSidebar(false)
          }
        },
      });
      gsap.to("#TechnologiesFavorites", {
        color: '#387AE6',
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '#TechnologiesFavorites',
          start: "top center", // start the animation when the top of the box hits the center of the viewport
          end: 'bottom center',
          scrub: true, // smooth animation
        },
        onComplete: ()=>{
          setProgress(1)
        },
        onUpdate: (self) => {
          if (window.scrollY <= window.innerHeight + document.getElementById("TechnologiesSection").offsetHeight){
            setProgress(0)
          }
        },
      });
      gsap.to("#TechnologiesMore", {
        color: '#387AE6',
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '#TechnologiesMore',
          start: "top center", // start the animation when the top of the box hits the center of the viewport
          end: 'bottom center',
          scrub: true, // smooth animation

        }
      });
      gsap.to("#TechnologiesReact", {
        color: '#fff',
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#TechnologiesReact",
          start: "top center", // start the animation when the top of the box hits the center of the viewport
          end: 'bottom center',
          scrub: true, // smooth animation

        }
      });
      gsap.to("#TechnologiesPython", {
        color: '#fff',
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#TechnologiesPython",
          start: "top center", // start the animation when the top of the box hits the center of the viewport
          end: 'bottom center',
          scrub: true, // smooth animation

        }
      });
      gsap.to("#TechnologiesSwift", {
        color: '#fff',
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#TechnologiesSwift",
          start: "top center", // start the animation when the top of the box hits the center of the viewport
          end: 'bottom center',
          scrub: true, // smooth animation
        }
      });
      gsap.to("#ProjectsHighlight", {
        color: "#387AE6",
        duration: 2,
        scrollTrigger: {
          trigger: '#ProjectsSection',
          start: "top top", // start the animation when the top of the box hits the center of the viewport
          end: 'bottom 90%',
          markers: false,
          scrub: true, // smooth animation
        },
        onComplete: ()=>{
          setProgress(2)
        },
        onUpdate: (self) => {
          if (window.scrollY <= window.innerHeight * 2 + document.getElementById("TechnologiesSection").offsetHeight){
            setProgress(1)
          }
        },
      });
      gsap.to("#LinksHighlight", {
        color: "#387AE6",
        duration: 2,
        scrollTrigger: {
          trigger: '#LinksSection',
          start: "top center", // start the animation when the top of the box hits the center of the viewport
          end: 'bottom center',
          markers: false,
          scrub: true, // smooth animation
        },
        onComplete: ()=>{
          setProgress(3)
        },
        onUpdate: (self) => {
          if (window.scrollY <= window.innerHeight * 3 + document.getElementById("TechnologiesSection").offsetHeight){
            setProgress(2)
          }
        },
      });
      // let sections = gsap.utils.toArray(".projectPanel");
      // let scrollTween = gsap.to(sections, {
      //   xPercent: -100 * (sections.length - 1),
      //   ease: "none", // <-- IMPORTANT!
      //   scrollTrigger: {
      //     trigger: "#ProjectsSection",
      //     pin: true,
      //     scrub: 0.1,
      //     //snap: directionalSnap(1 / (sections.length - 1)),
      //     markers: true,
      //     end: ()=> `+=${document.getElementById('ProjectScroller').scrollWidth}`
      //   }
      // });
      setTimeout(()=>{
        gsap.to("#ProjectScroller", {
          x: -(document.getElementById('ProjectScroller').scrollWidth - document.getElementById("ProjectScroller").offsetWidth),
          ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
            trigger: "#ProjectsSection",
            pin: true,
            scrub: 0.1,
            //snap: directionalSnap(1 / (sections.length - 1)),
            markers: false,
            end: ()=> `+=${document.getElementById('ProjectScroller').scrollWidth -  document.getElementById("ProjectScroller").offsetWidth}`
          }
        })
      }, 1000)
      window.scrollTo(0, 0);
    }, app);
    return ()=> ectx.revert()
  }, []);
  useEffect(()=>{
    let ectx = gsap.context(() => {
      console.log(count)
      console.log(ctx.tech.length)
    if (count >= ctx.tech.length){
      ctx.tech.map((tech)=>{
        // gsap.to(`#TechnologiesGrid${tech.name}`, {
        //   opacity: 1,
        //   duration: 2,
        //   scrollTrigger: {
        //     trigger: `#TechnologiesGrid${tech.name}`,
        //     start: "top center", // start the animation when the top of the box hits the center of the viewport
        //     end: 'bottom center',
        //     markers: true,
        //     scrub: true, // smooth animation
        //   }
        // });
      })
    }
  })
  return ()=> ectx.revert()
  }, [count])
  function TechGridItem({tech, indx}){
    useEffect(()=>{
      setCount(indx + 1)
    }, [])
    return <a href={tech.link} target={'_blank'} id={`TechnologiesGrid${tech.name}`} className="transition-all bg-white/5 hover:bg-white/10 text-white/50 hover:text-white/90 hover:scale-90 rounded-lg m-1 h-[120px] w-[120px] flex items-center justify-center">
    <tech.icon className={'text-5xl'}/>
  </a>
  }
  return <>
  <div ref={app} className="flex items-center w-screen h-max">
    <div className="statement-gradient h-screen w-screen lol top-0 left-0 fixed z-[-1]"/>
      {/* <div className={`transition-all sidebar h-screen z-20 fixed ${sidebar ? "left-0" : "left-[-300px]"} top-0 flex flex-col`}> */}
        <div className={`transition-all z-20 fixed ${sidebar ? "top-0" : "top-[-300px]"} min-w-[300px] left-4 rounded-b backdrop-blur-xl bg-white/5 p-4 flex flex-col`}>
          {sections.map((section, index)=>{
            return <div className="flex items-center">
              {progress == index ? <motion.div layoutId={"sidebarPointer"}><FaChevronRight/></motion.div> : <FaChevronRight className="opacity-0"/>}
              <button onClick={()=> jumpToSection(section.id)} className={`ml-1 ${progress >= index ? 'text-white' : 'text-white/50'}`}>{section.name}</button>
            </div>
          })}
        </div>
        {/* <div className={`transition-all z-20 fixed ${sidebar ? "bottom-0" : "bottom-[-300px]"} min-w-[300px] left-4 rounded-b backdrop-blur-xl bg-white/5 p-4 flex flex-col`}>
          <a href="https://blog.pop-plays.li"
        </div> */}
      {/* </div> */}
    <div className="w-full">
      <div id={'ProfileIntroductory'} className="flex flex-col relative items-center justify-center h-screen w-full lol">
          <img id={'profileImage'} className="w-[200px] h-[200px] rounded-full opacity-0 scale-50" src={ctx.avatarUrl}/>
          <div id={'profileName'} className={`opacity-0 translate-y-[10px] mt-3 flex flex-col items-center`}>
            <p className={`text-5xl ${ctx.caveat.className}`}>Pop Plays</p>
            <div className="flex items-center mt-3">
              <button onClick={()=> jumpToSection('#TechnologiesSection')} className="btn normal-case mx-2 btn-primary">Learn More</button>
              <a href={'https://blog.pop-plays.live'} target="_blank" className="btn normal-case mx-2">Blog</a>
            </div>
          </div>
          <p className="absolute bottom-[10px] text-white/50 text-sm animate-pulse">Scroll Down</p>
      </div>
      <div id={'TechnologiesSection'} className="flex flex-col relative items-center justify-center min-h-screen w-full lol px-4">
          <h1 className="text-3xl text-white/70 font-bold mb-4">My <span id={'TechnologiesFavorites'}>Favorite</span> Technologies:</h1>
          <div className="flex flex-col">
          <h1 id={'TechnologiesReact'} className="text-3xl text-white/50 font-bold my-2 flex"><FaReact/> React</h1>
          <h1 id={'TechnologiesPython'} className="text-3xl text-white/50 font-bold my-2 flex"><FaPython/> Python</h1>
          <h1 id={'TechnologiesSwift'} className="text-3xl text-white/50 font-bold my-2 flex"><FaSwift/> Swift</h1>
          </div>
          <h1 className="text-4xl mt-12 text-white/80 mb-4 font-bold">And <span id={'TechnologiesMore'}>Many</span> More</h1>
          <div className="flex flex-wrap w-full max-w-[800px]">
            {ctx.tech.map((tech, indx)=>{
              return <TechGridItem tech={tech} indx={indx}/>
            })}
          </div>
      </div>
      <div id={'ProjectsSection'} className="flex flex-col relative items-center h-[100vh] w-full lol overflow-hidden px-4">
        <div className="flex-1"/>
        <h1 className="text-3xl text-white font-bold mb-4 w-full">Some of my <span id={'ProjectsHighlight'}>Projects</span>:</h1>
        <div id={'ProjectScroller'} className="flex items-center w-full h-full max-h-[250px] rounded-lg">
          {ctx.projects.map((project)=>{
            return <div className="projectPanel mx-2 flex items-center rounded-lg overflow-hidden justify-center min-w-[450px] bg-white/5 h-full relative">
              <img src={project.image} className="w-full h-full object-cover opacity-20 blur-md"/>
              <div className="flex flex-col justify-center p-4 w-full absolute top-0 h-full">
                <div className="flex-1"/>
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <p className="text-white/50">{project.description}</p>
                <div className="bg-white/10 rounded-lg px-2 py-1 w-max text-sm mt-2">{project.role}</div>
                <div className="flex-1"/>
                <a href={project.link} target="_blank" className="btn btn-primary btn-sm">Visit</a>
              </div>
            </div>
          })}
        </div>
        <div className="flex-1"/>
      </div>
      <div id={'LinksSection'} className="flex flex-col relative items-center justify-center h-[100vh] w-full lol overflow-hidden px-4">
        <h1 className="text-3xl text-white font-bold mb-4">Useful <span id={'LinksHighlight'}>Links</span>:</h1>
        {links.map((link)=>{
          return <a href={link.link} target={'_blank'} className="bg-white/5 my-2 hover:bg-white/10 hover:scale-105 overflow-hidden  flex items-center transition-all w-full max-w-[800px] rounded-full">
            <div className="rounded-l-full w-auto h-full flex items-center justify-center bg-white/5" style={{aspectRatio: "1/1"}}>
              <link.icon className="text-2xl"/>
            </div>
            <div className="flex flex-col p-4 py-2">
              <p>{link.name}</p>
              <p className="text-white/50">{link.description}</p>
            </div>
          </a>
        })}
        {/* <div class="flex items-center flex-col justify-center lg:flex-row">
          <a href={'https://discord.com/users/729975591406796840'} target="_blank" class="hover:bg-white/10 hover:scale-105 transition-all flex flex-col items-center justify-center p-4 rounded-lg bg-white/5 h-[150px] w-[250px]">
            <h2 className="text-xl font-bold mb-4">Discord</h2>
            <p className="text-sm text-center">Ask me questions, project requests, or just have a chat.</p>
          </a>
          <div class="divider divider-vertical lg:divider-horizontal">OR</div>
          <button onClick={()=> window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')} class="hover:bg-white/10 hover:scale-105 transition-all flex flex-col items-center justify-center p-4 rounded-lg bg-white/5 h-[150px] w-[250px]">
            <h2 className="text-xl font-bold mb-4">Telepathy</h2>
            <p className="text-sm text-center">To get to me super quickly!! :P</p>
          </button>
        </div> */}
      </div>
      <div className="h-[50px] flex items-center border-t border-white/10 px-4">
        <p className="text-white/70">© All Rights Reserved, 2023</p>
        <div className="flex-1"/>
        <p className="text-white/70">Made by <span className="text-primary">Pop Plays</span> ✨</p>      
      </div>
    </div>
  </div>
  {!loaded && 
  <div className="fixed top-0 left-0 bg-black h-screen w-full lol flex flex-col items-center justify-center">
    <h1 className="text-xl animate-pulse">Loading some <span className="text-primary">Juicy Animations</span>..</h1>
    <p className="text-sm text-white/50">Tip: Keep scrolling when it loads!</p>
  </div>}
  </>
}
