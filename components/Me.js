import { useEffect, useRef } from 'react';
import  CircleType  from 'circletype';
import Image from 'next/image'
import styles from '../styles/Me.module.css'

const Me = ({cursor, cursorX, cursorY}) => {

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
    /*const circleText  = useRef();

    useEffect(() => {
         new CircleType(circleText.current).radius(90)
    }, [])*/
    return (
        <section id='me' className={styles.me}>
            
            <div className={styles.main}>
                <div className={styles.mainContainer}>
                    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={styles.firstName}>
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