import styles from '../styles/Work.module.css'

const Work = ({cursor}) => {
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
        <section className={styles.work}>
            <div className={styles.workContainer}>
                <div>
                <h1>WORK</h1>
                </div>
            </div>
            <div className={styles.absoluteCircle1}></div>
            <div className={styles.absoluteCircle2}></div>
        </section>
    );
}

export default Work;