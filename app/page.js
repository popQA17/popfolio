'use client';

import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { MainContext } from "./layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FaPython, FaReact, FaSwift } from 'react-icons/fa'

export default function Index(){
  const gridRef = useRef(null)
  const [count, setCount] = useState(0)
  const app = useRef(null)
  const ctx = useContext(MainContext)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    let ectx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      setLoaded(true)
      gsap.to('#profileImage', {
        opacity: 1,
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: "#ProfileIntroductory",
          start: "top top", // start the animation when the top of the box hits the center of the viewport
          end: 'bottom 80%',
          id: 'profileImage',
          scrub: true, // smooth animation
        }
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
        }
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

        }
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
          markers: true,
          scrub: true, // smooth animation
        }
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
            markers: true,
            end: ()=> `+=${document.getElementById('ProjectScroller').scrollWidth -  document.getElementById("ProjectScroller").offsetWidth}`
          }
        })
        console.log(document.getElementById('ProjectScroller').scrollWidth + document.getElementById('ProjectScroller').clientWidth)
        console.log(document.getElementById('ProjectScroller').clientWidth)
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
      console.log('yo we made it')
      ctx.tech.map((tech)=>{
        gsap.to(`#TechnologiesGrid${tech.name}`, {
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: `#TechnologiesGrid${tech.name}`,
            start: "top center", // start the animation when the top of the box hits the center of the viewport
            end: 'bottom center',
            scrub: true, // smooth animation
          }
        });
      })
    }
  })
  return ()=> ectx.revert()
  }, [count])
  function TechGridItem({tech, indx}){
    useEffect(()=>{
      setCount(indx + 1)
    }, [])
    return <div id={`TechnologiesGrid${tech.name}`} className="opacity-20 transition-all bg-white/5 hover:bg-white/10 text-white/50 hover:text-white/90 hover:scale-90 rounded-lg m-1 h-[120px] w-[120px] flex items-center justify-center">
    <tech.icon className={'text-5xl'}/>
  </div>
  }
  return <>
  <div ref={app}>
    <div className="statement-gradient h-screen w-screen fixed z-[-1]"/>
    <div id={'ProfileIntroductory'} className="flex flex-col relative items-center justify-center h-screen w-screen">
        <img id={'profileImage'} className="w-[200px] h-[200px] rounded-full opacity-0 scale-50" src={ctx.avatarUrl}/>
        <p id={'profileName'} className={`opacity-0 translate-y-[10px] text-5xl mt-3 ${ctx.caveat.className}`}>Pop Plays</p>
        <p className="absolute bottom-[10px] text-white/50 text-sm animate-pulse">Scroll Down</p>
    </div>
    <div id={'TechnologiesSection'} className="flex flex-col relative items-center justify-center h-screen w-screen px-4">
        <h1 className="text-3xl text-white/70 font-bold mb-4">My <span id={'TechnologiesFavorites'}>Favorite</span> Technologies:</h1>
        <div className="flex flex-col">
        <h1 id={'TechnologiesReact'} className="text-3xl text-white/50 font-bold my-2 flex"><FaReact/> React</h1>
        <h1 id={'TechnologiesPython'} className="text-3xl text-white/50 font-bold my-2 flex"><FaPython/> Python</h1>
        <h1 id={'TechnologiesSwift'} className="text-3xl text-white/50 font-bold my-2 flex"><FaSwift/> Swift</h1>
        </div>
        <h1 className="text-4xl mt-12 text-white/80 font-bold">And <span id={'TechnologiesMore'}>Many</span> More</h1>
        <div className="flex flex-wrap w-full max-w-[800px]">
          {ctx.tech.map((tech, indx)=>{
            return <TechGridItem tech={tech} indx={indx}/>
          })}
        </div>
    </div>
    <div id={'ProjectsSection'} className="flex flex-col relative items-center h-[100vh] w-screen overflow-hidden px-4">
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
    <div className="h-[200vh]"/>
  </div>
  {!loaded && 
  <div className="fixed top-0 left-0 bg-black h-screen w-screen flex flex-col items-center justify-center">
    <h1>Loading</h1>
  </div>}
  </>
}
