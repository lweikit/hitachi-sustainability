import styles from '../styles/sections/02.module.scss'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  // markers: true,
  pin: true,
  pinSpacing: false,
  scrub: 1,
})

const S02 = () => {
  // store a reference to the box div
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bgContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLObjectElement>(null);
  const stats1Ref = useRef<HTMLObjectElement>(null);
  const stats2Ref = useRef<HTMLObjectElement>(null);
  const stats3Ref = useRef<HTMLObjectElement>(null);

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        end: '+=100%',
      }
    })
    .from(headerRef.current, {
      top: `30%`,
    })
    .from(mapRef.current, {
      top: `50%`,
      marginTop: `-12.5%`,
      left: `50%`,
      marginLeft: `-12.5%`,
      width: `25%`,
      height: `25%`,
    })
    .to(mapRef.current, {
      opacity: 0.15,
    })
    .from(stats1Ref.current, {
      opacity: 0,
    })
    .to(stats1Ref.current, {
      opacity: 0,
    })
    .from(stats2Ref.current, {
      opacity: 0,
    })
    .to(stats2Ref.current, {
      opacity: 0,
    })
    .from(stats3Ref.current, {
      opacity: 0,
    })
  });

  return (
    <div className={styles.container} ref={containerRef}>
      <h1 className={styles.header} ref={headerRef}>
        SOUTHEAST ASIA
      </h1>
      <div className={styles.bg} ref={bgContainerRef}>
        <object type="image/svg+xml" data="sections/02/map-full-size.svg" className={styles.map} ref={mapRef}/>
        <object type="image/svg+xml" data="sections/02/stats-1.svg" className={styles.stats} ref={stats1Ref}/>
        <object type="image/svg+xml" data="sections/02/stats-2.svg" className={styles.stats} ref={stats2Ref}/>
        <object type="image/svg+xml" data="sections/02/stats-3.svg" className={styles.stats} ref={stats3Ref}/>
      </div>
    </div>
  )
}

export default S02