import { useEffect, useRef } from 'react';
import  CircleType  from 'circletype';
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
                        <p>ADEBAYO</p>
                    </div>
                    <div className={styles.lastName}>
                        <p>OLOWOFOYEKU</p>
                    </div>
                    <div className={styles.spin}>
                        <img src='/scroll.svg' />
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Me;