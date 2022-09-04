import { useEffect, useRef } from 'react';
import  CircleType  from 'circletype';
import Image from 'next/image'
import styles from '../styles/Me.module.css'

const Me = () => {

    

    /*const circleText  = useRef();

    useEffect(() => {
         new CircleType(circleText.current).radius(90)
    }, [])*/
    return (
        <section className={styles.me}>
            
            <div className={styles.main}>
                <div className={styles.mainContainer}>
                    <div className={styles.firstName}>
                        <p >ADEBAYO</p>
                        <p >A SOFTWARE</p>
                    </div>
                    <div className={styles.lastName}>
                        <p>OLOWOFOYEKU</p>
                        <p>DEVELOPER</p>
                    </div>
                    <div className={styles.spin}>
                        <Image alt='spin' width={160} height={160} src='/scroll.svg' />
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Me;