'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function Home() {
  const gridRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Create the ScrollTrigger animation for each box
    boxRefs.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            scrub: true,
            markers: true,
          },
          delay: index * 1,
        }
      );
    });
  }, []);

  return (
    <div>
      <div className='h-[200vh]'/>
      <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div ref={(el) => (boxRefs.current[0] = el)} style={{ width: '100%', height: '200px', backgroundColor: 'red' }}></div>
        <div ref={(el) => (boxRefs.current[1] = el)} style={{ width: '100%', height: '200px', backgroundColor: 'blue' }}></div>
        <div ref={(el) => (boxRefs.current[2] = el)} style={{ width: '100%', height: '200px', backgroundColor: 'green' }}></div>
      </div>
      <div style={{ height: '200vh' }}></div>
    </div>
  );
}
