import styles from '../styles/About.module.css'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import Spline from '@splinetool/react-spline';
import { useEffect } from 'react';


const About = ({cursor}) => {
  gsap.registerPlugin(ScrollTrigger)
  
    const onMouseEnter = () => {
        cursor.current.style.width = '60px';
        cursor.current.style.height = '60px';
        cursor.current.style.marginLeft = '-14px';
        cursor.current.style.marginTop = '-14px';
}

const onMouseLeave = () => {
    cursor.current.style.width = '35px';
    cursor.current.style.height = '35px';
    cursor.current.style.marginLeft = '0px';
    cursor.current.style.marginTop = '0px';
}


    return (
        <section className={styles.about}>
            <div className={styles.aboutContainer}>
            {/*<Spline scene="https://prod.spline.design/xJt-o69YUXzq3zur/scene.splinecode" />*/}
                {/*<div className={styles.aboutBox}></div>*/}
                <svg className={styles.aboutBox} width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="442" height="442" stroke="black" rx="15" strokeWidth="8"/>
                </svg>

                <h1>
                    <span>WHO </span> 
                    <span>AM </span> 
                    <span>I?</span>
                </h1>
            </div>
        </section>
    );
}

export default About;