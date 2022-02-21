import React from 'react'
// import KannanImage from "../assets/images/kannan.png"
import Image from 'next/image'
import styles from "../styles/Home.module.css"

function HeroSection() {
    return (
        <div>
            <div className="myImage">
                {/* <Image 
                    className={styles.kannanImg}
                    src={KannanImage}
                    placeholder="Picture of Kannan"
                    width={300}
                    height={300}      
                /> */}
            </div>
            <div className={styles.heroText}>
                <h1 className={styles.greeting}>Hi, Welcome</h1>
                <h1 className={styles.name}>I am <span className={styles.myName}>Kannan</span> ,</h1>
                <h1 className={styles.position}>Web Developer</h1>
            </div>
            
        </div>
    )
}

export default HeroSection
