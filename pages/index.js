/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import About from '../components/About'
import Layout from '../components/Layout'
import Me from '../components/Me'
import Work from '../components/Work'
import styles from '../styles/Home.module.css'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLocoScroll'
import Contact from '../components/Contact'
import Loader from '../components/Loader'

export default function Home() {
  const [screen, setScreen] = useState(0)
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()
  //const [loading, setLoading] = useState(true)
  const cursor = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  const mouse = (e) => {
    cursor.current.style.left=`${e.clientX - 16}px`
    cursor.current.style.top=`${e.clientY - 16}px`
  }
  const tl = gsap.timeline()
  //useLocoScroll()

  const changeScreen = (number) => {
    setScreen(number)
    console.log(number)
  }

  // useEffect(() => {
  //   window.addEventListener('load', ()=> {
  //     setLoading(false)
  //   })

  //   return (
  //     window.removeEventListener('load', ()=> {
  //       setLoading(false)
  //     })
  //   )
  // }, [])


  useEffect(()=> {
    //if (loading == false) {
      ScrollTrigger.create( {
        trigger: '#me',
        start: 'top top',
        onToggle: self => self.isActive && setScreen(0)
      })
    //   ScrollTrigger.create( {
    //     trigger: '#about',
    //     start: 'top top',
    //     markers: true,
    //     onToggle: self => self.isActive && setScreen(1)
    //   }
    // )

    
    //   ScrollTrigger.create({
    //     trigger: '#work',
    //     start: self => self.previous().end,
    //     markers: true,
    //     onToggle: self => self.isActive && setScreen(2)
    //   }
    // )

    

    //}
  }, [])

  
  useEffect(()=> {
    
    gsap.timeline(
      {
        scrollTrigger: {
          trigger: '#about',
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: true,
          onToggle: self => self.isActive && setScreen(1)
        }
      }
    )
    .to('#svg', {
      strokeDashoffset: 0,
      duration: 13
    })
    .to('#text', {
      y: -100,
      opacity: 0,
      duration: 5
    })
    .to('#svg', {
      opacity: 0,
      duration: 5
    })
    .to('#story', {
      y: -700,
      duration: 20
    })
    
    
  }, [])

  useEffect(()=> {
    const changeColorToWhite = (p) => {
      gsap.to(p, {color: 'white'})
    }
    const changeColorToGrey = (p) => {
      gsap.to(p, {color: 'rgba(255, 255, 255, 0.2)'})
    }
    window.addEventListener('scroll', ()=> {
     const div = gsap.getProperty('#story', 'y')
    let ps = gsap.utils.toArray('#p')
      let p1 = '#p1'
      ps.forEach((p, i) => {
        if (div < (-355 - (75 * i))) {
          changeColorToWhite(p)
        } else if (div == 0) {
          changeColorToGrey(p)
        }
      })
      
  })
    

    
  }, [])

  useEffect(() =>{
    window.addEventListener('mousemove', mouse)
    console.log(innerHeight)
    /*let sections = gsap.utils.toArray("section"), 
    currentSectiion = sections[0];

    console.log(currentSectiion)
  
    gsap.defaults({overwrite: 'auto', duration: 0.3});
  
    gsap.set("body", {height: (sections.length * 100) + "%"});
  
    sections.forEach((section, i) => {
      console.log((i - 0.5) * innerHeight)
      ScrollTrigger.create({
        start: () => (i - 0.5) * innerHeight,
        end: () => (i + 0.5) * innerHeight,
        onToggle: self => self.isActive && setSection(section),
      })
    })
  
    function setSection (newSection) {
      if (newSection !== currentSectiion) {
        gsap.to(currentSectiion, { autoAlpha: 0})
        gsap.to(newSection, { autoAlpha: 1})
        currentSectiion = newSection
        setScreen(sections.indexOf(currentSectiion))
      }
    }
  
    /*ScrollTrigger.create({
      start: 1,
      end: () => ScrollTrigger.maxScroll(window) - 1,
      onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
      onLeave: self => self.scroll(2)
    }).scroll(2)*/
  }, [])
  return (
    
    <div data-scroll-container id='main-page-container' className={styles.home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Scope+One&display=swap" rel="stylesheet"></link>
      </Head>
      <div ref={cursor} className='cursor' style={{}}></div>
      {/* <Loader />  */}
      <Layout cursor={cursor} screen={screen}>
        <Me setScreen={setScreen} cursorX={cursorX} cursorY={cursorY} cursor={cursor} />
        <About cursorX cursorY setScreen={setScreen} cursor={cursor} /> 
        <Work cursorX cursorY setScreen={setScreen} cursor={cursor} />
        {/* <Contact cursor={cursor} setScreen={setScreen} /> */}
        {/* <About cursorX cursorY setScreen={setScreen} cursor={cursor} /> */}

        <Contact cursor={cursor} setScreen={setScreen} />
      </Layout>
    </div>
  )
}
