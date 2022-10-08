import { Suspense, useEffect, useRef } from 'react';
import  CircleType  from 'circletype';
import Image from 'next/image'
import styles from '../styles/Me.module.css'
import {Canvas, extend, useFrame, useLoader} from "@react-three/fiber"
import { Color, Texture, TextureLoader, Vector2 } from 'three';
import fragment from "raw-loader!glslify-loader!../shaders/fragment.frag"
import vertex from "raw-loader!glslify-loader!../shaders/vertex.vert"
import { shaderMaterial } from '@react-three/drei';
import gsap from 'gsap';


const MyShaderMaterial = shaderMaterial(
    { uTime: 0, uColor: new Color(1, 0.2, 1), uTexture: new Texture() },
    vertex,
    fragment
)

extend({MyShaderMaterial})


const Wave = () => {
    const ref = useRef()
    useFrame(({clock}) => (ref.current.uTime = clock.getElapsedTime()))

    const [image] = useLoader(TextureLoader, ['test.webp'])
    return (
        <mesh>
            <planeBufferGeometry args={[0.6, 0.4, 16, 16]} />
            <myShaderMaterial  ref={ref} uTexture={image}/>
            {/*<shaderMaterial uniforms={{time: {value: 0}, resolution: {value: Vector2}}} fragmentShader={fragment} vertexShader={vertex} />*/}
        </mesh>
    )
}
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
        <>
        
        <section data-scroll-section id='me' className={styles.me}>
        
            <div className={styles.main}>
                <div className={styles.mainContainer}>
                    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={styles.firstName}>
                        <p id='top' >ADEBAYO</p>
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
            <Canvas camera={{fov: 8, position: [0, 0, 5]}} style={{position: 'absolute', left: 0, top: 0, zIndex: -1}}>
                
                <Suspense fallback={null}>
                    <Wave />
                </Suspense>
            </Canvas>
        </section>
        </>
    );
}

export default Me;