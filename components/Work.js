import styles from '../styles/Work.module.css'

const Work = () => {
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